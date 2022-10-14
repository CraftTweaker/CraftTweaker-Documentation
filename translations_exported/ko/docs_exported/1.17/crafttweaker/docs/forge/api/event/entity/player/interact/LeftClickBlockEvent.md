# LeftClickBlockEvent

This event is fired when a player left clicks while targeting a block. This event controls which of [Block](/vanilla/api/block/Block)#attack(BlockState, Level, BlockPos, Player) and/or the item harvesting methods will be called.

 Note that if the event is canceled and the player holds down left mouse, the event will continue to fire. This is due to how vanilla calls the left click handler methods.

 Also note that creative mode directly breaks the block without running any other logic.

The event is cancelable.

If the event is canceled, none of the above noted methods to be called.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.interact.LeftClickBlockEvent;
```


## Extending PlayerInteractEvent

LeftClickBlockEvent extends [PlayerInteractEvent](/forge/api/event/entity/player/interact/PlayerInteractEvent). That means all methods available in [PlayerInteractEvent](/forge/api/event/entity/player/interact/PlayerInteractEvent) are also available in LeftClickBlockEvent

## Methods

:::group{name=getUseBlock}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// LeftClickBlockEvent.getUseBlock() as EventResult

myLeftClickBlockEvent.getUseBlock();
```

:::

:::group{name=getUseItem}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// LeftClickBlockEvent.getUseItem() as EventResult

myLeftClickBlockEvent.getUseItem();
```

:::

:::group{name=setUseBlock}

Return Type: void

```zenscript
LeftClickBlockEvent.setUseBlock(triggerBlock as EventResult) as void
```

| Parameter    | Type                                        | Description             |
| ------------ | ------------------------------------------- | ----------------------- |
| triggerBlock | [EventResult](/forge/api/event/EventResult) | No Description Provided |


:::

:::group{name=setUseItem}

Return Type: void

```zenscript
LeftClickBlockEvent.setUseItem(triggerItem as EventResult) as void
```

| Parameter   | Type                                        | Description             |
| ----------- | ------------------------------------------- | ----------------------- |
| triggerItem | [EventResult](/forge/api/event/EventResult) | No Description Provided |


:::


## Properties

| 이름       | Type                                        | Has Getter | Has Setter | Description             |
| -------- | ------------------------------------------- | ---------- | ---------- | ----------------------- |
| useBlock | [EventResult](/forge/api/event/EventResult) | true       | true       | No Description Provided |
| useItem  | [EventResult](/forge/api/event/EventResult) | true       | true       | No Description Provided |

