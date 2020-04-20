# InitialInventory

## Description

このmodでは、初めてワールドに参加したプレイヤーにアイテムを提供できる機能を追加しています。他の一部のmodにおいて、プレイーが初めてワールドに参加したときに本などを与えるのと同じようなものです。

## Package
`mods.initialinventory.InvHandler`

## Adding starting items

これにより、プレイヤーがワールドに参加した際に、プレイヤーのインベントリにアイテムが追加されます。

The parameters are:


Param: `key`

Type: `String`

Description:

アイテムを与えるかどうかを決定する際に使用します。 キー(key)は任意の文字列に設定することができ、その取っ掛かりというのは、以前にそのプレイヤーにアイテムセットが与えられたかどうかの判定をすることです。

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


