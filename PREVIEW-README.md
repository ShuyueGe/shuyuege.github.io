# Case study V2 preview

工作区：`C:\Users\win\.codex\worktrees\case-study-v2\shuyuege.github.io`
分支：`preview/case-study-v2`
初始隔离基线：`ea2f1f5fbc0533328f5f603e781aaa0987e41565`。本次设计依据恢复的起点为 `227ef450d2749f301f39db8407dd8f613bb42c21`。

用户已授权补完、推送，并进一步要求三个指定的线上预览地址。保留独立 worktree 和此预览分支；因现有 GitHub Pages 环境只允许 `main` 发布，将验证后的 V2 与短地址同步到远程 `main`。首页、正式页面、导航、页脚和现有部署设置保持不变。

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

精简前历史截图保留在 `.design-review.local/v2-completed/`。本轮最终截图：`.design-review.local/concise-final/`；九组交互、内容与样式隔离检查及平板捐赠补查：`.design-review.local/concise-verification/`。原工作区 133 个文件的哈希再次核对，无变化。

复现截图使用 `scripts/design-review.mjs`，设置 `REVIEW_VARIANT=v2`、`REVIEW_PAGES=mori,patsy,bookthing`、`REVIEW_URL=http://127.0.0.1:5188`，以及环境提供的 `PLAYWRIGHT_MODULE`、`SHARP_MODULE`。没有新增项目依赖。

## 历史 250–300 词编辑（已被本次恢复预算取代）

| 页面 | 1440 px | 820 px | 390 px |
| --- | ---: | ---: | ---: |
| MORI | 273 | 273 | 273 |
| Patsy’s | 286 | 286 | 286 |
| BookThing | 263 | 278 | 278 |

按实际默认可见英文文字计数，包含标题、正文、metadata、图注、页内导航和放大提示；不计全站导航/页脚、alt、图片内的产品 UI 文字及关闭的补充材料。连字符和英文缩写计一个词，数字按词计，箭头与纯标点不计。BookThing 的差异来自响应式局部图说明。

精简通过合并重复解释、删除重复标签和降级补充材料完成，未缩小字体或图片。Patsy’s 的个人贡献位于开头文字区，预约确认只保留一个短例子；下单三屏分别证明 review、checkout/pickup 和 confirmation，没有追加成品 gallery。MORI 的返回约束、3/5 记录预期、AI 用途与交付边界，以及 BookThing 的具体 IA 分支、捐赠披露风险和验证问题均保持默认可见。

本轮三页新鲜上下文独立视觉评审分别为 7.5、7.5、7.7；少量排版修正后的整组复核为 7.7/10（调用配置：gpt-6-astra / high）。随后仅补查并修正 BookThing 820px 捐赠局部呈现。未达到 9 分视觉目标：MORI 录屏仍占较多高度，Patsy’s 平板流程纵向较长，素材本身的界面排版仍是限制。本轮未扩大为整套视觉重做，也未采用缩小图片和窄三栏来压缩页面。评审记录保存在 `.design-review.local/review-history.json`，原始反馈在聊天记录中。

## 线上短地址

| 项目 | 地址 | 页面路由 |
| --- | --- | --- |
| BookThing | https://shuyuege.github.io/casestudy1v2 | `/#/projects/bookthing-v2` |
| MORI | https://shuyuege.github.io/casestudy2v2 | `/#/projects/mori-v2` |
| Patsy’s | https://shuyuege.github.io/casestudy3v2 | `/#/projects/patsy-v2` |

入口源码分别为 `public/casestudy1v2/index.html`、`public/casestudy2v2/index.html`、`public/casestudy3v2/index.html`。静态入口用 `location.replace` 跳转到已有 HashRouter 页面，包含 noindex、无 JavaScript 时的 meta refresh 与备用链接；地址栏最终显示对应 hash 路由。没有新增首页、导航或项目卡片链接。

生产构建本地检查记录：`.design-review.local/aliases-local/`；线上直接访问与刷新记录：`.design-review.local/aliases-online/`。既有 5188 开发预览持续保留。

## 五轮盲审视觉修改（2026-10-13）

本次按用户新授权，各页完成五次修改；基线及每次修改后均使用全新独立上下文，只提供截图与仓库固定 rubric（包含 Content Lock），调用配置为 gpt-6-astra / high。以下评分完整保留，未选取最高分冒充最终结果。

| 页面 | 基线 | 第1轮 | 第2轮 | 第3轮 | 第4轮 | 第5轮（最终） |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| MORI | 7.1 | 7.5 | 7.7 | 7.7 | 8.1 | 8.1 |
| Patsy’s | 7.0 | 7.4 | 7.8 | 7.3 | 7.7 | 8.0 |
| BookThing | 7.1 | 7.8 | 7.1 | 8.1 | 7.8 | 8.0 |

三页均未达到8.5；按五次修改上限停止，未启动第六轮。剩余问题包括 MORI 桌面返回区的空间分配与柔和原图的边界、Patsy’s 手机对照和下单序列的纵向长度、BookThing 桌面局部图的分组及平板有界图片的对齐。原素材的排版与对比度保持真实，未重绘证据。

此次只改 V2 构图、图片局部、图注间距与响应式组织。文案源文件和九组默认可见文字均与本轮冻结版本一致，词数仍为273 /286 /263–278。局部图采用原图像素窗口；完整原图仍可放大，source文件不变。BookThing 第二轮曾出现日历局部零高度的回归，第三轮修复，截图脚本现检查真实可见面积。

