# 看养家 CMS 系统 - 配置报告

## ✅ 完成情况

### 1. 项目结构检查
- 项目类型: Astro 静态站点
- 内容管理: Astro Content Collections
- 现有内容: 5个栏目 (daily, ai, stock, amc, coffee)

### 2. 标准化文章模板 ✅

| 栏目 | 文件路径 | 关键字段 |
|------|----------|----------|
| **📅 每日复盘** | `src/content/daily/` | date, day, mood, completed, reflection, tomorrow_plan |
| **🤖 AI+成长** | `src/content/ai/` | category, tool_name, tool_category, use_case, rating, steps_summary |
| **📈 股票** | `src/content/stock/` | stock_code, analysis_type, viewpoint, data_support, risk_warning, target_price, stop_loss |
| **🏦 AMC** | `src/content/amc/` | note_type, importance, key_points, impact_analysis, related_stocks |
| **☕ 咖啡** | `src/content/coffee/` | coffee{}, brewing{}, flavor{}, rating |

### 3. Decap CMS 集成 ✅

**配置文件**:
- `public/admin/config.yml` - CMS 配置 (11.6KB)
- `public/admin/index.html` - CMS 入口页面

**访问路径**:
- 本地: `http://localhost:4321/admin`
- 生产: `https://kanyangjia.com/admin`

### 4. 示例文章文件 ✅

| 示例文件 | 路径 |
|----------|------|
| 每日复盘模板 | `src/content/daily/2026-02-06-template.md` |
| AI+成长模板 | `src/content/ai/template-example.md` |
| 股票分析模板 | `src/content/stock/template-example.md` |
| AMC笔记模板 | `src/content/amc/template-example.md` |
| 咖啡品鉴模板 | `src/content/coffee/template-example.md` |

---

## 📂 关键配置文件

### Astro 内容配置
**路径**: `src/content/config.ts`

包含5个内容集合的完整 schema 定义，支持丰富的字段类型:
- 基础字段: title, date, category, tags
- 结构化字段: mood, rating, analysis_type
- 嵌套对象: coffee{}, brewing{}, flavor{}
- 数组字段: completed[], key_points[], steps_summary[]

### Decap CMS 配置
**路径**: `public/admin/config.yml`

配置包含:
- Backend: git-gateway (支持 GitHub/GitLab)
- 5个内容集合的完整表单配置
- 字段类型: string, datetime, select, list, object, markdown
- 预览样式自定义

---

## 🚀 使用方式

### 本地开发

```bash
# 1. 启动开发服务器
npm run dev

# 2. 访问 CMS 后台
open http://localhost:4321/admin
```

### 生产部署

部署到 GitHub Pages / Netlify / Vercel 后:

```
https://your-domain.com/admin
```

**注意**: 生产环境需要配置身份验证 (Netlify Identity / Git Gateway)

---

## 📋 字段速查表

### 每日复盘 (daily)
```yaml
---
title: "标题"
date: "2026-02-06"
day: "Day 1 / 12,800"
tags: ["复盘"]
mood: "🔥"  # 🔥🍃🤔🌪️🌧️
completed: ["事项1", "事项2"]
reflection: "反思内容"
tomorrow_plan: ["计划1", "计划2"]
---
```

### AI+成长 (ai)
```yaml
---
title: "标题"
date: "2026-02-06"
category: "ai-tools"  # ai-tools/ai-workflow/ai-thoughts/self-reflection
tags: ["AI"]
tool_name: "工具名"
tool_category: "编程"  # 编程/写作/设计/数据分析/自动化/其他
use_case: "使用场景"
rating: 5  # 1-5
steps_summary: ["步骤1", "步骤2"]
---
```

### 股票 (stock)
```yaml
---
title: "标题"
date: "2026-02-06"
category: "analysis"
tags: ["股票"]
stock_code: "601872"
analysis_type: "综合"  # 基本面/技术面/消息面/资金面/综合
viewpoint: "中性"  # 看多/看空/中性/观望
data_support: "数据支撑"
risk_warning: "风险提示"
target_price: "¥15.00"
stop_loss: "¥12.00"
---
```

### AMC (amc)
```yaml
---
title: "标题"
date: "2026-02-06"
category: "amc-notes"
tags: ["AMC"]
note_type: "政策解读"
importance: "🔴 高"  # 🔴 高/🟡 中/🟢 低
key_points: ["要点1", "要点2"]
impact_analysis: "影响分析"
related_stocks: ["600XXX"]
---
```

### 咖啡 (coffee)
```yaml
---
title: "标题"
date: "2026-02-06"
category: "beans"
tags: ["咖啡"]
rating: 5
coffee:
  name: "豆子名"
  roaster: "烘焙商"
  origin: "产地"
  process: "水洗"
  roast: "浅烘"
  variety: "豆种"
brewing:
  method: "手冲"
  temp: "92°C"
  ratio: "1:15"
  grind: "中细研磨"
  time: "2分30秒"
  equipment: "V60"
flavor:
  aroma: ["茉莉", "柑橘"]
  acidity: "高"
  body: "轻盈"
  sweetness: "高"
  aftertaste: "余韵"
  notes: ["柑橘", "蜂蜜"]
---
```

---

## 🔧 后续配置建议

### 1. 身份验证 (生产环境必需)

如果使用 Netlify:
- 启用 Netlify Identity
- 配置 Git Gateway
- 在 `config.yml` 中更新 backend 配置

如果使用 GitHub Pages:
- 使用 Netlify CMS + Git Gateway 独立服务
- 或使用其他 headless CMS (如 Strapi, Sanity)

### 2. 媒体存储

在 `config.yml` 中配置:
```yaml
media_folder: "public/uploads"
public_folder: "/uploads"
```

确保 `public/uploads` 目录存在并可写。

### 3. 工作流

可以添加编辑工作流:
```yaml
publish_mode: editorial_workflow
```

启用草稿/审核/发布的完整流程。

---

## 📁 文件清单

```
kanyangjia/
├── src/
│   └── content/
│       ├── config.ts              # 内容配置 ✓
│       ├── daily/
│       │   ├── 2026-02-06.md
│       │   ├── 2026-02-06-template.md  # 示例 ✓
│       │   └── 2026-02-05-template.md
│       ├── ai/
│       │   ├── cursor-workflow.md
│       │   ├── cursor-claude-workflow.md
│       │   └── template-example.md     # 示例 ✓
│       ├── stock/
│       │   ├── 601872-analysis.md
│       │   └── template-example.md     # 示例 ✓
│       ├── amc/
│       │   └── template-example.md     # 示例 ✓
│       └── coffee/
│           ├── 2026-02-05-sanlifang.md
│           ├── ethiopia-yirgacheffe-g1.md
│           └── template-example.md     # 示例 ✓
├── public/
│   └── admin/
│       ├── index.html             # CMS入口 ✓
│       └── config.yml             # CMS配置 ✓
├── CMS-GUIDE.md                   # 使用指南 ✓
└── README.md
```

---

**配置完成时间**: 2026-02-06  
**系统版本**: v1.0  
**状态**: ✅ 已完成，构建通过
