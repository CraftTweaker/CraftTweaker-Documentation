# Vakuum-Gefrierschrank

## Paket wird importiert
`mods.techreborn.vacuumFreezer`

## Rezepte hinzufügen
```zenscript
mods.techreborn.vacuumFreezer.addRecipe(IItemStack Output, IIngredient Input, int ticktime, int euTick);
```

## Rezepte entfernen
```zenscript
mods.techreborn.vacuumFreezer.removeInputRecipe(IIngredient ingredient);
mods.techreborn.vacuumFreezer.removeRecipe(IItemStack output);
mods.techreborn.vacuumFreezer.removeAll();
```