# Residuos Químicos

A partir del Mekanism 9.7.0 ahora es posible ver todas las cadenas de recetas del Desierto Químico a través del comando `/ct mekrecipes lavadora`

## Adicional

```zenscript
mods.mekanism.chemical.washer.addRecipe(IGasStack inputGas, IGasStack outputGas);

mods.mekanism.chemical.washer.addRecipe(<gas:deuterium>, <gas:tritium>);
```

## Eliminar

```zenscript
mods.mekanism.chemical.washer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas);

mods.mekanism.chemical.washer.removeRecipe(<gas:cleanLead>, <gas:lead>);
mods.mekanism.chemical.washer.removeRecipe(<gas:cleanOsmium>);
```

Especificar un parámetro de entrada sólo eliminará la receta específica que usa dicha entrada. Omitir el parámetro de entrada eliminará todas las recetas que producen la salida especificada.

## Eliminando todas las recetas

A partir del Mekanism 9.7.0 ahora es posible eliminar todas las recetas de los Desperdicios Químicos. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.chemical.washer.removeAllRecipes();
```