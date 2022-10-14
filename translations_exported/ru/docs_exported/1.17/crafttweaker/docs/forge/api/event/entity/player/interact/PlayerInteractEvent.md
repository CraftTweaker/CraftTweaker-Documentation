# PlayerInteractEvent

This event is the superclass of all other PlayerInteract events. Generally, you want to use the subtypes of this event.

The event is not cancelable.

The event does not have a result.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.interact.PlayerInteractEvent;
```


## Extending PlayerEvent

PlayerInteractEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerInteractEvent

## Методы

:::group{name=getBlockPos}

If the interaction was on an entity, will be a BlockPos centered on the entity. If the interaction was on a block, will be the position of that block. Otherwise, will be a BlockPos centered on the player.

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// PlayerInteractEvent.getBlockPos() as BlockPos

myPlayerInteractEvent.getBlockPos();
```

:::

:::group{name=getCancellationResult}



Returns: The EnumActionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant method of the event. By default, this is PASS, meaning cancelled events will cause the client to keep trying more interactions until something works.  
Return Type: [InteractionResult](/vanilla/api/world/InteractionResult)

```zenscript
// PlayerInteractEvent.getCancellationResult() as InteractionResult

myPlayerInteractEvent.getCancellationResult();
```

:::

:::group{name=getFace}

The face involved in this interaction. For all non-block interactions, this will return null

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// PlayerInteractEvent.getFace() as Direction

myPlayerInteractEvent.getFace();
```

:::

:::group{name=getHand}

Return Type: [InteractionHand](/vanilla/api/util/InteractionHand)

```zenscript
// PlayerInteractEvent.getHand() as InteractionHand

myPlayerInteractEvent.getHand();
```

:::

:::group{name=getItemStack}

The stack involved in this interaction. May be empty, but will never be null.

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// PlayerInteractEvent.getItemStack() as IItemStack

myPlayerInteractEvent.getItemStack();
```

:::

:::group{name=setCancellationResult}

Set the EnumActionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant method of the event.

 Note that this only has an effect on RightClickBlockEvent, RightClickItemEvent, EntityInteractEvent.

Return Type: void

```zenscript
PlayerInteractEvent.setCancellationResult(result as InteractionResult) as void
```

| Параметр | Тип                                                       | Описание                |
| -------- | --------------------------------------------------------- | ----------------------- |
| result   | [InteractionResult](/vanilla/api/world/InteractionResult) | No Description Provided |


:::


## Свойства

| Название           | Тип                                                       | Имеет Getter | Имеет Setter | Описание                                                                                                                                                                                                                                 |
| ------------------ | --------------------------------------------------------- | ------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blockPos           | [BlockPos](/vanilla/api/util/math/BlockPos)               | true         | false        | If the interaction was on an entity, will be a BlockPos centered on the entity. <br />  If the interaction was on a block, will be the position of that block. <br />  Otherwise, will be a BlockPos centered on the player. |
| cancellationResult | [InteractionResult](/vanilla/api/world/InteractionResult) | true         | true         |                                                                                                                                                                                                                                          |
| face               | [Direction](/vanilla/api/util/direction/Direction)        | true         | false        | The face involved in this interaction. <br />  For all non-block interactions, this will return null                                                                                                                               |
| hand               | [InteractionHand](/vanilla/api/util/InteractionHand)      | true         | false        | No Description Provided                                                                                                                                                                                                                  |
| элемент Стек       | [IItemStack](/vanilla/api/item/IItemStack)                | true         | false        | The stack involved in this interaction. <br />  May be empty, but will never be null.                                                                                                                                              |

