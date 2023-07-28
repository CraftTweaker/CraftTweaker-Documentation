# PlayerInteractEvent

This event is the superclass of all other PlayerInteract events.
 Generally, you want to use the subtypes of this event.

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.interact.PlayerInteractEvent;
```


## Extending PlayerEvent

PlayerInteractEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerInteractEvent

## Properties

|        Name        |                           Type                            | Has Getter | Has Setter |                                                                                                         Description                                                                                                          |
|--------------------|-----------------------------------------------------------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| blockPos           | [BlockPos](/vanilla/api/util/math/BlockPos)               | true       | false      | If the interaction was on an entity, will be a BlockPos centered on the entity. <br />  If the interaction was on a block, will be the position of that block. <br />  Otherwise, will be a BlockPos centered on the player. |
| cancellationResult | [InteractionResult](/vanilla/api/world/InteractionResult) | true       | true       |                                                                                                                                                                                                                              |
| face               | [Direction](/vanilla/api/util/direction/Direction)?       | true       | false      | The face involved in this interaction. <br />  For all non-block interactions, this will return null                                                                                                                         |
| hand               | [InteractionHand](/vanilla/api/util/InteractionHand)      | true       | false      |                                                                                                                                                                                                                              |
| itemStack          | [IItemStack](/vanilla/api/item/IItemStack)                | true       | false      | The stack involved in this interaction. <br />  May be empty, but will never be null.                                                                                                                                        |

