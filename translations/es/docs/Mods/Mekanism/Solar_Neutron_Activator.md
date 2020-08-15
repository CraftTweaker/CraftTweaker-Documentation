# Activador de Neutron Solar

A partir del Mekanismo 9.7. ahora es posible ver todas las cadenas de recetas del Activador Solar de Neutron mediante el comando `/ct mekrecipes solarneutronactivator`

## Adicional

```zenscript
mods.mekanism.solarneutronactivator.addRecipe(IGasStack gasInput, IGasStack gasOutput);

mods.mekanism.solarneutronactivator.addRecipe(<gas:sulfurdioxide>, <gas:sulfurtrioxide>);
```

## Eliminar

```zenscript
mods.mekanism.solarneutronactivator.removeRecipe(IIngredient gasInput, @Optional IIngredient gasOutput);

mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>, <gas:tritium>);
mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>);
```

Especificar un parámetro de salida sólo eliminará la receta específica que resulta en esa salida de esa entrada. Al omitir el parámetro de salida se eliminarán todas las recetas que el objeto de entrada puede producir.

## Eliminando todas las recetas

A partir de Mekanism 9.7.0 ahora es posible eliminar todas las recetas del Activador Solar de Neutron. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.solarneutronactivator.removeAllRecipes();
```