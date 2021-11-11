# MCPlayerInteractEvent

This event is the superclass of all other PlayerInteract events.
 Generally, you want to use the subtypes of this event.

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.interact.MCPlayerInteractEvent;
```


## Extending MCPlayerEvent

MCPlayerInteractEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCPlayerInteractEvent

## Methods

:::group{name=getBlockPos}

If the interaction was on an entity, will be a BlockPos centered on the entity.
 If the interaction was on a block, will be the position of that block.
 Otherwise, will be a BlockPos centered on the player.

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// MCPlayerInteractEvent.getBlockPos() as BlockPos

myMCPlayerInteractEvent.getBlockPos();
```

:::

:::group{name=getCancellationResult}



Returns: The EnumActionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant
 method of the event. By default, this is PASS, meaning cancelled events will cause
 the client to keep trying more interactions until something works.  
Return Type: [ActionResultType](/vanilla/api/util/ActionResultType)

```zenscript
// MCPlayerInteractEvent.getCancellationResult() as ActionResultType

myMCPlayerInteractEvent.getCancellationResult();
```

:::

:::group{name=getFace}

The face involved in this interaction.
 For all non-block interactions, this will return null

Return Type: [Direction](/vanilla/api/util/Direction)?

```zenscript
// MCPlayerInteractEvent.getFace() as Direction?

myMCPlayerInteractEvent.getFace();
```

:::

:::group{name=getHand}

Return Type: [MCHand](/vanilla/api/util/MCHand)

```zenscript
// MCPlayerInteractEvent.getHand() as MCHand

myMCPlayerInteractEvent.getHand();
```

:::

:::group{name=getItemStack}

The stack involved in this interaction.
 May be empty, but will never be null.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCPlayerInteractEvent.getItemStack() as IItemStack

myMCPlayerInteractEvent.getItemStack();
```

:::

:::group{name=setCancellationResult}

Set the EnumActionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant method of the event.

 Note that this only has an effect on RightClickBlockEvent, RightClickItemEvent, EntityInteractEvent.

Return Type: void

```zenscript
MCPlayerInteractEvent.setCancellationResult(result as ActionResultType) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| result | [ActionResultType](/vanilla/api/util/ActionResultType) | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| blockPos | [BlockPos](/vanilla/api/util/BlockPos) | true | false | If the interaction was on an entity, will be a BlockPos centered on the entity. <br />  If the interaction was on a block, will be the position of that block. <br />  Otherwise, will be a BlockPos centered on the player. |
| cancellationResult | [ActionResultType](/vanilla/api/util/ActionResultType) | true | true |  |
| face | [Direction](/vanilla/api/util/Direction)? | true | false | The face involved in this interaction. <br />  For all non-block interactions, this will return null |
| hand | [MCHand](/vanilla/api/util/MCHand) | true | false | No Description Provided |
| itemStack | [IItemStack](/vanilla/api/items/IItemStack) | true | false | The stack involved in this interaction. <br />  May be empty, but will never be null. |

