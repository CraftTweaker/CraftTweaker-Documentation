# 商家

## 命令

以下命令被添加来检索现有商人职业 & 购物者的信息：

- `/ct 商人职业` - 输出有效商人职业的日志
- `/ct 商人职业 [profession]` - 为所有或指定的职业提供一个有效的职业日志

## 所属包

`商家`

## 添加配方

交易可以添加到特定的商人专业 & carrer。

```zenscript
// 添加交易 (行业，字符串职业，IItemstack input1，@Optional IItemstack input2，IItemstack output，int level)；
mods.rockytweugs.Merchant.addTrade("minecraft:nitit"，"nitwit"， <minecraft:emerald>， <minecraft:diamond>， <minecraft:cobblestone>，, 1)；
```

## 移除

目前不可能取消商人的贸易。
