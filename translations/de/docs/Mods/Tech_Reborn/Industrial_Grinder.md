# Industrial Grinder

## Importing the Package
`mods.techreborn.industrialGrinder`

## Adding Recipes
```zenscript
mods.techreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
mods.techreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, ILiquidStack fluid, int ticktime, int euTick);
```

## Removing Recipes
```zenscript
mods.techreborn.industrialGrinder.removeInputRecipe(IIngredient ingredient);
mods.techreborn.industrialGrinder.removeRecipe(IItemStack output);
mods.techreborn.industrialGrinder.removeAll();
```