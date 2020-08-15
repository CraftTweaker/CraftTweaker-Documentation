# Mine Bay

您可以交易迷你生物上的物品。

## 默认交易

- 1倍绿宝石的硬粘土
- 8倍绿宝石头的头骨
- 4倍绿宝石鞍
- 为 8x 绿宝石生成 蛋 (meta 100, 不做)
- 8x钻石钻石的钻石马甲
- 一根铁墨水的瓶子
- 1倍铁矿石4倍烟花。
- 8倍绿宝石丝网关附魔书
- 1x 绿宝石2倍夜视药水 (3:00)
- 配方书给予1倍绿宝石。

## 移除配方

## 删除匹配的交易。

```zenscript
mods.cfm.MineBay.remove(@Optional IIngredient items);

// 移除导致夜视药水(含任何数量)
mods。 fm.MineBay.remove(<minecraft:potion>.withTag({Potion: "night_vision"}));
// 删除所有交易
mods.cfm.MineBay.remove();
```

目前只支持通过贸易结果移除。

## 添加

## 添加交易。

```zenscript
mods.cfm.MineBay.addTrade(@Nonnull IItemStack 项目，@Nonnull IItemStack 货币)，

// 为42个给出13个钻石的大棒添加一个交易
mods.cfm.MineBay.addTrade(<minecraft:stick>.with(42)，<minecraft:diamond>ithamount(13) );
// 添加16个苹果的交易给了三个绿宝石
mods.cfm.MineBay.addTrade(<minecraft:apple>.withamount(16),<minecraft:emerald>. ithamount(3))；
// 为 1 个胡萝卜给出1个绿宝石
mods.cfm.MineBay.addTrade(<minecraft:carrot>,<minecraft:emerald>);
```