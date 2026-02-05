import { defineCollection, z } from 'astro:content';

// 每日复盘集合
const dailyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    day: z.string().optional(),
    tags: z.array(z.string()).optional(),
    mood: z.enum(['🔥', '🍃', '🤔', '🌪️', '🌧️']).optional(),
  }),
});

// AI+个人成长集合
const aiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['ai-tools', 'ai-workflow', 'ai-thoughts', 'self-reflection']),
    tags: z.array(z.string()).optional(),
  }),
});

// 股票集合
const stockCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['industry', 'analysis', 'daily-review', 'ai-trading']),
    tags: z.array(z.string()).optional(),
    stockCode: z.string().optional(),
  }),
});

// AMC集合
const amcCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['amc-notes', 'amc-policy', 'amc-ai']),
    tags: z.array(z.string()).optional(),
  }),
});

// 咖啡集合
const coffeeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['daily', 'beans', 'shop', 'gear']),
    tags: z.array(z.string()).optional(),
    rating: z.string().optional(),
    coffee: z.object({
      name: z.string().optional(),
      roaster: z.string().optional(),
      origin: z.string().optional(),
      process: z.string().optional(),
      roast: z.string().optional(),
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
