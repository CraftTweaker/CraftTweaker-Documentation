# 炼金术表

## 所属包名

`血红宝石表.`

## 添加配方

```zenscript
输入的最大尺寸是 6
//mods.blemmagic.AlchemyTable.addRecipe(IItemStack 输出, IItemStack[……]输入, int syphon, int ticks, int miner Tier);
mods. loodmagic.AlchemyTable.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 20,10,0);
```

## 药水添加剂

```zenscript
输入的最大值为5，用于计算催化剂 (丢弃任何药水容器对象)
var pot = <potion:minecraft:strength>。 akePotionEffect(6000, 1);
/mods.blemmagic.AlchemyTable ddPotionRecipe(IItemStack[…]投入, IPotionEffect effects, int ticks, int minertier)
mods.bolmagic.AlchemyTable.addPotionRecipe(<bloodmagic:potion_flask>, <minecraft:carrot>,<minecraft:potato>], pot, 20, 10, 0)；
```

## 移除

```zenscript
输入的最大大小为 6
//mods.blemmagic.AlchemyTable.removeRecipe(IItemStack[…]输入);
mods.blemmagic.AlchemyTable.removeRecipe([<minecraft:carrot>,<minecraft:carrot>,<minecraft:carrot>,<minecraft:dye:15>]);
```

## 药水移除

任何移除都被视为潜在的药剂，如果它与API注册表中的配方不匹配的话。

```zenscript
//mods.blemMagic.AlchemyTable.removeRecipe(IItemStack[…]输入)；
mods.blemmagic.AlchemyTable.removeRecipe([<minecraft:ghast_tear>, <bloodmagic:potion_flask>]);
```