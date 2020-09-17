# Infusor Químico

A partir del Mekanism 9.7.0 ahora es posible ver todas las cadenas de recetas del Infuso Químico a través del comando `/ct mekrecipes chemicalInfuser`

## Adicional

```zenscript
mods.mekanism.chemical.infuser.addRecipe(IGasStack inputGas1, IGasStack inputGas2, IGasStack outputGas);

mods.mekanism.chemical.infuser.addRecipe(<gas:water>, <gas:deuterium>, <gas:tritium>);
```

## Eliminar

```zenscript
mods.mekanism.chemical.infuser.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas1, @Optional IIngredient inputGas2);

mods.mekanism.chemical.infuser.removeRecipe(<gas:hydrogenchloride>, <gas:hydrogen>, <gas:chlorine>);
mods.mekanism.chemical.infuser.removeRecipe(<gas:fusionfuel>);
```

Especificar un parámetro de entrada sólo eliminará la receta específica que usa dicha entrada. Omitir el parámetro de entrada eliminará todas las recetas que producen la salida especificada.

## Eliminando todas las recetas

A partir del Mekanism 9.7.0 ahora es posible eliminar todas las recetas de Infusibles Químicos. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.chemical.infuser.removeAllRecipes();
```