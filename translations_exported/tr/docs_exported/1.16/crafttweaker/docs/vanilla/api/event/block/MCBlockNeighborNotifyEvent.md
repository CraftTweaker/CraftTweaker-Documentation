# MCBlockNeighborNotifyEvent

Fired when a physics update occurs on a block. This event acts as a way for mods to detect physics updates, in the same way a BUD switch does. This event is only called on the server.

The event is cancelable.

If the event is canceled, vanilla logic won't be executed

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.MCBlockNeighborNotifyEvent;
```


## Extending MCBlockEvent

MCBlockNeighborNotifyEvent extends [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent). That means all methods available in [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent) are also available in MCBlockNeighborNotifyEvent

## Methods

:::group{name=getForceRedstoneUpdate}

Gets if a redstone update was forced during setBlock call

Return Type: boolean

```zenscript
// MCBlockNeighborNotifyEvent.getForceRedstoneUpdate() as boolean

myMCBlockNeighborNotifyEvent.getForceRedstoneUpdate();
```

:::

:::group{name=getNotifiedSides}

Gets a list of directions from the base block that updates will occur upon.

Return Type: stdlib.List&lt;[Direction](/vanilla/api/util/Direction)&gt;

```zenscript
// MCBlockNeighborNotifyEvent.getNotifiedSides() as stdlib.List<Direction>

myMCBlockNeighborNotifyEvent.getNotifiedSides();
```

:::


## Properties

| Name                | Type                                                                    | Has Getter | Has Setter | Description                                                                 |
| ------------------- | ----------------------------------------------------------------------- | ---------- | ---------- | --------------------------------------------------------------------------- |
| forceRedstoneUpdate | boolean                                                                 | true       | false      | Gets if a redstone update was forced during setBlock call                   |
| notifiedSides       | stdlib.List&lt;[Direction](/vanilla/api/util/Direction)&gt; | true       | false      | Gets a list of directions from the base block that updates will occur upon. |

