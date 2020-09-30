# 最初内存

## 描述

这个模组增加了对玩家第一次加入世界时获得物品的支持，然后永远不再获得。类似于一些模组在第一次加入世界时给玩家的书籍。

## 所属包
`mods.initialinventory.InvHandler`

## 添加初始物品

将会在玩家加入世界时给予一个物品。

参数是：


参数：`key`

类型：`String`

说明：

用于确定是否应该给予一个物品。 键值可以是任何字符串，关键是确定玩家以前是否获得了一组物品。

它对以后通过使用不同的键值添加更多起始项目的模组包很有用， 已经开始玩的玩家仍然可以收到这些物品。 一个例子是：

Add a diamond as a starting item with key "1", join the world, the player will get the diamond.

Add an apple as a starting item with key "2", join the world, the player will get the apple, but not the diamond again.

Make a new world, the player will receive both an apple and a diamond.

param: `item`

Type `IItemStack`

描述：

The item to give to the player when they join.

Param: `index`

Type: `int`

描述：

Optional integer to define where the item will be given, can be used to put an item in a inventory slot like an armor slot.

If left out, will default to -1, which means it will put it in the first available slot, or combine it with other items that may already be in the inventory.


## 例子

```zenscript
//mods.initialinventory.InvHandler.addStartingItem(String key, IItemStack item, Optional int index);
mods.initialinventory.InvHandler.addStartingItem("apples", <item:minecraft:apple>);
mods.initialinventory.InvHandler.addStartingItem("apples", <item:minecraft:golden_apple>, 5);
```


