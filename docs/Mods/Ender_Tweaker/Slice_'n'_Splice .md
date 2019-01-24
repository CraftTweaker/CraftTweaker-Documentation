# Slice 'n' Splice
## Package
`mods.enderio.SliceNSplice`

## Methods
**- IItemStack output** The result of the recipe.

**- IIngredient[] input** The ingredients. Must be between 1 and 6 ingredients.

**- int energyCost** How much FE the recipe uses. Defaults to 5000.

**- float xp** The xp is granted from this recipe. May not be negative.


## Addition
```
mods.enderio.SliceNSplice.  
addRecipe(IItemStack output, IIngredient[] input, @Optional int energyCost, @Optional float xp);

mods.enderio.SliceNSplice.  
addRecipe(<minecraft:emerald>, [<minecraft:diamond>, <minecraft:gold_ingot>, <minecraft:iron_ingot>], 5000, 0);
```
## Removal
```
mods.enderio.SliceNSplice.removeRecipe(IItemStack output);

mods.enderio.SliceNSplice.removeRecipe(<enderio:block_enderman_skull:2>);
```
