# MCPlayerInteractEvent

This event is the superclass of all other PlayerInteract events. Generally, you want to use the subtypes of this event.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.interact.MCPlayerInteractEvent;
```


## Extending MCPlayerEvent

MCPlayerInteractEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCPlayerInteractEvent

## Methods

### getBlockPos

If the interaction was on an entity, will be a BlockPos centered on the entity. If the interaction was on a block, will be the position of that block. Otherwise, will be a BlockPos centered on the player.

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
MCPlayerInteractEvent.getBlockPos() as BlockPos
myMCPlayerInteractEvent.getBlockPos();
```

### getFace

The face involved in this interaction. For all non-block interactions, this will return null

Return Type: [Direction](/vanilla/api/util/Direction)

```zenscript
MCPlayerInteractEvent.getFace() as Direction
myMCPlayerInteractEvent.getFace();
```

### getItemStack

The stack involved in this interaction. May be empty, but will never be null.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCPlayerInteractEvent.getItemStack() as IItemStack
myMCPlayerInteractEvent.getItemStack();
```


## Properties

| Name            | Type                                        | Has Getter | Has Setter |
| --------------- | ------------------------------------------- | ---------- | ---------- |
| blockPos        | [BlockPos](/vanilla/api/util/BlockPos)      | true       | false      |
| face            | [Direction](/vanilla/api/util/Direction)    | true       | false      |
| pila de objetos | [IItemStack](/vanilla/api/items/IItemStack) | true       | false      |

