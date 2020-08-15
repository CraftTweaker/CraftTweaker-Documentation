# Quern

## Paquete
`mods.atum.Quern;`

## Añadir una receta

`mods.atum.Quern.addRecipe(entrada, salida, rotaciones);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotaciones` Cualquier número superior a 0

Añade una receta con la entrada especificada & la salida, que toma las rotaciones especificadas para completar la consulta

```zenscript
mods.atum.Quern.addRecipe(<item:atum:fertile_soil>, <item:atum:fertile_soil_pile>, 3);
```

## Eliminando una receta

### Quitar recetas por Salida

`mods.atum.Quern.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Elimina todas las recetas donde el resultado de la salida es el [ItemStack](/vanilla/api/items/IItemStack) proporcionado.

```zenscript
mods.atum.Quern.removeRecipeByOutput(<item:atum:emmer_flour>);
```

### Eliminar recetas por Salida & Entrada

`mods.atum.Quern.removeRecipeByOutputInput(salida, entrada);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Elimina la receta específica, con la salida & entrada especificada

```zenscript
mods.atum.Quern.removeRecipeByOutputInput(<item:atum:emmer_flour>, <item:atum:emmer>);
```

### Otros métodos de eliminación

Vea [Gestores de Recetas](/recipes/recipe_managers) para otras formas de remover recetas de Quern
