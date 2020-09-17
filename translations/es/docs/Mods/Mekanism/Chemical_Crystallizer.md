# Cristal Químico

A partir del Mekanism 9.7.0 ahora es posible ver todas las cadenas de recetas del Cristallizador Químico a través del comando `/ct mekrecipes cristallizer`

## Adicional

```zenscript
mods.mekanism.chemical.crystallizer.addRecipe(IGasStack inputGas, ItemStack outputStack);

mods.mekanism.chemical.crystallizer.addRecipe(<gas:water>, <minecraft:ice>);
```

## Eliminar

```zenscript
mods.mekanism.chemical.crystallizer.removeRecipe(IIngredient outputStack, @Optional IIngredient inputGas);

mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:otherdust:4>, <gas:lithium>);
mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:crystal:1>);
```

Especificar un parámetro de entrada sólo eliminará la receta específica que usa dicha entrada. Omitir el parámetro de entrada eliminará todas las recetas que producen la salida especificada.

## Eliminando todas las recetas

A partir de Mekanism 9.7.0 ahora es posible eliminar todas las recetas de Cristalízer Químico. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.chemical.crystallizer.removeAllRecipes();
```