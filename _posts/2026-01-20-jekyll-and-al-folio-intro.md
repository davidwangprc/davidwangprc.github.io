---
layout: post
title:  使用 Jekyll 和 al-folio 模板快速搭建网站
date:   2026-01-20 04:00:00 +0800
tags: Jekyll 
inline: false
related_posts: true
---
>基于 **Jekyll** 的静态站点从零构建
>模板: **[al-folio](https://github.com/alshedivat/al-folio)**

---

## 搭建步骤概览

1. **Fork al-folio 模板**  
   访问 https://github.com/alshedivat/al-folio，点右上角 “Use this template” 创建自己的仓库（推荐命名为 `username.github.io`）。

2. **本地开发环境**
   - 安装 Ruby + Bundler
   - 克隆仓库：`git clone https://github.com/username/username.github.io.git`
   - 进入目录：`bundle install`
   - 本地预览：`bundle exec jekyll serve`

3. **主要定制内容**
   - 修改 `_config.yml`：姓名、标题、社交链接、Google Analytics 等。
   - 替换 `assets/img/prof_pic.jpg` 为自己的头像。
   - 把论文放进 `_bibliography/papers.bib`，自动生成 Publications 页面。
   - 在 `_pages/` 添加自定义页面（如 Teaching、Docs 等）。
   - 用 `_news/` 或自定义 collection 发布动态。

4. **常见问题**
   - Windows 本地 ImageMagick 报 “Invalid Parameter - /04-code” → Linux 的 GitHub Actions 环境完全正常，无需担心。
   - Sass @import 警告 → 在 `_config.yml` 加 `sass: quiet: true` 即可隐藏。
   - 图片优化想关闭 → `picture: enabled: false`

5. **部署**
   - 仓库自带 `.github/workflows/deploy.yml`，每次 push 到 main 自动构建并部署到 gh-pages 分支。
   - 在仓库 Settings → Pages 中确认 Source 为 gh-pages 分支即可。
   - 提交并push
      <pre>
      git add _posts/2026-01-20-jekyll-and-al-folio-intro.md
      git commit -m "add post: Jekyll 和 al-folio 模板介绍"
      git push origin main
      </pre>
   - 验证部署是否成功:
   仓库页面 → Actions 标签，查看最新的 “Deploy site” workflow 是否运行成功（绿色勾）。
   运行完成后，通常 3-5 分钟内访问 https://davidwangprc.github.io/blog/（或直接在首页 Latest Posts）就能看到这篇新文章。
