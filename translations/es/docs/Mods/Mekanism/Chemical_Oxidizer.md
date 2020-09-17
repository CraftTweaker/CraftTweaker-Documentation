# Oxidizador Químico

A partir del Mekanism 9.7.0 ahora es posible ver todas las cadenas de recetas del Oxidizador Químico a través del comando `/ct mekrecipes oxidizer`

## Adicional

```zenscript
mods.mekanism.chemical.oxidizer.addRecipe(IIngredient inputStack, IGasStack outputGas);

mods.mekanism.chemical.oxidizer.addRecipe(<mekanism:dust:2>, <gas:cleanOsmium>);
```

A partir de Mekanism 9.7.0 es posible utilizar IIngredients como la inputStack en lugar de sólo ItemStacks.

Nota: Actualmente todo esto es bucle sobre las diferentes posibilidades en java mientras se añade en lugar de tener que hacerlo en ZenScript. Actualmente no hay soporte para ingredientes compuestos o orediccionarios en las propias máquinas.

## Eliminar

```zenscript
mods.mekanism.chemical.oxidizer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack);

mods.mekanism.chemical.oxidizer.removeRecipe(<gas:brine>, <mekanism:salt>);
mods.mekanism.chemical.oxidizer.removeRecipe(<gas:lithium>);
```

Especificar un parámetro de entrada sólo eliminará la receta específica que usa dicha entrada. Omitir el parámetro de entrada eliminará todas las recetas que producen la salida especificada.

## Eliminando todas las recetas

A partir del Mekanism 9.7.0 ahora es posible eliminar todas las recetas de Oxidizador Químico. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.chemical.oxidizer.removeAllRecipes();
```