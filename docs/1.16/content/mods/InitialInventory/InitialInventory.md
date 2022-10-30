::requiredMod[Initial Inventory]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/initial-inventory}

# InitialInventory

## Description

This mod adds support for the player to be given an item when they join a world, and then never again, similar to how some mods give players books when they join a world for the first time.

## Package
`mods.initialinventory.InvHandler`

## Adding starting items

This will add an item to the players inventory when they join the world.

NOTES:

The `key` is used to determine if an item should be given. A key can be any string, the point of it is to determine if a player has been given a set of items before.  

It is useful for modpacks which later add more starting items, by using a different key, players who have already started playing the pack, can still receive those items.
An example would be:  
1) Add a diamond as a starting item with key "1", join the world, the player will get the diamond.  
2) Add an apple as a starting item with key "2", join the world, the player will get the apple, but not the diamond again.  
3) Make a new world, the player will receive both an apple and a diamond.  

The `index` is used to set which slot the item will be put into, the default is `-1`, which means it will put it in the first available slot, or combine it with other items that may already be in the inventory.

The `onGiven` function will run whenever the player is given that item, it can be used to randomize the item (like a random chance to have an enchantment), giving a random amount of items or even giving a player a different item based on what biome they spawned in.


## Example

```zenscript
// mods.initialinventory.InvHandler.addStartingItem(String key, IItemStack item, @Optional int index, @Optional BiFunction<IItemStack, MCPLayerEntity, IItemStack> onGiven);

// Gives an Apple when joining a world.
mods.initialinventory.InvHandler.addStartingItem("apples", <item:minecraft:apple>);

// Puts a Golden Apple in the 5th inventory slot, or the next available slot if already full, when joining a world.
mods.initialinventory.InvHandler.addStartingItem("apples", <item:minecraft:golden_apple>, 5);

// Gives between 1 and 6 diamonds when joining a world.
mods.initialinventory.InvHandler.addStartingItem("apples", <item:minecraft:diamond>, -1, (stack as IItemStack, player as MCPlayerEntity) as IItemStack => {
    return stack * (player.world.random.nextInt(6) + 1);
});
```


