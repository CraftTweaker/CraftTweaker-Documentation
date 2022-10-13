# MCRightClickBlock

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickBlock
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickBlock(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickBlock>);
```
| Parameter | Type                                                                                                                                                                    | Description             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickBlock](/vanilla/api/event/entity/player/PlayerInteractEvent/MCRightClickBlock)> | No description provided |



## Methods
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCRightClickBlock.getEntityPlayer();
```

### getFace

Returns: `The face involved in this interaction. For all non-block interactions, this will return null.`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCRightClickBlock.getFace();
```

### getItemStack

Returns: `The itemstack involved in this interaction, {` @code ItemStack.EMPTY} if the hand was empty.

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCRightClickBlock.getItemStack();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCRightClickBlock.getPlayer();
```

### getPos

If the interaction was on an entity, will be a BlockPos centered on the entity. If the interaction was on a block, will be the position of that block. Otherwise, will be a BlockPos centered on the player. Will never be null. Returns: `The position involved in this interaction.`

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCRightClickBlock.getPos();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCRightClickBlock.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCRightClickBlock.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCRightClickBlock.isCanceled();
```

### setCanceled

```zenscript
myMCRightClickBlock.setCanceled(canceled as boolean);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| canceled  | boolean | No description provided |



