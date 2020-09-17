# Extractor

## Importando el Paquete
`extractor mods.techreborn.`

## Añadiendo recetas
```zenscript
mods.techreborn.extractor.addRecipe(Salida IItemStack, Input1 IIngredient1, int ticktime, int euTick);
```

## Eliminando recetas
```zenscript
mods.techreborn.extractor.removeInputRecipe(ingrediente IIngredient);
mods.techreborn.extractor.removeRecipe(Salida ItemStack);
mods.techreborn.extractor.removeAll();
```