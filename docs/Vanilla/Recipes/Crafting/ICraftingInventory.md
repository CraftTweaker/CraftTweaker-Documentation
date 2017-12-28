# ICraftingInventory

The ICraftingInventory contains all kinds of information on the inventory a crafting process is performed in.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import) the class to avoid errors.  
`import crafttweaker.recipes.ICraftingInventory`


## ZenGetters
| ZenGetter    | Return type                      | Description                                          |
|--------------|----------------------------------|------------------------------------------------------|
| `player`     | [IPlayer](/Vanilla/Game/IPlayer) | the player owning this inventory                     |
| `size`       | int                              | the inventory's size                                 |
| `width`      | int                              | the inventory's width                                |
| `height`     | int                              | the inventory's height                               |
| `stackCount` | int                              | the the number of stacks that are actually filled in |

## ZenMethods

Following Methods are available: 

`inventory.getStack(index)` returns the [IItemStack](/Vanilla/Items/IItemStack) at the given index or null if no item present. Index is an int.  
`inventory.setStack(index, item)` sets the Stack at the given index to the provided item. Index is an int, item is an IItemStack. Use null if you want to clear the stack at that index.    

The top left stack is position (0, 0), x and y are ints.  
`inventory.getStack(x, y)` returns the [IItemStack](/Vanilla/Items/IItemStack) at the given position or null if no item present.  
`inventory.setStack(x, y, item)` sets the stack at the given position to the provided item. Item is an IItemStack. Use null if you want to clear the stack at that position.  