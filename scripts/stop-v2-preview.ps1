param([switch]$CheckOnly)
$previewRoot = Split-Path -Parent $PSScriptRoot
$connections = @(Get-NetTCPConnection -LocalAddress '127.0.0.1' -LocalPort 5188 -State Listen -ErrorAction SilentlyContinue)
if (!$connections.Count) { Write-Output 'No preview server is listening on 127.0.0.1:5188.'; exit 0 }
foreach ($serverProcessId in ($connections.OwningProcess | Select-Object -Unique)) {
  $serverProcess = Get-CimInstance Win32_Process -Filter "ProcessId = $serverProcessId"
  $isOwned = $serverProcess.CommandLine -match [regex]::Escape($previewRoot) -and
    $serverProcess.CommandLine -match 'vite[\\/]bin[\\/]vite\.js' -and
    $serverProcess.CommandLine -match '--port\s+5188' -and
    $serverProcess.CommandLine -match '--host\s+127\.0\.0\.1'
  if (!$isOwned) { throw "Port 5188 belongs to another process. No process was stopped." }
  if ($CheckOnly) { Write-Output "Verified preview process: $serverProcessId" }
  else { Stop-Process -Id $serverProcessId; Write-Output "Stopped preview process: $serverProcessId" }
}
