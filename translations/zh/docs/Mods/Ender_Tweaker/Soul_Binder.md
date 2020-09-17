# 灵魂交错器

## 所属包名

`导入 mods.enderio.SoulBinder;`

## 方法

- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 该配方的结果。
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) 输入** 主(非灵魂瓶)成分。
- **String[] 实体** 允许必须存在灵魂瓶中的实体使这个配方正常工作。
- **int xp** 此配方的体验成本
- **英寸能量成本** 配方使用量有多大。 默认值为 5000。

## 添加配方

```zenscript
mods.enderio.SoulBinder.addRecipe(IItemStack output, IIngredient input, String[…]entities, int xp, int energyCost);

mods.enderio.SoulBinder.addRecipe(<minecraft:nether_star>, <minecraft:bone>, ["minecraft:skeleton"], 50000);
```

## 移除

```zenscript
mods.enderio.SoulBinder.removeRecipe(IItemStack output);

mods.enderio.SoulBinder.removeRecipe(<enderio:item_material:19>);
```