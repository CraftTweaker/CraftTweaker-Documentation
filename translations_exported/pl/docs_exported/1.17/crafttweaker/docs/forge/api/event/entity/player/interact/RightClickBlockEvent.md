# RightClickBlockEvent

This event is fired on both sides whenever the player right clicks while targeting a block. This event controls which of Item.onItemUseFirst, Block.onBlockActivated, and Item.onItemUse will be called.

The event is cancelable.

If the event is canceled, will cause none of the above three to be called.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.interact.RightClickBlockEvent;
```


## Extending PlayerInteractEvent

RightClickBlockEvent extends [PlayerInteractEvent](/forge/api/event/entity/player/interact/PlayerInteractEvent). That means all methods available in [PlayerInteractEvent](/forge/api/event/entity/player/interact/PlayerInteractEvent) are also available in RightClickBlockEvent

## Methods

:::group{name=getFace}

The face of the block that was clicked Unlike in [PlayerInteractEvent](/forge/api/event/entity/player/interact/PlayerInteractEvent) this is known not to be null

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// RightClickBlockEvent.getFace() as Direction

myRightClickBlockEvent.getFace();
```

:::

:::group{name=getHitVec}

Return Type: [BlockHitResult](/vanilla/api/util/BlockHitResult)

```zenscript
// RightClickBlockEvent.getHitVec() as BlockHitResult

myRightClickBlockEvent.getHitVec();
```

:::

:::group{name=getUseBlock}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// RightClickBlockEvent.getUseBlock() as EventResult

myRightClickBlockEvent.getUseBlock();
```

:::

:::group{name=getUseItem}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// RightClickBlockEvent.getUseItem() as EventResult

myRightClickBlockEvent.getUseItem();
```

:::

:::group{name=setUseBlock}

Return Type: void

```zenscript
RightClickBlockEvent.setUseBlock(triggerBlock as EventResult) as void
```

| Parameter    | Type                                        | Description             |
| ------------ | ------------------------------------------- | ----------------------- |
| triggerBlock | [EventResult](/forge/api/event/EventResult) | No Description Provided |


:::

:::group{name=setUseItem}

Return Type: void

```zenscript
RightClickBlockEvent.setUseItem(triggerItem as EventResult) as void
```

| Parameter   | Type                                        | Description             |
| ----------- | ------------------------------------------- | ----------------------- |
| triggerItem | [EventResult](/forge/api/event/EventResult) | No Description Provided |


:::


## Properties

| Name     | Type                                               | Has Getter | Has Setter | Description                                                                                                                                                                    |
| -------- | -------------------------------------------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| face     | [Direction](/vanilla/api/util/direction/Direction) | true       | false      | The face of the block that was clicked <br />  Unlike in [PlayerInteractEvent](/forge/api/event/entity/player/interact/PlayerInteractEvent) this is known not to be null |
| hitVec   | [BlockHitResult](/vanilla/api/util/BlockHitResult) | true       | false      | No Description Provided                                                                                                                                                        |
| useBlock | [EventResult](/forge/api/event/EventResult)        | true       | true       | No Description Provided                                                                                                                                                        |
| useItem  | [EventResult](/forge/api/event/EventResult)        | true       | true       | No Description Provided                                                                                                                                                        |

