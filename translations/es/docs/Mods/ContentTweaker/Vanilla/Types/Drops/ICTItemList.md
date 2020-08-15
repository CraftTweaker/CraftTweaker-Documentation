# Lista ICTItems

La ICTItemList es lo que un [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/) usa como primer parámetro.  
Es una lista de elementos que serán soltados por el [bloque](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/)dado.  
Dependiendo de otros gestores de eventos activos puede que ya contenga algunos elementos o que esté vacío.

## Importar la clase

Si alguna vez te encuentras en necesidad de importar esta clase, así es como lo haces:

```zenscript
import mods.contenttweaker.ItemList;
```

## Agregando elementos a la lista

Puede añadir [ItemStacks](/Vanilla/Items/IItemStack/) o [WeightedItemStacks](/Vanilla/Items/WeightedItemStack/) a la lista usando las funciones siguientes:

```zenscript
list.add(<minecraft:carrot>);

list + <minecraft:carrot>;

list.add(<minecraft:seeds> % 10);

lista + (<minecraft:seeds> % 10);
```

## Eliminando elementos de la lista

Sólo puede eliminar elementos usando el índice del artículo, o puede borrar toda la lista.

```zenscript
list.remove(1);

list.clear();
```

## Obteniendo elementos de la lista

Puede obtener un elemento por su índice o obtener la lista completa como una matriz o una lista:

```zenscript
import crafttweaker.item.IItemStack;

val itemAt = list.get(0); //as ItemStack

val itemArray = list.getArray(); //as ItemStack[]

val itemList = list.getList(); //as [IItemStack]
```

## Otra información

También puede recuperar esta información de la lista:

```zenscript
list.getLength();
```