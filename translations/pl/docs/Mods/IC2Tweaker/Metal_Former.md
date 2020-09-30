# Metal Former

## Package

`import mods.ic2.MetalFormer;`

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**

## Add Cutting Recipe

```zenscript
mods.ic2.MetalFormer.addCuttingRecipe(IItemStack output, IIngredient input);

mods.ic2.MetalFormer.addCuttingRecipe(<minecraft:diamond>, <minecraft:dirt> * 64);
```

## Remove Cutting Recipe

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/metal_former_cutting.ini`.
- If using Ic2 Classic and Ic2c Extras, to remove a recipe, simply disable the corresponding recipe in `config/ic2/ic2machineRecipes.json`.

## Add Extruding Recipe

```zenscript
mods.ic2.MetalFormer.addExtrudingRecipe(IItemStack output, IIngredient input);

mods.ic2.MetalFormer.addExtrudingRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Remove Extruding Recipe

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/metal_former_extruding.ini`.
- If using Ic2 Classic and Ic2c Extras, to remove a recipe, simply disable the corresponding recipe in `config/ic2/ic2machineRecipes.json`.

## Add Rolling Recipe

```zenscript
mods.ic2.MetalFormer.addRollingRecipe(IItemStack output, IIngredient input);

mods.ic2.MetalFormer.addRollingRecipe(<minecraft:diamond>, <minecraft:dirt> * 32);
```

## Remove Rolling Recipe

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/metal_former_rolling.ini`
- If using Ic2 Classic and Ic2c Extras, to remove a recipe, simply disable the corresponding recipe in `config/ic2/ic2machineRecipes.json`.