# Case study V2 preview

工作区：`C:\Users\win\.codex\worktrees\case-study-v2\shuyuege.github.io`
分支：`preview/case-study-v2`
基线：`ea2f1f5fbc0533328f5f603e781aaa0987e41565`。

用户已授权补完并推送此预览分支。保留独立 worktree，不合并 `main`，不替换正式页面；现有部署 workflow 只监听 `main`。

## 浏览、启动与停止

- MORI：http://127.0.0.1:5188/#/projects/mori-v2
- Patsy’s：http://127.0.0.1:5188/#/projects/patsy-v2
- BookThing：http://127.0.0.1:5188/#/projects/bookthing-v2

在 PowerShell 启动：

```powershell
Set-Location -LiteralPath 'C:\Users\win\.codex\worktrees\case-study-v2\shuyuege.github.io'
npm run dev -- --host 127.0.0.1 --port 5188 --strictPort
```

前台用 **Ctrl+C** 停止；后台预览在同目录运行：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\stop-v2-preview.ps1
```

停止脚本先核对进程路径、端口和 loopback 参数，拒绝停止其他服务器。依赖已按原 lockfile 安装；必要时在此目录运行 `npm ci`。

## 编辑入口

| 页面 | 英文文案和素材配置 | 组件 | 独立样式 |
| --- | --- | --- | --- |
| MORI | `src/preview/content/moriV2.ts` | `src/preview/MoriV2.tsx` | `src/preview/MoriV2.css` |
| Patsy’s | `src/preview/content/patsyV2.ts` | `src/preview/PatsyV2.tsx` | `src/preview/PatsyV2.css` |
| BookThing | `src/preview/content/bookthingV2.ts` | `src/preview/BookThingV2.tsx` | `src/preview/BookThingV2.css` |

预览共用组件、放大对话框和 metadata：`src/preview/PreviewShared.tsx`；共用预览样式：`src/preview/PreviewV2.css`。`src/App.tsx` 只新增三条 lazy 路由。原素材在 `public/images/projects/`；另存局部在 `public/images/preview/`，裁图来源及坐标记在内容文件中。继续编辑 V2，不新增 V3/V4 或公开入口；不要编辑 `dist/`。

## 已确认的内容边界

- MORI：按用户确认，共用现有未剪辑 V1 录屏。网页采用可播放的 AVC 压缩版（约 9 秒），原 HEVC 文件保留；图注明确该片段展示产品背景，未把两种返回动作分别剪辑。一次只播放一个视频。AI 开场引导无素材，记录表单本轮不要求补图，两处待补占位已移除。健康前后图日期不同，保留布局对照与非连续测试的说明；不增加上线后指标。
- Patsy’s：研究数字表示样本意愿，不是行为指标。报告内部对时间选择反馈的完成状态存在冲突，采用当前 handoff 的“未解决”表述。界面是团队产出；修订后的下单路径仍是 preset 原型，add-to-cart 不工作、未复测。未用缺失导出来宣称个人 UI 成果。
- BookThing：独立学术桌面概念，未实现或正式测试。IA、捐赠层级和日历展示设计意图，不宣称已测得效果。

## 检查和记录

`npm run build` 通过。1440、820、390 px 检查三页：标题、直接访问/刷新、历史导航、锚点焦点、图片及完整源图、放大关闭/焦点返回、折叠、视频播放/离屏暂停/reduced motion、图片加载与横向溢出。V2 的 `noindex` 随路由离开清除；正式页面无 V2 链接。

原工作区保持 `main` 与原 HEAD，无未提交修改；133 个原受控文件和四份 handoff 哈希一致。原页面按源码、DOM、元素坐标、素材地址和样式核验并保持一致；原始位图有局部栅格化差异，不宣称逐像素一致。

最终截图：`.design-review.local/v2-completed/`；检查、原工作区校验和历史截图：`.design-review.local/verification/`。MORI 本轮独立评审 7.6，随后完成指定的主次和重复录屏尺度修正；Patsy’s/BookThing 前轮为 7.9，本轮局部样式未重新评分。不声称达到 9 分目标。

复现截图使用 `scripts/design-review.mjs`，设置 `REVIEW_VARIANT=v2`、`REVIEW_PAGES=mori,patsy,bookthing`、`REVIEW_URL=http://127.0.0.1:5188`，以及环境提供的 `PLAYWRIGHT_MODULE`、`SHARP_MODULE`。没有新增项目依赖。
