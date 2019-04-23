# 使用 IItemDefinition 以节省引用方块实体附加值的时间

## 问题

Let's say we want to remove the recipes of some specific colors of wool.  
White wool has the metadata 0, all colors range from meta 1 to meta 15, so there are 16 in total.

We want to remove the wools with meta 3 to 12. What do we do?  
We can't just remove all of them (in other words, use `<minecraft:wool:*>`), but we also don't want to write 10 times the same thing.  
While in this example this would totally work, in large scale this becomes pretty annoying!

## What do we know/need to know

- recipes.remove requires an [IIngredient](/Vanilla/Variable_Types/IIngredient/) Object
- An [IItemStack](/Vanilla/Items/IItemStack/) can be used as [IIngredient](/Vanilla/Variable_Types/IIngredient/) as [IItemstack](/Vanilla/Items/IItemStack/) extends [IIngredient](/Vanilla/Variable_Types/IIngredient/)
- We can use [IItemDefinitions](/Vanilla/Items/IItemDefinition/) to create [IItemStacks](/Vanilla/Items/IItemStack/)

## Solution

We use [IItemDefinitions](/Vanilla/Items/IItemDefinition/) and an Integer Range and iterate through latter.  
If we can't use an int range we can also use a number array, but that would require you to type in all required numbers.  
You can also use this to Except some items from being used.

    val itemDef = <minecraft:wool>.definition;
    
    //does this for <minecraft:wool:3> to <minecraft:wool:12>
    for i in 3 to 13{
        recipes.remove(itemDef.makeStack(i));
    }
    
    
    val numArray = [3,4,5,6,7,8,9,10,11,12] as int[];
    
    
    //<minecraft:wool:3> to <minecraft:wool:12>
    for i in numArray{
        itemDef.makeStack(i).addTooltip("Un-Craftable");
    }
    
    //<minecraft:wool:3> to <minecraft:wool:12>, but without 5 and 9
    for i in 3 .. 13{
        if(i != 5 & i != 9){
            itemDef.makeStack(i).addShiftTooltip("Help me!");
        }
    }