# Torre de Destillación

## Importando el Paquete
`mods.techreborn.distillationTower`

## Añadiendo recetas
```zenscript
mods.techreborn.distillationTower.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Eliminando recetas
```zenscript
mods.techreborn.distillationTower.removeInputRecipe(ingrediente IIngredient);
mods.techreborn.distillationTower.removeRecipe(IItemStack output);
mods.techreborn.distillationTower.removeAll();
```