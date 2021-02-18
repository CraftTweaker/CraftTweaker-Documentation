# Centrifuge

## Importing the Package
`mods.techreborn.centrifuge`

## Adding Recipes
```zenscript
mods.techreborn.centrifuge.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Removing Recipes
```zenscript
mods.techreborn.centrifuge.removeInputRecipe(IIngredient iIngredient);
mods.techreborn.centrifuge.removeRecipe(IItemStack output);
mods.techreborn.centrifuge.removeAll();
```