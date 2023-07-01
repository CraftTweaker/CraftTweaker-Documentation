# InvHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.initialinventory.InvHandler;
```


## Static Methods

:::group{name=addRespawnItem}

Adds an item to the player's inventory when they respawn after dying. <br />  <br />  The slotIndex is where in the inventory the item will go. <br />  By default, the slotIndex will be `-1`, which means that it will try and fill an existing slot with the item, but if the player doesn't have the item, or if there is an overflow of items (if the player has 63 Diamonds and then receives 4 diamonds), <br />  then the item is put into the first empty slot in the player's inventory, or spawned in the world around the player. <br />  <br />  For example, if slot 0 was empty, and slot 1 had a Diamond, and the player then received a Diamond with an index of `-1`, it will go into slot 1, filling the already existing stack, however, if slot 1 already had 64 diamonds, then it will go into slot 0. <br />  <br />  The onGiven function is used to alter an item before it is given to a player, it can be used to add a level of randomization to the given items, you can change any aspect of the item (like count or Data) and you will have access to a random source through the world you can get from the player.

```zenscript
// InvHandler.addRespawnItem(item as crafttweaker.api.item.IItemStack, slotIndex as int, onGiven as BiFunction)

InvHandler.addRespawnItem(<item:minecraft:diamond_sword>, 2, (stack as IItemStack, player as Player) as IItemStack => {
     return stack.withDisplayName(new crafttweaker.api.text.TranslatableComponent("%s's sword", [player.name]));
 });
```

| Parameter |               Type               |                            Description                            | Optional |                                                                 Default Value                                                                  |
|-----------|----------------------------------|-------------------------------------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------|
| item      | crafttweaker.api.item.IItemStack | The item to give to the player on initial join                    | false    |                                                                                                                                                |
| slotIndex | int                              | The slot to put the item into, or `-1`                            | true     | -1                                                                                                                                             |
| onGiven   | BiFunction                       | The function to modify the item before it is given to the player. | true     | (stack as crafttweaker.api.item.IItemStack, player as crafttweaker.api.entity.type.player.Player) as crafttweaker.api.item.IItemStack => stack |


:::

:::group{name=addStartingItem}

Adds an item to the player's inventory when they join a world. <br />  <br />  The key is used as a flag that tracks if the player has previously received the item. This flag is used to prevent players from receiving duplicate items by joining the game multiple times. <br />  Multiple items may share the same key however it is recommended to give each item a unique key or to group keys based on the pack version. <br />  <br />  Following these recommendations will ensure that existing players from a previous version of the pack will still receive new items when updating the pack. <br />  <br />  For example if version 1.0.0 of your pack gives the player a stick and an apple you could give both items the key "1.0.0". <br />  Then if you later add a new item like a stone pickaxe in version 1.0.1 of your pack you would give it the key "1.0.1". <br />  This will ensure that players who have already played 1.0.0 will receive the stone pickaxe when updating to 1.0.8. <br />  <br />  The slotIndex is where in the inventory the item will go. <br />  By default, the slotIndex will be `-1`, which means that it will try and fill an existing slot with the item, but if the player doesn't have the item, or if there is an overflow of items (if the player has 63 Diamonds and then receives 4 diamonds), <br />  then the item is put into the first empty slot in the player's inventory, or spawned in the world around the player. <br />  <br />  For example, if slot 0 was empty, and slot 1 had a Diamond, and the player then received a Diamond with an index of `-1`, it will go into slot 1, filling the already existing stack, however, if slot 1 already had 64 diamonds, then it will go into slot 0. <br />  <br />  The onGiven function is used to alter an item before it is given to a player, it can be used to add a level of randomization to the given items, you can change any aspect of the item (like count or Data) and you will have access to a random source through the world you can get from the player.

```zenscript
// InvHandler.addStartingItem(key as string, item as crafttweaker.api.item.IItemStack, slotIndex as int, onGiven as BiFunction)

InvHandler.addStartingItem("one", <item:minecraft:diamond_sword>, 2, (stack as crafttweaker.api.item.IItemStack, player as crafttweaker.api.entity.type.player.Player) as crafttweaker.api.item.IItemStack => {
      return stack * (player.level.random.nextInt(6) + 1);
 });
```

| Parameter |               Type               |                               Description                               | Optional |                                                                 Default Value                                                                  |
|-----------|----------------------------------|-------------------------------------------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------|
| key       | string                           | The key used to determine if the player has already received this item. | false    |                                                                                                                                                |
| item      | crafttweaker.api.item.IItemStack | The item to give to the player on initial join                          | false    |                                                                                                                                                |
| slotIndex | int                              | The slot to put the item into, or `-1`                                  | true     | -1                                                                                                                                             |
| onGiven   | BiFunction                       | The function to modify the item before it is given to the player.       | true     | (stack as crafttweaker.api.item.IItemStack, player as crafttweaker.api.entity.type.player.Player) as crafttweaker.api.item.IItemStack => stack |


:::

