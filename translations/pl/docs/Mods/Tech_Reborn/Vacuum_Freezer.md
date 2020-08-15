# Vacuum Freezer

## Importing the Package
`mods.techreborn.vacuumFreezer`

## Dodawanie przepisów
```zenscript
mods.techreborn.vacuumFreezer.addRecipe(IItemStack output, IIngredient input, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.vacuumFreezer.removeInputRecipe(IIngredient ingredient);
mods.techreborn.vacuumFreezer.removeRecipe(IItemStack output);
mods.techreborn.vacuumFreezer.removeAll();
```