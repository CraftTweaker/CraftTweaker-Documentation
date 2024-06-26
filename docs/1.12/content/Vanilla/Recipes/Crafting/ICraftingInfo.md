# ICraftingInfo

The IcraftingInfo object contains all kinds of information on the crafting process itself:  

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.recipes.ICraftingInventory`

## ZenGetters

| ZenGetter     |                                                                     |                                                       |
|---------------|---------------------------------------------------------------------|-------------------------------------------------------|
| `inventory`   | [ICraftingInventory](/Vanilla/Recipes/Crafting/ICraftingInventory/) | The inventory the crafting is performed in            |
| `player`      | [IPlayer](/Vanilla/Players/IPlayer/)                                | The player conducting the crafting                    |
| `dimensionID` | int                                                                 | The dimension ID the crafting process is performed in |
| `world`       | [IWorld](/Vanilla/World/IWorld)                                     | The world the crafting process is performed in        |
