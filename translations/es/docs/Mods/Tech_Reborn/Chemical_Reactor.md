# Reactor Químico

## Importando el Paquete
`mods.techreborn.chemicalReactor`

## Añadiendo recetas
```zenscript
mods.techreborn.chemicalReactor.addRecipe(IItemStack output1, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Eliminando recetas
```zenscript
mods.techreborn.chemicalReactor.removeInputRecipe(ingrediente IIngredient);
mods.techreborn.chemicalReactor.removeRecipe(IItemStack output);
mods.techreborn.chemicalReactor.removeAll();
```