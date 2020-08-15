# Vacuum Freezer

## Importing the Package
`mods.techreborn.vacuumFreezer`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.vacuumFreezer.addRecipe(IItemStack output, IIngredient input, int ticktime, int euTick);
```

## Rimozione Ricette
```zenscript
mods.techreborn.vacuumFreezer.removeInputRecipe(IIngredient ingredient);
mods.techreborn.vacuumFreezer.removeRecipe(IItemStack output);
mods.techreborn.vacuumFreezer.removeAll();
```