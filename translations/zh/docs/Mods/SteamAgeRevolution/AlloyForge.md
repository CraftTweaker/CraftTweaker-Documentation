# 合金Forge

合金Forge是一台将两种输入液体转换成一种输出液体的机器。

## 所属包名
`Steamagerevolution.AlloyForge`

## 方法

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输出** 该配方的结果。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输入** 该配方的输入.
- **整理时间** 机器处理的制造时间

## 添加配方

```zenscript
mods.steamagerevolution.AlloyForge.addRecipe(ILiquidStack input, ILiquidStack input, ILiquidStack output, int craftTime);
mods.steamagerevolution.AlloyForge.addRecipe(<liquid:water>*100, <liquid:lava>*100, <liquid:obsidian>*200;
```


## 移除

```zenscript
mods.steamagerevolution.AlloyForge.removeRecipe(ILiquidStack output);
mods.steamagerevolution.AlloyForge.removeRecipe(<liquid:bronze>);

mods.steamagerevolution.AlloyForge.removeAll();
```
