# Compresor de osmio

A partir del Mekanism 9.7.0 ahora es posible ver todas las cadenas de recetas del compresor de Osmium a través del comando `/ct compresor de recetas`

## Adicional

```zenscript
mods.mekanism.compressor.addRecipe(IIngredient inputStack, @Optional IGasStack inputGas, ItemStack outputStack);

mods.mekanism.compressor.addRecipe(<mekanism:basicblock:3>, <gas:liquidosmium>, <minecraft:stone>);
mods.mekanism.compressor.addRecipe(<mekanism:basicblock:1>, <minecraft:netherrack>);
```

A partir del Mekanism 9.7.0 inputGas ya no está restringido sólo al osmio.

También a partir del Mekanism 9.7.0 es posible utilizar IIngredients como la inputStack en lugar de sólo ItemStacks.

Nota: Actualmente todo esto es bucle sobre las diferentes posibilidades en java mientras se añade en lugar de tener que hacerlo en ZenScript. Actualmente no hay soporte para ingredientes compuestos o orediccionarios en las propias máquinas.

## Eliminar

```zenscript
mods.mekanism.compressor.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.compressor.removeRecipe(<mekanism:ingot>, <mekanism:otherdust:5>, <gas:liquidosmium>);
mods.mekanism.compressor.removeRecipe(<mekanism:ingot:3>);
```

Especificar un parámetro de entrada sólo eliminará la receta específica que usa dicha entrada. Omitir el parámetro de entrada eliminará todas las recetas que producen la salida especificada.

## Eliminando todas las recetas

A partir del Mekanism 9.7.0 ahora es posible eliminar todas las recetas del compresor de Osmium. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.compressor.removeAllRecipes();
```