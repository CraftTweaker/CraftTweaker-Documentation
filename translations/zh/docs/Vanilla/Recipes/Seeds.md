# Seeds

Seeds are things you get from punching tall grass.

## Print all seeds to the log

This command will print all registered seeds to the log.

Needs to be performed by a player or console, cannot be written in a zs-file.

    1.12
    /ct seeds
    
    pre-1.12
    /mt seeds
    

## Add a seed drop

Adds `item` as seed drop.  
**Weights are relative to grass seed, which has a weight of 10 (≙ 1000%)!**

    vanilla.seeds.addSeed(item);
    

`item` is a [weightedItemStack](/Vanilla/Items/WeightedItemStack/). What does that mean? It simply means that you need to give it a percentage like this:

    //adds carrots with a weight of 1
    vanilla.seeds.addSeed(<minecraft:carrot> % 100);
    

## Remove a seed drop

Stops `item` from being a seed drop.

    vanilla.seeds.removeSeed(item);
    

`item` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/).

## Retrieve all registered Seeds

Returns all items as a [weightedItemStack](/Vanilla/Items/WeightedItemStack/) List.

    val seedList = vanilla.seeds.seeds;
    
    for item in seedList {
        print("Item: " ~ item.stack.displayName ~ " || Chance: " ~ item.percent ~ "%");
    }