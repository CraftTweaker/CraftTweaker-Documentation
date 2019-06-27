# Recipe Functions

# IRecipeFunction

Some recipes support custom functions to programmatically determine their output.  
This can be especially useful if you need some of the input item's information, like the damage value.  
This is a so-called IRecipeFunction.

## Example for repairing a pickaxe

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
    }, 
    //We don't need a recipeAction here so just set it to null
    null);
    

## How to set up an IRecipeFunction

As you might have seen in the example above, there is a function with 3 Parameters:  
You don't have to call them this way, they can have any name.

`out` is the recipe's output and an IItemStack object.  
`ins` is a map with the marks as keys and the marked inputs as values.  
`cInfo` is an ICraftingInfo Object

The function must return the IItemStack that the recipe should output.

You can invalidate a recipe by returning `null` so it can't be crafted under certain conditions.

Modifying the `ins` here is a bad idea, this function triggers for each change in the crafting grid, not when actually pulling out the result.

# IRecipeAction

But CraftTweaker goes beyond simply calculating your outputs using functions.  
With an IRecipeAction Function, you can also determine what should happen when a user crafts the item.  
An IRecipeAction object comes after an IRecipeFunction!

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
    

This gives the player who performs the recipe 1 level each time the crafting is completed. Again, we have a function with 3 Parameters:  
`out` is the recipe's output and an IItemStack object.  
`cInfo` is an ICraftingInfo Object  
`player` is the player performing the recipe and an [IPlayer](/Vanilla/Players/IPlayer/) object.