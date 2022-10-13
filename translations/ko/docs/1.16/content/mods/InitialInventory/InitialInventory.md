::requiredMod[Initial Inventory]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/initial-inventory}

# InitialInventory

## Description

이 모드는 플레이어가 처음 세계에 참여할 때 단 한 번 아이템을 받도록 해 줍니다. 일부 모드에서 플레이어가 세계에 처음 참여할 때 책을 주는 것과 유사합니다.

## Package
`mods.initialinventory.InvHandler`

## 시작 아이템 추가

플레이어가 세계에 합류할 때 인벤토리에 아이템이 추가됩니다.

NOTES:

The `key` is used to determine if an item should be given. key에는 모든 문자열이 들어갈 수 있으며, 이는 이전에 같은 아이템들을 받았는지 확인하는 데 쓰입니다.

모드팩에서 추후에 시작 아이템을 추가하는 경우 유용합니다. 다른 키를 사용하여, 이미 처음 시작 아이템을 받은 사람에게도 해당 아이템을 줄 수 있습니다. An example would be:  
1) Add a diamond as a starting item with key "1", join the world, the player will get the diamond.  
2) Add an apple as a starting item with key "2", join the world, the player will get the apple, but not the diamond again.  
3) Make a new world, the player will receive both an apple and a diamond.

The `index` is used to set which slot the item will be put into, the default is `-1`, which means it will put it in the first available slot, or combine it with other items that may already be in the inventory.

The `onGiven` function will run whenever the player is given that item, it can be used to randomize the item (like a random chance to have an enchantment), giving a random amount of items or even giving a player a different item based on what biome they spawned in.


## 예제

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


