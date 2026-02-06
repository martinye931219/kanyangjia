# Obsidian → 网站 自动同步方案

## 方案概览

**目标**: 在 Obsidian 里写文章 → 自动同步到网站显示

**实现方式**: Git 同步 + 自动构建部署

---

## 方案 A: 手动同步（推荐先用这个）

### 步骤 1: 配置 Obsidian Git 插件

1. 在 Obsidian 打开 **设置 → 第三方插件 → 浏览**
2. 搜索并安装 **Git** 插件
3. 启用插件

### 步骤 2: 配置 Git 插件

设置 → Git:
- **自动备份间隔**: 0 (关闭自动，手动控制)
- **提交信息模板**: `vault backup: {{date}}`

### 步骤 3: 文章存放位置

在 Obsidian 里，把文章放在这个路径：

```
kanyangjia/
├── src/
│   └── content/           ← 文章内容放这里
│       ├── daily/         ← 每日复盘
│       ├── ai/            ← AI+成长
│       ├── stock/         ← 股票
│       ├── amc/           ← AMC
│       └── coffee/        ← 咖啡
```

### 步骤 4: 发布流程

**写完后，一键发布：**

```bash
# 在项目根目录运行
./publish.sh "更新内容说明"
```

或者分步：
```bash
cd /Users/martinye/.openclaw/workspace/kanyangjia
npm run build
cd dist
git add .
git commit -m "更新说明"
git push origin HEAD:gh-pages --force
```

---

## 方案 B: 全自动同步（进阶）

使用 GitHub Actions，提交到 main 分支后自动构建部署。

### 需要配置的文件

1. **创建 `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. **修改发布方式**

- 把文章直接推送到 GitHub 主仓库的 main 分支
- GitHub Actions 自动构建并部署到 gh-pages

---

## 文章模板（Obsidian 快速插入）

### 每日复盘

```markdown
---
title: "{{date:YYYY}}年{{date:M}}月{{date:D}}日"
date: "{{date:YYYY-MM-DD}}"
day: "{{date:ddd}}"
mood: "🔥"
tags: ["日常", "复盘"]
completed:
  - 
reflection: ""
tomorrow_plan:
  - 
nourish:
  coffee: ""
  reading: ""
  exercise: ""
---

## 📝 今日记录

## 💭 随手记
```

### AI+成长

```markdown
---
title: "工具名称"
date: "{{date:YYYY-MM-DD}}"
category: ai
type: tool
tags: ["AI", "效率"]
rating: ⭐⭐⭐⭐⭐
---

## 🎯 是什么

## 💡 使用场景

## 🛠️ 操作步骤

## ✨ 效果展示

## 💭 个人评价
```

---

## 快速发布命令

已经创建好了，在项目根目录：

```bash
./publish.sh "提交说明"
```

这个脚本会自动：
1. 构建网站
2. 提交更改
3. 推送到 GitHub Pages

---

## 当前网站地址

- 首页: https://martinye931219.github.io/kanyangjia/
- 每日复盘: https://martinye931219.github.io/kanyangjia/daily.html
- 文章页: https://martinye931219.github.io/kanyangjia/daily/2026-02-06.html

等 1-2 分钟刷新即可看到更新。
