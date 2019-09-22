# ICraftingInfo

Объект ICraftingInfo содержит все виды информации о процессе крафта.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.recipes.ICraftingInventory`

## Геттеры

| Геттер      |                                                                     |                                        |
| ----------- | ------------------------------------------------------------------- | -------------------------------------- |
| `inventory` | [ICraftingInventory](/Vanilla/Recipes/Crafting/ICraftingInventory/) | Инвентарь, в котором происходит крафт  |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer/)                                | Игрок, проводящий крафт                |
| `dimension` | int                                                                 | Измерение, в котором совершается крафт |