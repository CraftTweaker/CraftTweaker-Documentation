# Reactor de fusión

## Importando el Paquete
`mods.techreborn.fusionReactor`

## Añadiendo recetas
```zenscript
mods.techreborn.fusionReactor.addRecipe(IIngredient topInput, IIngredient bottomInput, IItemStack output, int startEU, int euTick, int tickTime);
```

## Eliminando recetas
```zenscript
mods.techreborn.fusionReactor.removeTopInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeBottomInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeRecipe(ItemStack output);
mods.techreborn.fusionReactor.removeAll();
```