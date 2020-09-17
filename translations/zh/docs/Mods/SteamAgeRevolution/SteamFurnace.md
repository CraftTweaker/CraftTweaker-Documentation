# 蒸汽熔炉：

Steam Furnace 是一个用蒸汽将输入项转换为输出项的机器。

## 所属包名
`steamagerevolution.SteamFurnace`

## 方法

- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 该配方的结果。
- **[IItemStack](/Vanilla/Items/IItemStack/) 输入** 该配方的输入.
- **整理时间** 机器处理的制造时间
- **整流蒸汽成本** 机器处理蒸汽成本

## 添加配方

```zenscript
mods.steamagerevolution.SteamFurnace.addRecipe(IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.Steamace.addRecipe(<ore:cobblestone>, <minecraft:stone>, 200, 200);
```


## 移除

```zenscript mods.steamagerevolution.Steamfurnace.removeRecipe(IItemStack output); mods.steamagerevolution.SteamFurnace.removeRecipe(<minecraft:glass>);

mods.steamagerevolution.SteamFurnace.removeAll(); ``
