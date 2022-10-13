# BlockNeighborNotifyEvent

Fired when a physics update occurs on a block. This event acts as a way for mods to detect physics updates, in the same way a BUD switch does. This event is only called on the server.

The event is cancelable.

If the event is canceled, vanilla logic won't be executed

The event does not have a result.



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.BlockNeighborNotifyEvent;
```


## Extending BlockEvent

BlockNeighborNotifyEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in BlockNeighborNotifyEvent

## Методы

:::group{name=getForceRedstoneUpdate}

Gets if a redstone update was forced during setBlock call

Return Type: boolean

```zenscript
// BlockNeighborNotifyEvent.getForceRedstoneUpdate() as boolean

myBlockNeighborNotifyEvent.getForceRedstoneUpdate();
```

:::

:::group{name=getNotifiedSides}

Gets a list of directions from the base block that updates will occur upon.

Return Type: Set&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;

```zenscript
// BlockNeighborNotifyEvent.getNotifiedSides() as Set<Direction>

myBlockNeighborNotifyEvent.getNotifiedSides();
```

:::


## Свойства

| Название            | Тип                                                                       | Имеет Getter | Имеет Setter | Описание                                                                    |
| ------------------- | ------------------------------------------------------------------------- | ------------ | ------------ | --------------------------------------------------------------------------- |
| forceRedstoneUpdate | boolean                                                                   | true         | false        | Gets if a redstone update was forced during setBlock call                   |
| notifiedSides       | Set&lt;[Direction](/vanilla/api/util/direction/Direction)&gt; | true         | false        | Gets a list of directions from the base block that updates will occur upon. |

