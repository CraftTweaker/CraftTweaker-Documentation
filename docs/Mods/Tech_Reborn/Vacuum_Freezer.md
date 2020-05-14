# Vacuum Freezer

## Importing the Package
`mods.techreborn.vacuumFreezer`

## Adding Recipes
```zenscript
mods.techreborn.vacuumFreezer.addRecipe(IItemStack output, IIngredient input, int ticktime, int euTick);
```

## Removing Recipes
```zenscript
mods.techreborn.vacuumFreezer.removeInputRecipe(IIngredient iIngredient);
mods.techreborn.vacuumFreezer.removeRecipe(IItemStack output);
mods.techreborn.vacuumFreezer.removeAll();
```