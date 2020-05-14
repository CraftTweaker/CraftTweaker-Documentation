# Chemical Reactor

## Importing the Package
`mods.techreborn.chemicalReactorRecipe`

## Adding Recipes
```zenscript
mods.techreborn.chemicalReactorRecipe.addRecipe(IItemStack output1, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Removing Recipes
```zenscript
mods.techreborn.chemicalReactorRecipe.removeInputRecipe(IIngredient iIngredient);
mods.techreborn.chemicalReactorRecipe.removeRecipe(IItemStack output);
mods.techreborn.chemicalReactorRecipe.removeAll();
```