最终构建与九组浏览器检查通过：直接访问/刷新、锚点与历史、放大与焦点恢复、折叠、图片和来源链接、视频控制/单视频播放/离屏暂停/reduced motion、横向溢出和预览metadata清理。首页与原三页在加载全部预览样式后的DOM及计算样式一致；位图受现有动态内容和栅格化影响，不宣称逐像素一致。原工作区133个文件的SHA-256、HEAD和干净状态不变；5188预览仍仅监听127.0.0.1。

截图保存在 `.design-review.local/blind-v2-baseline/` 与 `blind-v2-r1/` 至 `blind-v2-r5/`；最终验证在 `blind-v2-verification/`；独立评分及剩余问题追加在 `review-history.json`，原始反馈保留在聊天记录。线上地址继续使用上方三个短地址，并跳转至原有hash路由。部署后实测记录在 `blind-v2-online/`，包含最新构建指纹和九组直接访问/刷新结果。
## 最新编辑：选择性恢复设计依据与迭代

用户本次要求取代旧精简目标和字数预算；已有三个V2、网址对应关系、noindex和原站保护继续有效。编辑入口仍是上方三组V2内容／组件／样式；不修改V1或final handoff。沿用现有字体、配色、模块顺序和发布机制，局部调整只为容纳恢复的解释；未重启视觉盲审循环。

| 项目 | 修改前全部说明 | 修改后全部说明 | 常规上限 | 最终上限 |
| --- | ---: | ---: | ---: | ---: |
| MORI | 273 | 656 | 1000 | 1200 |
| Patsy’s | 284 | 774 | 900 | 1100 |
| BookThing | 349 | 639 | 850 | 1000 |

用同一一次性DOM计数方法对已发布的起点和本次实际页面重新统计。包含项目标题、metadata、正文、步骤数字、图注、提示、关闭的折叠说明及响应式独有文字；互斥响应式副本中的相同文字只计一次。全站导航／页脚、图片内原有界面文字、alt和代码不计；连字符复合词、数字比率和小数各计一词，独立标点不计。这与历史“默认展开”的口径不同，尤其BookThing的补充说明现在纳入总数。没有项目超过常规上限，亦未用图片、alt或折叠规避正文预算。计数脚本与前后文本保存在忽略的 `.design-review.local/reasoning-measure.mjs` 及 `reasoning-restore-before/`、`reasoning-restore-after/`。

恢复依据与放回位置：

- MORI：`moriCopy.ts`与`mori-final.md`中cloud/swipe的原始吸引力、Android潜在冲突、复用tap的理由放回导航；标题点击无响应→下方独立记录控件→既有表单的断点及空间取舍放回健康对照；背景／布局备选的不足与共同结构的选择放回AI模式。保留真实录屏与输入局部，明确上线与未测得效果的区别。
- BookThing：现有三张IA图、V1文案及Git `512e9f2`记录的规划依据用于解释Calendar/Newsroom与Donate分支；assumption-based proto-personas不写成用户研究。捐赠模块恢复原规则→Money Donations局部、方法选择优先及内容空间／disclosure风险；Calendar恢复相对News/homepage announcement的选择及日期与不同hours的关系。
- Patsy’s：原DOCX Figures6–7、AppendixA Q9/Q11及§§7.2、8.2–8.4核实意愿、菜单优先级、缺失pickup任务与失效热点的区别，逐项解释新增入口、review、checkout、pickup和confirmation；预约保留X删除与edit/commit关系。移除独立个人贡献模块，简短Role/Team继续保留。

继续不恢复重复成品gallery、整套视觉系统、长背景、通用UX方法及空泛reflection。Patsy’s个人Menu标题删除／confirmation层级细改没有对应可信导出，也不补回为已展示的界面成果；完整IA和额外原图仍作为补充材料。

资料边界／待办：MORI缺独立剪辑的两种返回演示、AI开场引导图和记录表单图；3/5原记录只明确“数据标题”，没有逐参与者具体标题明细。BookThing未发现独立研究报告，依据保守写为内容审查与规划任务。Patsy’s报告概述与详细章节对时间反馈的状态冲突，采用§8.2及final handoff的未完成表述；初版X没有新增截图。没有这些素材也能解释主线，未伪造测试或新增界面。

`npm run build`通过；三页在1440、820、390px实际截图、图片可见面积和交互回归通过：直接打开／刷新、锚点／历史、放大／焦点、折叠、原图链接、视频控制／单视频播放／离屏暂停／reduced motion。当前回归确认首页与原三页在加载全部V2样式后的DOM／计算样式一致，预览metadata清除，正式站点没有V2入口。150个受保护文件、四份handoff和原工作区133个受控文件哈希保持不变；不宣称动态位图逐像素一致。

实际构建产物由源代码生成，不手工编辑dist。发布前检查staged diff和待推送提交，沿用main触发GitHub Pages，保留独立预览分支和原本地checkout。发布后的三个既有地址将检查最新构建指纹、对应项目、直接打开／刷新、noindex、图片和视频；再从V2跳到正式页检查metadata及入口。验证截图与结果保存在 `.design-review.local/reasoning-restored-final/`、`reasoning-verification/`、`reasoning-online/`。