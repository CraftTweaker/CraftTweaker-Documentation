# 蒸馏器

蒸馏器是一个用蒸汽将输入液体转换成输出液体和物品的机器。

## 所属包名
`Steamagerevolution.Distiller`

## 方法

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输出** 该配方的结果。
- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 该配方的结果。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输入** 该配方的输入.
- **整理时间** 机器处理的制造时间
- **整流蒸汽成本** 机器处理蒸汽成本

## 添加配方

```zenscript
mods.steamagerevolution.Distiller.addRecipe(ILiquidStack input, IItemStack outputStack, ILiquidStack output, int craftTime, int steamCost);
mods.steamagerevolution.Distiller.addRecipe(<liquid:bio_fuel>*1000, <minecraft:dirt>, <liquid:ethanol>*1000, 200, 200);
```

## 移除

```zenscript mods.steamagerevolution.Distiller.removeRecipe(IItemStack outputStack, ILiquidStack output); mods.steamagerevolution.Distiller.removeRecipe(<minecraft:cobblestone>, <liquid:lava>);

mods.steamagerevolution.Distiller.removeAll(); ``
