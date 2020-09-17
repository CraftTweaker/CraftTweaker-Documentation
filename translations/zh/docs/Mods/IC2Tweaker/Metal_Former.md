# 金属前

## 所属包名

`导入 mods.ic2.MetalFormer;`

## 使用方式

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Igredient](/Vanilla/Variable_Types/IIngredient/) 输入**

## 添加剪切方法

```zenscript
mods.ic2.MetalFormer.addCuttingRecipe(ItemStack output, Ingredient input);

mods.ic2.MetalFormer.addCuttingRecipe(<minecraft:diamond>, <minecraft:dirt> * 64)；
```

## 移除剪切配方

- 如果使用 Ic2 Experimental, 为了删除配方，只需在 `config/ic2/metal_former_cutting.ini` 中删除相应的行。
- 如果使用 Ic2 经典和 Ic2c 附加组件来移除配方，只需在 `config/ic2/ic2machineRecipes.json` 中禁用相应的配方。

## 添加提取配方

```zenscript
mods.ic2.MetalFormer.addExtrudingRecipe(IItemStack output, IIngredient input);

mods.ic2.MetalFormer.addExtrudingRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64)；
```

## 移除提取配方

- 如果使用 Ic2 Experimental, 为了删除配方，只需在 `config/ic2/metal_former_extruding.ini` 中删除相应的行。
- 如果使用 Ic2 经典和 Ic2c 附加组件来移除配方，只需在 `config/ic2/ic2machineRecipes.json` 中禁用相应的配方。

## 添加滚动配方

```zenscript
mods.ic2.MetalFormer.addRollingRecipe(IItemStack output, IIngredient input);

mods.ic2.MetalFormer.addRollingRecipe(<minecraft:diamond>, <minecraft:dirt> * 32);
```

## 删除滚动配方

- 如果使用 Ic2 Experimental, 若要删除配方，只需在 `config/ic2/metal_former_rolling.ini` 中删除相应的行
- 如果使用 Ic2 经典和 Ic2c 附加组件来移除配方，只需在 `config/ic2/ic2machineRecipes.json` 中禁用相应的配方。