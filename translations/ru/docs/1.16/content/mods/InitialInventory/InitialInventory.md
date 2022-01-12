::requiredMod[Initial Inventory]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/initial-inventory}

# InitialInventory

## Описание

Этот мод добавляет поддержку для игрока, которому дают предмет когда он присоединяется к миру, и никогда больше, аналогично тому, как некоторые моды дают игрокам книги, когда они впервые присоединяются к миру.

## Package
`mods.initialinventory.InvHandler`

## Добавление стартовых предметов

Это добавит предмет в инвентарь игроков, когда они присоединятся к миру.

NOTES:

The `key` is used to determine if an item should be given. key может быть любым string, смысл его заключается в том, чтобы определить, был ли игроку дан набор предметов ранее.

Это полезно для модпаков, которые позже добавляют больше стартовых предметов, используя другой ключ, игроки которые уже начали играть c модпаком, всё ещё могут получить эти предметы. An example would be:  
1) Add a diamond as a starting item with key "1", join the world, the player will get the diamond.  
2) Add an apple as a starting item with key "2", join the world, the player will get the apple, but not the diamond again.  
3) Make a new world, the player will receive both an apple and a diamond.

The `index` is used to set which slot the item will be put into, the default is `-1`, which means it will put it in the first available slot, or combine it with other items that may already be in the inventory.

The `onGiven` function will run whenever the player is given that item, it can be used to randomize the item (like a random chance to have an enchantment), giving a random amount of items or even giving a player a different item based on what biome they spawned in.


## Пример

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


