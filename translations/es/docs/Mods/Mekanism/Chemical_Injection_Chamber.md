# Cámara de inyección química

A partir del Mekanismo 9.7. Ahora es posible ver todas las cadenas de recetas de la Cámara de Inyección Química a través del comando `/ct mekrecipes inyection`

## Adicional

```zenscript
mods.mekanism.chemical.injection.addRecipe(IIngredient inputStack, IGasStack inputGas, ItemStack outputStack);

mods.mekanism.chemical.injection.addRecipe(<minecraft:hardened_clay:1>, <gas:water>, <minecraft:clay>
```

A partir del Mekanism 9.7.0 inputGas ya no está restringido a sólo ácido sulfúrico, agua o cloruro de hidrógeno

También a partir del Mekanism 9.7.0 es posible utilizar IIngredients como la inputStack en lugar de sólo ItemStacks.

Nota: Actualmente todo esto es bucle sobre las diferentes posibilidades en java mientras se añade en lugar de tener que hacerlo en ZenScript. Actualmente no hay soporte para ingredientes compuestos o orediccionarios en las propias máquinas.

## Eliminar

```zenscript
mods.mekanism.chemical.injection.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:2>, <mekanism:oreblock>, <gas:hydrogenchloride>);
mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:1>);
```

Especificar un parámetro de entrada sólo eliminará la receta específica que usa dicha entrada. Omitir el parámetro de entrada eliminará todas las recetas que producen la salida especificada.

## Eliminando todas las recetas

A partir del Mekanism 9.7.0 ahora es posible eliminar todas las recetas de la Cámara de Inyección Química. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.chemical.injection.removeAllRecipes();
```