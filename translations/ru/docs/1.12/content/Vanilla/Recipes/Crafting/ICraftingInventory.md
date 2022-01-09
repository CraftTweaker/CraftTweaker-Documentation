# ICraftingInventory

ICraftingInventory содержит всю информацию об инвентаре, в котором ведется крафт.

## Импорт класса
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.recipes.ICraftingInventory`


## ZenGetters
| ZenGetter    | Return type                                  | Описание                         |
| ------------ | -------------------------------------------- | -------------------------------- |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer/)         | игрок, владеющий этим инвентарем |
| `size`       | int                                          | размер инвентаря                 |
| `width`      | int                                          | ширина инвентаря                 |
| `height`     | int                                          | высота инвентаря                 |
| `stackCount` | int                                          | кол-во заполненных ячеек         |
| `items`      | [IItemStack[][]](/Vanilla/Items/IItemStack/) | Предметы в сетке крафта          |
| `itemArray`  | [IItemStack[]](/Vanilla/Items/IItemStack/)   | Предметы в сетке крафта          |

## ZenMethods

Доступны следующие методы:

`` возвращает [](/Vanilla/Items/IItemStack/), находящийся по указанному индексу, в случае его отсутствия-null. Index is an int.  
`inventory.setStack(index, item)` sets the Stack at the given index to the provided item. Индекс имеет тип int, вещь имеет тип IItemStack. Используйте null, если вы хотите очистить стек по этому индексу.

The top left stack is position (0, 0), row and column are ints.  
`inventory.getStack(row, column)` returns the [IItemStack](/Vanilla/Items/IItemStack/) at the given position or null if no item present.  
`inventory.setStack(row, column, item)` sets the stack at the given position to the provided item. Предмет имеет тип IItemStack. Используйте null, если вы хотите очистить стек по этой позиции.  