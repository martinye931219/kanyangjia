#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
获取15只股票最近10天的最高价数据，并计算利润回撤20%和50%的价格
"""
import requests
import json
from datetime import datetime

# 股票列表
stocks = [
    {"name": "电网设备ETF", "code": "159326", "exchange": "深圳"},
    {"name": "化工ETF", "code": "159870", "exchange": "深圳"},
    {"name": "北京君正", "code": "300223", "exchange": "深圳"},
    {"name": "中来股份", "code": "300393", "exchange": "深圳"},
    {"name": "太辰光", "code": "300570", "exchange": "深圳"},
    {"name": "中概互联网ETF", "code": "513050", "exchange": "上海"},
    {"name": "南方航空", "code": "600029", "exchange": "上海"},
    {"name": "特变电工", "code": "600089", "exchange": "上海"},
    {"name": "中国东航", "code": "600115", "exchange": "上海"},
    {"name": "中国国航", "code": "601111", "exchange": "上海"},
    {"name": "中国铝业", "code": "601600", "exchange": "上海"},
    {"name": "招商轮船", "code": "601872", "exchange": "上海"},
    {"name": "中国中免", "code": "601888", "exchange": "上海"},
    {"name": "兆易创新", "code": "603986", "exchange": "上海"},
    {"name": "德业股份", "code": "605117", "exchange": "上海"},
]

def get_stock_data(stock):
    """获取单只股票的K线数据"""
    # 根据交易所确定secid
    if stock["exchange"] == "上海":
        secid = f"1.{stock['code']}"
    else:
        secid = f"0.{stock['code']}"
    
    url = "https://push2his.eastmoney.com/api/qt/stock/kline/get"
    params = {
        "secid": secid,
        "klt": "101",  # 日K线
        "lmt": "10",   # 最近10天
        "fields1": "f1,f2,f3,f4,f5,f6",
        "fields2": "f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61"
    }
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
    }
    
    try:
        response = requests.get(url, params=params, headers=headers, timeout=30)
        data = response.json()
        
        if data.get("data") and data["data"].get("klines"):
            klines = data["data"]["klines"]
            highs = []
            for kline in klines:
                # 数据格式: 日期,开盘价,收盘价,最高价,最低价,成交量,成交额,振幅,涨跌幅,涨跌额,换手率
                parts = kline.split(",")
                date = parts[0]
                high = float(parts[3])  # 最高价是第4列
                highs.append({"date": date, "high": high})
            return highs
        else:
            return None
    except Exception as e:
        return None

def main():
    print("=" * 100)
    print("股票最高价与回撤价格分析")
    print("=" * 100)
    print(f"数据日期: {datetime.now().strftime('%Y-%m-%d')}")
    print(f"分析周期: 最近10个交易日")
    print("=" * 100)
    print()
    
    results = []
    
    for i, stock in enumerate(stocks, 1):
        klines = get_stock_data(stock)
        
        if klines:
            # 提取所有最高价
            highs = [k["high"] for k in klines]
            max_high = max(highs)  # 10天最高价
            
            # 计算回撤价格
            pullback_20 = max_high * 0.8  # 回撤20%
            pullback_50 = max_high * 0.5  # 回撤50%
            
            # 获取最高价日期
            max_high_date = [k["date"] for k in klines if k["high"] == max_high][0]
            
            results.append({
                "序号": i,
                "股票名称": stock["name"],
                "代码": stock["code"],
                "交易所": stock["exchange"],
                "10天最高价": max_high,
                "最高价日期": max_high_date,
                "回撤20%价格": pullback_20,
                "回撤50%价格": pullback_50
            })
    
    # 输出汇总表格
    print("📊 结果汇总")
    print("-" * 100)
    print(f"{'序号':<4} {'股票名称':<12} {'代码':<8} {'10天最高价':<12} {'回撤20%价格':<12} {'回撤50%价格':<12}")
    print("-" * 100)
    
    for r in results:
        print(f"{r['序号']:<4} {r['股票名称']:<12} {r['代码']:<8} {r['10天最高价']:<12.2f} {r['回撤20%价格']:<12.2f} {r['回撤50%价格']:<12.2f}")
    
    print("-" * 100)
    print()
    print("=" * 100)
    print("📈 详细数据（每只股票10天最高价明细）")
    print("=" * 100)
    
    for i, stock in enumerate(stocks, 1):
        print(f"\n【{i}. {stock['name']} - {stock['code']}】")
        klines = get_stock_data(stock)
        if klines:
            print(f"{'日期':<12} {'最高价':>10}")
            print("-" * 25)
            for k in klines:
                print(f"{k['date']:<12} {k['high']:>10.2f}")
            
            highs = [k["high"] for k in klines]
            max_high = max(highs)
            print("-" * 25)
            print(f"{'10天最高价:':<12} {max_high:>10.2f}")
            print(f"{'回撤20%:':<12} {max_high * 0.8:>10.2f}")
            print(f"{'回撤50%:':<12} {max_high * 0.5:>10.2f}")
    
    # 保存CSV
    with open("stock_pullback_analysis.csv", "w", encoding="utf-8-sig") as f:
        f.write("序号,股票名称,代码,交易所,10天最高价,最高价日期,回撤20%价格,回撤50%价格\n")
        for r in results:
            f.write(f"{r['序号']},{r['股票名称']},{r['代码']},{r['交易所']},{r['10天最高价']:.2f},{r['最高价日期']},{r['回撤20%价格']:.2f},{r['回撤50%价格']:.2f}\n")
    print(f"\n📁 结果已保存到: stock_pullback_analysis.csv")
    
    return results

if __name__ == "__main__":
    main()
