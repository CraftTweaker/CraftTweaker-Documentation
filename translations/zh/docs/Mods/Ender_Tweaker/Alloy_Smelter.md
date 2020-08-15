# 合金冶炼器

## 所属包名

`导入 mods.enderio.AlloySmelter;`

## 方法

- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 该配方的结果。
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] 输入** 成分. 必须介于 1 到 3 种成分。
- **英寸能量成本** 配方使用量有多大。 默认值为 5000。
- **float xp** 是从这个配方获得的 xp 。 也许不是消极的。

## 添加配方

```zenscript
mods.enderio.AlloySmelter.addRecipe(IItemStack output, IIngredient[] input, @Opidint energyCost, @Optional float xp);

mods.enderio.AlloySmelter.addRecipe(<minecraft:iron_ingot>, [<minecraft:sand>, <minecraft:gravel>, <minecraft:brick>]);
```

## 移除

```zenscript
mods.enderio.AlloySmelter.removeRecipe(IItemStack 输出);

mods.enderio.AlloySmelter.removeRecipe(<enderio:item_alloy_ingot:7>);
```