# 塔尔文 Forge

## 所属包名

`blemagic.TartaricForge`

## 添加配方

```zenscript
输入的最大尺寸是 4
//mods.blemmagic.TartaricForge.addRecipe(IItemStack 输出, IItemStack[]输入, 双层微灵魂, 双精灵)；
模组。 loodmagic.TartaricForge.addRecipe(<minecraft:diamond>,[<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 10,10);
```

## 删除配方

```zenscript
输入最大长度为 4
//mods.blemagic.TartaricForge.removeRecipe(IItemStack[…]输入)；
mods.blemmagic.TartaricForge.removeRecipe([<minecraft:ghast_tear>,<minecraft:feather>, <minecraft:feather>])；
```