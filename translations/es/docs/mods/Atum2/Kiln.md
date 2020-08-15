# Horno

El horno es un bloque múltiple que se utiliza para procesar rápidamente bloques de construcción, que se pueden adquirir a través de fundir algo en un horno.

## Paquete
`mods.atum.Kiln;`

## Lista negra

Las recetas del horno se basan en las recetas de hornos de vainilla, ordenando todo además de construir bloques. La lista negra es una forma de minimizar las recetas que se recogen del horno de vainilla.

`mods.atum.Kiln.blacklist(id);`

- `id` Un ID de espacio de nombres para el bloque de entrada/elemento que debe estar en la lista negra.

Elimina la(s) receta(s) con el objeto/bloque especificado de las recetas que el horno extraerá del horno de vainilla

```zenscript
mods.atum.Kiln.blacklist("minecraft:cobblestone");
```

## Añadir una receta

`mods.atum.Kiln.addRecipe(entrada, salida, experiencia, @Optional cookTime);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `experimenta` número de float
- `cookTime` Número entero (Si se deja vacío, por defecto será 75)

Añade una receta con la entrada especificada, la salida, la experiencia & tiempo de cocción

```zenscript
mods.atum.Kiln.addRecipe(<item:atum:dirty_bone_block>, <item:atum:alabaster>, 0.2);
```

## Eliminando una receta

Los métodos de eliminación solo funcionan para las recetas añadidas específicamente para el horno por Atum (O otros mods) Por defecto esta solo será la receta del bloque de azulejos blancos de cerámica. Si desea eliminar otra cosa, probablemente esté buscando la lista negra (documentación arriba)

### Quitar recetas por Salida

`mods.atum.Kiln.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Elimina todas las recetas donde el resultado de la salida es el [ItemStack](/vanilla/api/items/IItemStack) proporcionado.

```zenscript
mods.atum.Kiln.removeRecipeByOutput(<item:atum:marl>);
```

### Eliminar recetas por Salida & Entrada

`mods.atum.Kiln.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Elimina la receta específica, con la salida & entrada especificada

```zenscript
mods.atum.Kiln.removeRecipeByOutputInput(<item:atum:cermic_white>, <item:atum:marl>);
```

### Otros métodos de eliminación

Ver [Administradores de Recetas](/recipes/recipe_managers) para ver otras formas de remover las recetas de Rueda
