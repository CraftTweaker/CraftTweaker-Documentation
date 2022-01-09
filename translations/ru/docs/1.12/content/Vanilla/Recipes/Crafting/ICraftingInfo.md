# ICraftingInfo

Объект ICraftingInfo содержит все виды информации о процессе крафта.

## Импорт класса
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.recipes.ICraftingInventory`

## ZenGetters

| ZenGetter   |                                                                     |                                        |
| ----------- | ------------------------------------------------------------------- | -------------------------------------- |
| `inventory` | [ICraftingInventory](/Vanilla/Recipes/Crafting/ICraftingInventory/) | Инвентарь, в котором происходит крафт  |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer/)                                | Игрок, проводящий крафт                |
| `dimension` | int                                                                 | Измерение, в котором совершается крафт |