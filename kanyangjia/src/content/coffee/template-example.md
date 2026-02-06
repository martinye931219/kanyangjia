---
title: "咖啡品鉴示例模板"
date: "2026-02-06"
category: "beans"
tags: ["咖啡", "模板", "示例"]
rating: 5
coffee:
  name: "示例咖啡豆"
  roaster: "示例烘焙商"
  origin: "埃塞俄比亚 耶加雪菲"
  process: "水洗"
  roast: "浅烘"
  variety: "Heirloom"
brewing:
  method: "手冲"
  temp: "92°C"
  ratio: "1:15"
  grind: "中细研磨"
  time: "2分30秒"
  equipment: "V60 02"
flavor:
  aroma: ["茉莉花", "柑橘", "蜂蜜"]
  acidity: "高"
  body: "轻盈"
  sweetness: "高"
  aftertaste: "悠长的花香余韵"
  notes: ["柑橘", "茉莉花", "蜂蜜", "茶感"]
---

## 🫘 豆子信息

| 属性 | 内容 |
|------|------|
| 名称 | {{ coffee.name }} |
| 烘焙商 | {{ coffee.roaster }} |
| 产地 | {{ coffee.origin }} |
| 处理法 | {{ coffee.process }} |
| 烘焙度 | {{ coffee.roast }} |
| 豆种 | {{ coffee.variety }} |

## ☕ 冲煮参数

| 参数 | 数值 |
|------|------|
| 冲煮方式 | {{ brewing.method }} |
| 水温 | {{ brewing.temp }} |
| 粉水比 | {{ brewing.ratio }} |
| 研磨度 | {{ brewing.grind }} |
| 冲煮时间 | {{ brewing.time }} |
| 器具 | {{ brewing.equipment }} |

## 🌸 风味描述

### 香气
{{#each flavor.aroma}}
- {{this}}
{{/each}}

### 风味轮
- **酸度**: {{ flavor.acidity }}
- **醇厚度**: {{ flavor.body }}
- **甜感**: {{ flavor.sweetness }}
- **余韵**: {{ flavor.aftertaste }}

### 风味标签
{{#each flavor.notes}}
`{{this}}`
{{/each}}

## 💭 品鉴笔记

### 干香
研磨后的干香呈现...

### 湿香
注水后湿香表现为...

### 口感
入口感觉...

### 整体评价
这是一支...

---

## 📋 模板字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | string | 文章标题 |
| `date` | string | 日期 (YYYY-MM-DD) |
| `category` | enum | daily/beans/shop/gear |
| `tags` | array | 标签数组 |
| `rating` | number | 评分 (1-5星) |
| `coffee.name` | string | 豆子名称 |
| `coffee.roaster` | string | 烘焙商 |
| `coffee.origin` | string | 产地 |
| `coffee.process` | string | 处理法 |
| `coffee.roast` | string | 烘焙度 |
| `coffee.variety` | string | 豆种 |
| `brewing.method` | string | 冲煮方式 |
| `brewing.temp` | string | 水温 |
| `brewing.ratio` | string | 粉水比 |
| `brewing.grind` | string | 研磨度 |
| `brewing.time` | string | 冲煮时间 |
| `brewing.equipment` | string | 器具 |
| `flavor.aroma` | array | 香气描述 |
| `flavor.acidity` | string | 酸度 |
| `flavor.body` | string | 醇厚度 |
| `flavor.sweetness` | string | 甜感 |
| `flavor.aftertaste` | string | 余韵 |
| `flavor.notes` | array | 风味标签 |

## 🏷️ 分类说明

- **daily**: 日常记录
- **beans**: 咖啡豆品鉴
- **shop**: 探店笔记
- **gear**: 器具评测
