# Precision Sawmill

A partir del Mekanism 9.7.0 ahora es posible ver todas las cadenas de recetas del Aserradero de Precisión a través del comando `/ct mekrecipes aserradero`

## Adicional

```zenscript
mods.mekanism.sawmill.addRecipe(IIngredient inputStack, ItemStack outputStack, @Optional ItemStack bonusOutput, @Optional double bonusChance);

mods. ekanism.sawmill.addRecipe(<minecraft:bow>, <minecraft:stick> * 3, <minecraft:string> * 3, 0.5);
mods.mekanism.sawmill.addRecipe(<minecraft:torch>, <minecraft:stick>);
```

A partir de Mekanism 9.7.0 es posible utilizar IIngredients como la inputStack en lugar de sólo ItemStacks.

Nota: Actualmente todo esto es bucle sobre las diferentes posibilidades en java mientras se añade en lugar de tener que hacerlo en ZenScript. Actualmente no hay soporte para ingredientes compuestos o orediccionarios en las propias máquinas.

## Eliminar

```zenscript
mods.mekanism.sawmill.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack, @Optional IIngredient bonusOutput);

mods.mekanism.sawmill.removeRecipe(<minecraft:bed>, <minecraft:planks>, <minecraft:wool>);
mods.mekanism.sawmill.removeRecipe(<minecraft:planks:*>);
```

Especificar un parámetro de salida sólo eliminará la receta específica que resulta en esa salida de esa entrada. Al omitir el parámetro de salida se eliminarán todas las recetas que el objeto de entrada puede producir.

## Eliminando todas las recetas

A partir del Mekanism 9.7.0 ahora es posible eliminar todas las recetas de Aserradero Preciso. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.sawmill.removeAllRecipes();
```