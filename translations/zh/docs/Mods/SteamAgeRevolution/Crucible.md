# 关键的

Crucible 是一台机器，用蒸汽将输入项转换成输出液体。

## 所属包名
`Steamagerevolution.Crucible`

## 方法

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输出** 该配方的结果。
- **[IIngradient](/Vanilla/Variable_Types/IIngredient/) 输入** 该配方的输入.
- **整理时间** 机器处理的制造时间
- **整流蒸汽成本** 机器处理蒸汽成本

## 添加配方

```zenscript
mods.steamagerevolution. Crucible.addRecipe(IIngredient input, ILiquidStack output, int craftTime, int steamCost);
mods.steamagerevolution.Crucible.addRecipe(<minecraft:obsidian>, <liquid:lava>*1000, 200, 200);
```

## 移除

```zenscript
mods.steamagerevolution. Crucible.removeRecipe(ILiquidStack);
mods.steamagerevolution.Crucible.removeRecipe(<liquid:lava>);

mods.steamagerevolution.crucible.removeAll();
```
