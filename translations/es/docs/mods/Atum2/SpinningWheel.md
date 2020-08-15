# Rueda giratoria

## Paquete
`mods.atum.Spinningwheel;`

## Añadir una receta

`mods.atum.Spinningwheel.addRecipe(entrada, salida, rotaciones);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotaciones` Cualquier número superior a 0

Añade una receta con la entrada & salida especificada, que toma las rotaciones especificadas para completar la receta

```zenscript
mods.atum.Spinningwheel.addRecipe(<item:atum:scroll>, <item:minecraft:string>, 3);
```

## Eliminando una receta

### Quitar recetas por Salida

`mods.atum.Spinningwheel.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Elimina todas las recetas donde el resultado de la salida es el [ItemStack](/vanilla/api/items/IItemStack) proporcionado.

```zenscript
mods.atum.Spinningwheel.removeRecipeByOutput(<item:atum:linen_thread>);
```

### Eliminar recetas por Salida & Entrada

`mods.atum.Spinningwheel.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Elimina la receta específica, con la salida & entrada especificada

```zenscript
mods.atum.Spinningwheel.removeRecipeByOutputInput(<item:atum:linen_thread>, <item:atum:flax>);
```

### Otros métodos de eliminación

Ver [Administradores de Recetas](/recipes/recipe_managers) para ver otras formas de remover las recetas de Rueda
