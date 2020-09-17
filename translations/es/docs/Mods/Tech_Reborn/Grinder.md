# Molino

## Importando el Paquete
`mods.techreborn.grinder`

## Añadiendo recetas
```zenscript
mods.techreborn.grinder.addRecipe(IItemStack salida, IIngredient input1, int ticktime, int euTick);
```

## Eliminando recetas
```zenscript
mods.techreborn.grinder.removeInputRecipe(ingrediente IIngredient);
mods.techreborn.grinder.removeRecipe(salida IItemStack);
mods.techreborn.grinder.removeAll();
```