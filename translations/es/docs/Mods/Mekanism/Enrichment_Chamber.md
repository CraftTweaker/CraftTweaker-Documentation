# Cámara de Enriquecimiento

A partir del Mekanism 9.7.0 ahora es posible ver todas las cadenas de recetas de la Cámara de Enrichment a través del comando `/ct mekrecipes enrichment`

## Adicional

```zenscript
mods.mekanism.enrichment.addRecipe(IIngredient inputStack, ItemStack outputStack);

mods.mekanism.enrichment.addRecipe(<minecraft:coal_block>, <mekanism:compressedcarbon> * 9);
```

A partir de Mekanism 9.7.0 es posible utilizar IIngredients como la inputStack en lugar de sólo ItemStacks.

Nota: Actualmente todo esto es bucle sobre las diferentes posibilidades en java mientras se añade en lugar de tener que hacerlo en ZenScript. Actualmente no hay soporte para ingredientes compuestos o orediccionarios en las propias máquinas.

## Eliminar

```zenscript
mods.mekanism.enrichment.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.enrichment.removeRecipe(<minecraft:mossy_cobblestone>, <minecraft:cobblestone>);
mods.mekanism.enrichment.removeRecipe(<minecraft:stonebrick:1>);
```

Especificar un parámetro de salida sólo eliminará la receta específica que resulta en esa salida de esa entrada. Al omitir el parámetro de salida se eliminarán todas las recetas que el objeto de entrada puede producir.

## Eliminando todas las recetas

A partir del Mekanism 9.7.0 ahora es posible eliminar todas las recetas de la Cámara de Enricos. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.enrichment.removeAllRecipes();
```