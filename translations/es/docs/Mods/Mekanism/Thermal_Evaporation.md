# Evaporación térmica

A partir del Mekanism 9.7.0 ahora es posible ver todas las cadenas de recetas de la Evaporación térmica a través del comando `/ct mekrecipes thermalevaporation`

## Adicional

```zenscript
mods.mekanism.thermalevaporation.addRecipe(ILiquidStack liquidInput, ILiquidStack liquidSalput);

mods.mekanism.thermalevaporation.addRecipe(<liquid:liquidfusionfuel>, <liquid:lava>);
```

## Eliminar

```zenscript
mods.mekanism.thermalevaporation.removeRecipe(IIngredient liquidInput, @Optional IIngredient liquidOutput);

mods.mekanism.thermalevaporation.removeRecipe(<liquid:water>, <liquid:brine>);
mods.mekanism.thermalevaporation.removeRecipe(<liquid:brine>);
```

Especificar un parámetro de salida sólo eliminará la receta específica que resulta en esa salida de esa entrada. Al omitir el parámetro de salida se eliminarán todas las recetas que el objeto de entrada puede producir.

## Eliminando todas las recetas

A partir del Mekanism 9.7.0 ahora es posible eliminar todas las recetas de Planta de Evaporación térmica. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.thermalevaporation.removeAllRecipes();
```