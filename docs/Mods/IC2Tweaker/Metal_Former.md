# Metal Former

## Package
`import mods.ic2.MetalFormer`

## Methods
- **IItemStack output**
- **IIngredient input**

## Add Cutting Recipe
```
mods.ic2.MetalFormer.addCuttingRecipe(IItemStack output, IItemStack input);

mods.ic2.MetalFormer.addCuttingRecipe(<minecraft:diamond>, <minecraft:dirt> * 64);
```

## Remove Cutting Recipe

To remove an existed recipe, simply remove the corresponding line in  `config/ic2/metal_former_cutting.ini`.


## Add Extruding Recipe
```
mods.ic2.MetalFormer.addExtrudingRecipe(IItemStack output, IItemStack input);

mods.ic2.MetalFormer.addExtrudingRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```
## Remove Extruding Recipe

To remove an existed recipe, simply remove the corresponding line in  `config/ic2/metal_former_extruding.ini`.

## Add Rolling Recipe
```
mods.ic2.MetalFormer.addRollingRecipe(IItemStack output, IItemStack input);

mods.ic2.MetalFormer.addRollingRecipe(<minecraft:diamond>, <minecraft:dirt> * 32);
```

## Remove Rolling Recipe

To remove an existed recipe, simply remove the corresponding line in  `config/ic2/metal_former_rolling.ini`.
