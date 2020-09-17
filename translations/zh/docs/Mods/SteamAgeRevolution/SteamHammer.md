# 蒸汽锤子

Steam Hammer是一台机器，用蒸汽将两个输入项转换成输出项。

## 所属包名
`mods.steamagerevolution.SteamHammer`.

## 方法

- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 该配方的结果。
- **[IItemStack](/Vanilla/Items/IItemStack/) 输入** 该配方的输入.
- **整理时间** 机器处理的制造时间
- **整流蒸汽成本** 机器处理蒸汽成本

## 添加配方

```zenscript
mods.steamagerevolution.Steamhammer.addRecipe(IIngredient input, IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.Steammer.addRecipe(<ore:ingotIron>, <ore:ingotIron>, <ore:plateIron>.firstItem, 200, 200);
```


## 移除

```zenscript
mods.steamagerevolution.Steammer.removeRecipe(IItemStack output);
mods.steamagerevolution.Steamagerevolution.Steammer.removeRecipe(<ore:plateIron>.firstItem);

mods.steamagerevolution.Steammer.removeAll();
```
