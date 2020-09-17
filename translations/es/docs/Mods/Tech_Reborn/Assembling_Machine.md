# Máquina de montaje

## Importando el Paquete
`mods.techreborn.MontblingMachine`

## Añadiendo recetas
```zenscript
mods.techreborn.assemblblingMachine.addRecipe(ItemStack salida, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Eliminando recetas
```zenscript
mods.techreborn.assemblblingMachine.removeInputRecipe(ingrediente IIngredientA, ingrediente IIngredientB);
mods.techreborn.assemblblingMachine.removeRecipe(salida ItemStack);
mods.techreborn.assemblblingMachine.removeAll();
```