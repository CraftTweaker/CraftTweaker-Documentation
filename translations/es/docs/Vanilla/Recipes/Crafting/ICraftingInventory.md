# ICraftingInventory

El ICraftingInventory contiene todo tipo de información sobre el inventario en el que se realiza un proceso de fabricación.

## Importar la clase

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.recipes.ICraftingInventory`

## ZenGetters

| ZenGetter    | Tipo de devolución                           | Descripción                                              |
| ------------ | -------------------------------------------- | -------------------------------------------------------- |
| `jugador`    | [IPlayer](/Vanilla/Players/IPlayer/)         | el jugador propietario de este inventario                |
| `tamaño`     | int                                          | el tamaño del inventario                                 |
| `width`      | int                                          | el ancho del inventario                                  |
| `altura`     | int                                          | altura del inventario                                    |
| `stackCount` | int                                          | el número de pilas que se han rellenado                  |
| `objetos`    | [IItemStack[][]](/Vanilla/Items/IItemStack/) | Los objetos que se encuentran en la tabla de fabricación |
| `Arreglo`    | [IItemStack[]](/Vanilla/Items/IItemStack/)   | Los objetos que se encuentran en la tabla de fabricación |

## Métodos

Los siguientes métodos están disponibles:

`inventory.getStack(index)` devuelve el [ItemStack](/Vanilla/Items/IItemStack/) en el índice dado o nulo si no hay ningún elemento presente. Index es un int.  
`inventory.setStack(index, item)` establece la pila en el índice dado al elemento proporcionado. El índice es un int, el elemento es un ItemStack. Use nulo si desea borrar la pila en ese índice.

La pila superior izquierda es posición (0, 0), fila y columna son puntos.  
`inventario. etStack(fila, columna)` devuelve el [ItemStack](/Vanilla/Items/IItemStack/) en la posición o nulo si no hay ningún elemento presente.  
`inventory.setStack(fila, columna, elemento)` establece la pila en la posición dada al elemento proporcionado. El objeto es un ItemStack. Utilice nulo si desea borrar la pila en esa posición.