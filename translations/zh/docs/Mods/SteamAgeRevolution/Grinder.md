# 研磨机

研磨机是一台机器，用蒸汽将输入物品转换为输出物品。

## 所属包名
`steamagerevolution.Grinder`

## 方法

- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 该配方的结果。
- **[IItemStack](/Vanilla/Items/IItemStack/) 输入** 该配方的输入.
- **整理时间** 机器处理的制造时间
- **整流蒸汽成本** 机器处理蒸汽成本

## 添加配方

```zenscript
mods.steamagerevolution.Grinder.addRecipe(IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.Grinder.addRecipe(<ore:cobblestone>, <minecraft:gravel>, 200, 200);
```

## 移除配方

```zenscript
mods.steamagerevolution.Grinder.removeRecipe(IItemStack output);
mods.steamagerevolution.Grinder.removeRecipe(<minecraft:sand>);

mods.steamagerevolution.Grinder.removeAll();
```
