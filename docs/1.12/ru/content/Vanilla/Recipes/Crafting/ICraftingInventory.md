# ICraftingInventory

ICraftingInventory содержит всю информацию об инвентаре, в котором ведется крафт.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.recipes.ICraftingInventory`

## Геттеры ZenScript

| ZenGetter    | Возвращаемый тип                             | Описание                         |
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

`` возвращает [](/Vanilla/Items/IItemStack/), находящийся по указанному индексу, в случае его отсутствия-null. Индекс имеет тип int. `` задает стак по указанному индексу указанным предметом. Индекс имеет тип int, вещь имеет тип IItemStack. Используйте null, если вы хотите очистить стек по этому индексу.

Верхний левый стак находится на (0, 0), номер строчки и столба имеют тип int. `inventory.getStack(row, column)` возвращает [IItemStack](/Vanilla/Items/IItemStack/) на заданной позиции, или же null, если предмет не задан. `inventory.setStack(row, column, item)` задает стак на данной позиции данным предметом. Предмет имеет тип IItemStack. Используйте null, если вы хотите очистить стек по этой позиции.