::requiredMod[Initial Inventory]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/initial-inventory}

# 最初内存

## 描述

这个模组增加了对玩家第一次加入世界时获得物品的支持，然后永远不再获得。类似于一些模组在第一次加入世界时给玩家的书籍。

## 所属包
`mods.initialinventory.InvHandler`

## 添加初始物品

将会在玩家加入世界时给予一个物品。

NOTES:

The `key` is used to determine if an item should be given. 键值可以是任何字符串，关键是确定玩家以前是否获得了一组物品。

它对以后通过使用不同的键值添加更多起始项目的模组包很有用， 已经开始玩的玩家仍然可以收到这些物品。 An example would be:  
1) Add a diamond as a starting item with key "1", join the world, the player will get the diamond.  
2) Add an apple as a starting item with key "2", join the world, the player will get the apple, but not the diamond again.  
3) Make a new world, the player will receive both an apple and a diamond.

The `index` is used to set which slot the item will be put into, the default is `-1`, which means it will put it in the first available slot, or combine it with other items that may already be in the inventory.

The `onGiven` function will run whenever the player is given that item, it can be used to randomize the item (like a random chance to have an enchantment), giving a random amount of items or even giving a player a different item based on what biome they spawned in.


## 例子

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


