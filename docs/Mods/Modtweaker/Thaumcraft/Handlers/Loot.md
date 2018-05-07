# Loot Bags

This package allows you to add and remove items to/from the Loot Bags.

## Importing the package

You can [import](/Vanilla/Advanced_Functionality/Import) the package and its methods to facilitate the retrival of the methods.  
```
import mods.thaumcraft.LootBag;
```

## Loot types
You need to provide an array of one or multiple numbers from 0 to 2 (inclusive) to the functions.  
Those determine the type of lootbag to be affected.  

- 0: Common
- 1: Uncommon
- 2: Rare

## Adding items

Notice: Gold coins have a value of 2000, diamonds are 50.

```
//mods.thaumcraft.LootBag.addLoot(WeightedItemStack stack, int[] bagTypes)
mods.thaumcraft.LootBag.addLoot(<minecraft:dirt>%20000, [0,1,2]);
```


## Removing items

```
//mods.thaumcraft.LootBag.removeLoot(IItemStack stack, int[] bagTypes);
mods.thaumcraft.LootBag.removeLoot(<minecraft:gold_nugget>, [1,2]);
```