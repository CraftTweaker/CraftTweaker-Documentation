# Fundición Energizada

A partir del Mekanism 9.7.0 ahora es posible ver todas las cadenas de recetas del fundición Energizada a través del comando `/ct mekrecipes fundición`

## Adicional

```zenscript
mods.mekanism.smelter.addRecipe(IIngredient inputStack, ItemStack outputStack);

mods.mekanism.smelter.addRecipe(<minecraft:tallgrass:1>, <minecraft:deadbush>);
```

A partir de Mekanism 9.7.0 es posible utilizar IIngredients como la inputStack en lugar de sólo ItemStacks.

Nota: Actualmente todo esto es bucle sobre las diferentes posibilidades en java mientras se añade en lugar de tener que hacerlo en ZenScript. Actualmente no hay soporte para ingredientes compuestos o orediccionarios en las propias máquinas.

## Eliminar

```zenscript
mods.mekanism.smelter.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.smelter.removeRecipe(<minecraft:sand:*>, <minecraft:glass>);
mods.mekanism.smelter.removeRecipe(<minecraft:cobblestone>);
```

Especificar un parámetro de salida sólo eliminará la receta específica que resulta en esa salida de esa entrada. Al omitir el parámetro de salida se eliminarán todas las recetas que el objeto de entrada puede producir.

## Eliminando todas las recetas

A partir del Mekanism 9.7.0 ahora es posible eliminar todas las recetas de Fundición Energizada. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.smelter.removeAllRecipes();
```