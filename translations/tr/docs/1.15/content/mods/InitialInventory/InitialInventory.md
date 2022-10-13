# InitialInventory

## Description

This mod adds support for the player to be given an item when they join a world, and then never again, similar to how some mods give players books when they join a world for the first time.

## Package
`mods.initialinventory.InvHandler`

## Adding starting items

This will add an item to the players inventory when they join the world.

The parameters are:


Param: `key`

Type: `String`

Description:

Used to determine if an item should be given. A key can be any string, the point of it is to determine if a player has been given a set of items before.

It is useful for modpacks which later add more starting items, by using a different key, players who have already started playing the pack, can still receive those items. An example would be:

Add a diamond as a starting item with key "1", join the world, the player will get the diamond.

Add an apple as a starting item with key "2", join the world, the player will get the apple, but not the diamond again.

Make a new world, the player will receive both an apple and a diamond.

param: `item`

Type `IItemStack`

Description:

The item to give to the player when they join.

Param: `index`

Type: `int`

Description:

Optional integer to define where the item will be given, can be used to put an item in a inventory slot like an armor slot.

If left out, will default to -1, which means it will put it in the first available slot, or combine it with other items that may already be in the inventory.


## Example

```zenscript
//mods.initialinventory.InvHandler.addStartingItem(String key, IItemStack item, Optional int index);
mods.initialinventory.InvHandler.addStartingItem("apples", <item:minecraft:apple>);
mods.initialinventory.InvHandler.addStartingItem("apples", <item:minecraft:golden_apple>, 5);
```


