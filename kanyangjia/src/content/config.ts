import { defineCollection, z } from 'astro:content';

// ============================================
// 看养家 CMS - 内容集合配置
// ============================================

// 每日复盘集合
const dailyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // 基础信息
    title: z.string(),
    date: z.string(),
    day: z.string().optional(),
    tags: z.array(z.string()).optional(),
    
    // 情绪/心情
    mood: z.enum(['🔥', '🍃', '🤔', '🌪️', '🌧️']).optional(),
    
    // 今日完成
    completed: z.array(z.string()).optional(),
    
    // 反思
    reflection: z.string().optional(),
    
    // 明日计划
    tomorrow_plan: z.array(z.string()).optional(),
    
    // 能量滋养
    nourish: z.object({
      coffee: z.string().optional(),
      reading: z.string().optional(),
      exercise: z.string().optional(),
    }).optional(),
  }),
});

// AI+个人成长集合
const aiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // 基础信息
    title: z.string(),
    date: z.string(),
    category: z.enum(['ai-tools', 'ai-workflow', 'ai-thoughts', 'self-reflection']),
    tags: z.array(z.string()).optional(),
    
    // 工具名称
    tool_name: z.string().optional(),
    
    // 分类细分
    tool_category: z.enum(['编程', '写作', '设计', '数据分析', '自动化', '其他']).optional(),
    
    // 使用场景
    use_case: z.string().optional(),
    
    // 效果评价 (1-5星)
    rating: z.number().min(1).max(5).optional(),
    
    // 操作步骤摘要
    steps_summary: z.array(z.string()).optional(),
  }),
});

// 股票集合
const stockCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // 基础信息
    title: z.string(),
    date: z.string(),
    category: z.enum(['industry', 'analysis', 'daily-review', 'ai-trading']),
    tags: z.array(z.string()).optional(),
    
    // 股票代码
    stock_code: z.string().optional(),
    
    // 分析类型
    analysis_type: z.enum(['基本面', '技术面', '消息面', '资金面', '综合']).optional(),
    
    // 观点
    viewpoint: z.enum(['看多', '看空', '中性', '观望']).optional(),
    
    // 数据支撑
    data_support: z.string().optional(),
    
    // 风险提示
    risk_warning: z.string().optional(),
    
    // 目标价
    target_price: z.string().optional(),
    
    // 止损价
    stop_loss: z.string().optional(),
  }),
});

// AMC集合
const amcCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // 基础信息
    title: z.string(),
    date: z.string(),
    category: z.enum(['amc-notes', 'amc-policy', 'amc-ai']),
    tags: z.array(z.string()).optional(),
    
    // 政策/笔记类型
    note_type: z.enum(['政策解读', '行业动态', '公司公告', '个人笔记', '研报摘要']).optional(),
    
    // 要点
    key_points: z.array(z.string()).optional(),
    
    // 影响分析
    impact_analysis: z.string().optional(),
    
    // 关联标的
    related_stocks: z.array(z.string()).optional(),
    
    // 重要程度
    importance: z.enum(['🔴 高', '🟡 中', '🟢 低']).optional(),
  }),
});

// 咖啡集合
const coffeeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // 基础信息
    title: z.string(),
    date: z.string(),
    category: z.enum(['daily', 'beans', 'shop', 'gear']),
    tags: z.array(z.string()).optional(),
    rating: z.number().min(1).max(5).optional(),
    
    // 豆子信息
    coffee: z.object({
      name: z.string().optional(),           // 豆子名称
      roaster: z.string().optional(),        // 烘焙商
      origin: z.string().optional(),         // 产地
      process: z.string().optional(),        // 处理法
      roast: z.string().optional(),          // 烘焙度
      variety: z.string().optional(),        // 豆种
    }).optional(),
    
    // 冲煮参数
    brewing: z.object({
      method: z.string().optional(),         // 冲煮方式
      temp: z.string().optional(),           // 水温
      ratio: z.string().optional(),          // 粉水比
      grind: z.string().optional(),          // 研磨度
      time: z.string().optional(),           // 冲煮时间
      equipment: z.string().optional(),      // 器具
    }).optional(),
    
    // 风味描述
    flavor: z.object({
      aroma: z.array(z.string()).optional(),     // 香气
      acidity: z.string().optional(),            // 酸度
      body: z.string().optional(),               // 醇厚度
      sweetness: z.string().optional(),          // 甜感
      aftertaste: z.string().optional(),         // 余韵
      notes: z.array(z.string()).optional(),     // 风味标签
    }).optional(),
  }),
});

export const collections = {
  daily: dailyCollection,
  ai: aiCollection,
  stock: stockCollection,
  amc: amcCollection,
  coffee: coffeeCollection,
};
