# 连铸块

铸造区块是一个将输入液转换成输出项的机器。

## 所属包名
`Steamagerevolution.CastingBlock`

## 方法

- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 该配方的结果。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输入** 该配方的输入.
- **整理时间** 机器处理的制造时间

## 添加配方

```zenscript
mods.steamagerevolution. CastingBlock.addRecipe(ILiquidStack input, IItemStack output, int craftTime);
mods.steamagerevolution. CastingBlock.addRecipe(<liquid:lava>*1000, <minecraft:obsidian>, 200);
```

## 移除

```zenscript
mods.steamagerevolution. CastingBlock.removeRecipe(IItemStack output);
mods.steamagerevolution. CastingBlock.removeRecipe(<minecraft:iron_block>);

mods.steamagerevolution. CastingBlock.removeAll();
```
