# ICraftingInfo

Объект ICraftingInfo содержит все виды информации о процессе крафта.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.recipes.ICraftingInventory`

## Геттеры

| ZenGetter   |                                                                     |                                                    |
| ----------- | ------------------------------------------------------------------- | -------------------------------------------------- |
| `inventory` | [ICraftingInventory](/Vanilla/Recipes/Crafting/ICraftingInventory/) | The inventory the crafting is performed in         |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer/)                                | The player conducting the crafting                 |
| `dimension` | int                                                                 | The dimension the crafting process is performed in |