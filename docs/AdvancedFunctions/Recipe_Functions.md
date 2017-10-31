# Recipe Functions


# IRecipeFunction
Some recipes support custom functions to programmatically determine their output.  
This can be especially useful if you need some of the input item's information, like the damage value.  
This is a so-called IRecipeFunction.

## Example for repairing a pickaxe

```
val diaPick = <minecraft:diamond_pickaxe>;

//we start normal, by writing the output
recipes.addShapeless("pickrepair",diaPick,

//followed by the input array. One change though - we mark the diamond pickaxe, so we can use it in the function later
[diaPick.anyDamage().marked("mark"),<minecraft:diamond>],

//now we start declaring the function. 
//It needs 3 parameters, one for the output, one for the inputs and one for crafting info. 
//We'll only need the input parameter, though.
function(out, ins, cInfo){
	
	//now we return the pickaxe with either 0 DMG or Current damage -10, whatever is higher. This is to prevent negative damage values.
	return ins.mark.withDamage(max(0,ins.mark.damage - 10));
});
```

## How to set up an IRecipeFunction

As you might have seen in the example above, there is a function with 3 Parameters:  
You don't have to call them this way, they can have any name.

`out` is the recipe's output and an IItemStack object.  
`ins` is a map with the marks as keys and the marked inputs as values.  
`cInfo` is an ICraftingInfo Object

# IRecipeAction

But CraftTweaker goes beyond simply calculating your outputs using functions.  
With an IRecipeAction Function, you can also determine what should happen when a user crafts the item.  
An IRecipeAction object comes after an IRecipeFunction!

```
val stone = <minecraft:stone>;

recipes.addShapeless("experiencestone",stone,[stone,stone,stone,stone],
//IrecipeFunction, just return the output, it doesn't interest us this time.
function(out,ins,cInfo){
	return out;
},
//IRecipeAction
function(out,cInfo,player){
	player.xp += 1;
});
```

This gives the player who performs the recipe 1 level each time the crafting is completed.
Again, we have a function with 3 Parameters:  
`out` is the recipe's output and an IItemStack object.  
`cInfo` is an ICraftingInfo Object  
`player` is the player performing the recipe and an IPlayer object.


# ICraftingInfo

The IcraftingInfo object contains all kinds of information on the crafting process itself:  
`cInfo.inventory` returns the inventory the crafting is performed in as an ICraftingInventory Object  
`cInfo.player` returns the player conducting the crafting as an IPlayer object  
`cInfo.dimension` returns the dimension the crafting process is performed in as an IDimension object

# IDimension

The IDimension object contains information on a Dimension within the game, in this case the dimension the crafting is performed in.

`dimension.isDay` returns if it is currently day or not in the dimension as bool.  
`dimension.getBrightness(x,y,z)` returns the brightness at the given location as int. X,y and z are ints.  


# ICraftingInventory

The ICraftingInventory contains all kinds of information on the inventory a crafting process is performed in.

`inventory.player` returns the player owning this inventory as IPlayer.  
`inventory.size` returns the inventory's size as int.  
`inventory.width` returns the inventory's width as int.  
`inventory.height` returns the inventory's height as int.  
`inventory.stackCount` returns the the number of stacks that are actually filled in as int.

`inventory.getStack(index)` returns the stack at the given index as IItemStack or null if no item present. Index is an int.  
`inventory.setStack(index, item)` sets the Stack at the given index to the provided item. Index is an int, item is an IItemStack. Use null if you want to clear the stack at that index.    

The top left stack is position (0, 0), x and y are ints.  
`inventory.getStack(x, y)` returns the stack at the given position as IItemStack or null if no item present.  
`inventory.setStack(x, y, item)` sets the stack at the given position to the provided item. Item is an IItemStack. Use null if you want to clear the stack at that position.  