# Congelador de vacío

## Importando el Paquete
`mods.techreborn.vacuumFreezer`

## Añadiendo recetas
```zenscript
mods.techreborn.vacuumFreezer.addRecipe(Salida IItemStack, entrada IIngredient, int ticktime, int euTick);
```

## Eliminando recetas
```zenscript
mods.techreborn.vacuumFreezer.removeInputRecipe(ingrediente IIngredient);
mods.techreborn.vacuumFreezer.removeRecipe(IItemStack output);
mods.techreborn.vacuumFreezer.removeAll();
```