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

精简前历史截图保留在 `.design-review.local/v2-completed/`。本轮最终截图：`.design-review.local/concise-final/`；九组交互、内容与样式隔离检查及平板捐赠补查：`.design-review.local/concise-verification/`。原工作区 133 个文件的哈希再次核对，无变化。

复现截图使用 `scripts/design-review.mjs`，设置 `REVIEW_VARIANT=v2`、`REVIEW_PAGES=mori,patsy,bookthing`、`REVIEW_URL=http://127.0.0.1:5188`，以及环境提供的 `PLAYWRIGHT_MODULE`、`SHARP_MODULE`。没有新增项目依赖。

## 本轮 250–300 词编辑

| 页面 | 1440 px | 820 px | 390 px |
| --- | ---: | ---: | ---: |
| MORI | 273 | 273 | 273 |
| Patsy’s | 286 | 286 | 286 |
| BookThing | 263 | 278 | 278 |

按实际默认可见英文文字计数，包含标题、正文、metadata、图注、页内导航和放大提示；不计全站导航/页脚、alt、图片内的产品 UI 文字及关闭的补充材料。连字符和英文缩写计一个词，数字按词计，箭头与纯标点不计。BookThing 的差异来自响应式局部图说明。

精简通过合并重复解释、删除重复标签和降级补充材料完成，未缩小字体或图片。Patsy’s 的个人贡献位于开头文字区，预约确认只保留一个短例子；下单三屏分别证明 review、checkout/pickup 和 confirmation，没有追加成品 gallery。MORI 的返回约束、3/5 记录预期、AI 用途与交付边界，以及 BookThing 的具体 IA 分支、捐赠披露风险和验证问题均保持默认可见。

本轮三页新鲜上下文独立视觉评审分别为 7.5、7.5、7.7；少量排版修正后的整组复核为 7.7/10（调用配置：gpt-6-astra / high）。随后仅补查并修正 BookThing 820px 捐赠局部呈现。未达到 9 分视觉目标：MORI 录屏仍占较多高度，Patsy’s 平板流程纵向较长，素材本身的界面排版仍是限制。本轮未扩大为整套视觉重做，也未采用缩小图片和窄三栏来压缩页面。评审记录保存在 `.design-review.local/review-history.json`，原始反馈在聊天记录中。
