# Separador electrolítico

A partir del Mekanism 9.7.0 ahora es posible ver todas las cadenas de recetas del separador electrolítico a través del comando `/ct mekrecipes separador`

## Adicional

```zenscript
mods.mekanism.separator.addRecipe(ILiquidStack inputFluid, double inputRF, IGasStack outputGas1, IGasStack outputGas2);

mods.mekanism.separator.addRecipe(<liquid:liquidfusionfuel>, 5000, <gas:deuterium>, <gas:tritium>);
```

## Eliminar

```zenscript
mods.mekanism.separator.removeRecipe(IIngredient inputFluid, @Optional IIngredient outputGas1, @Optional IIngredient outputGas2);

mods.mekanism.separator.removeRecipe(<liquid:heavywater>, <gas:deuterium>, <gas:oxygen>);
mods.mekanism.separator.removeRecipe(<liquid:water>);
```

Especificar un parámetro de salida sólo eliminará la receta específica que resulta en esa salida de esa entrada. Al omitir el parámetro de salida se eliminarán todas las recetas que el objeto de entrada puede producir.

## Eliminando todas las recetas

A partir de Mekanism 9.7.0 ahora es posible eliminar todas las recetas Electrolíticas separadoras. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.separator.removeAllRecipes();
```