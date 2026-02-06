#!/bin/bash
# ============================================================
# 看养家 - 一键发布脚本
# 用法: ./publish.sh ["提交信息"]
# ============================================================

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 项目路径
PROJECT_DIR="/Users/martinye/.openclaw/workspace/kanyangjia"
DIST_DIR="$PROJECT_DIR/dist"

# 提交信息
MESSAGE=${1:-"update: $(date +%Y-%m-%d) 内容更新"}

echo -e "${YELLOW}🚀 开始发布流程...${NC}"
echo "================================"

# 1. 进入项目目录
cd "$PROJECT_DIR" || exit 1

# 2. 构建项目
echo -e "\n${YELLOW}📦 步骤 1/4: 构建项目...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 构建失败${NC}"
    exit 1
fi
echo -e "${GREEN}✅ 构建成功${NC}"

# 3. 进入 dist 目录并添加文件
echo -e "\n${YELLOW}📋 步骤 2/4: 准备提交...${NC}"
cd "$DIST_DIR" || exit 1
git add -A

# 4. 提交更改
echo -e "\n${YELLOW}💾 步骤 3/4: 提交更改...${NC}"
git commit -m "$MESSAGE"
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️ 没有需要提交的更改，或提交失败${NC}"
    echo "尝试强制推送现有内容..."
fi

# 5. 推送到 GitHub
echo -e "\n${YELLOW}🚀 步骤 4/4: 推送到 GitHub...${NC}"
git push origin HEAD:gh-pages
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 推送失败${NC}"
    exit 1
fi

echo -e "\n${GREEN}✅ 发布成功！${NC}"
echo "================================"
echo -e "🌐 网站地址: https://martinye931219.github.io/kanyangjia/"
echo -e "⏱️  等待 1-2 分钟后刷新查看更新"
echo ""
echo "提示: 可以绑定自定义域名，访问更顺畅"
