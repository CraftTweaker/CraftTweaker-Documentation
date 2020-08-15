# Cámara de Purificación

A partir del Mekanism 9.7.0 ahora es posible ver todas las cadenas de recetas de la Cámara de Purificación a través del comando `/ct mekrecipes purificación`

## Adicional

```zenscript
mods.mekanism.purification.addRecipe(IIngredient itemInput, @Optional IGasStack gasInput, ItemStack itemOutput);

mods.mekanism.purification.addRecipe(<minecraft:wool:1>, <gas:hydrogenchloride>, <minecraft:wool>);
mods.mekanism.purification.addRecipe(<minecraft:coal:1>, <minecraft:coal>);
```

A partir del Mekanism 9.7.0 inputGas ya no está restringido sólo al oxígeno

También a partir del Mekanism 9.7.0 es posible utilizar IIngredients como el itemInput en lugar de sólo ItemStacks.

Nota: Actualmente todo esto es bucle sobre las diferentes posibilidades en java mientras se añade en lugar de tener que hacerlo en ZenScript. Actualmente no hay soporte para ingredientes compuestos o orediccionarios en las propias máquinas.

## Eliminar

```zenscript
mods.mekanism.purification.removeRecipe(IIngredient itemOutput, @Optional IIngredient itemInput, @Optional IIngredient gasInput);

mods.mekanism.purification.removeRecipe(<mekanism:clump:2>, <mekanism:shard:2>, <gas:oxygen>);
mods.mekanism.purification.removeRecipe(<mekanism:clump:1>);
```

Especificar un parámetro de entrada sólo eliminará la receta específica que usa dicha entrada. Omitir el parámetro de entrada eliminará todas las recetas que producen la salida especificada.

## Eliminando todas las recetas

A partir del Mekanism 9.7.0 ahora es posible eliminar todas las recetas de la Cámara de Purificación. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.purification.removeAllRecipes();
```