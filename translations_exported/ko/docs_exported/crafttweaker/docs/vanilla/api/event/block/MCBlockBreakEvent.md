# MCBlockBreakEvent



The event is cancelable.

If the event is canceled, prevents the block from being broken.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.MCBlockBreakEvent;
```


## Extending MCBlockEvent

MCBlockBreakEvent extends [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent). That means all methods available in [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent) are also available in MCBlockBreakEvent

## Methods

### getExpToDrop

Return Type: int

```zenscript
MCBlockBreakEvent.getExpToDrop() as int
myMCBlockBreakEvent.getExpToDrop();
```

### getPlayer

Gets the player who broke the block. If no player is available, use a fake player

Return Type: [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)

```zenscript
MCBlockBreakEvent.getPlayer() as MCPlayerEntity
myMCBlockBreakEvent.getPlayer();
```

### setExpToDrop

Return Type: void

```zenscript
MCBlockBreakEvent.setExpToDrop(amount as int) as void
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| amount    | int  | No Description Provided |



## Properties

| 이름        | Type                                                 | Has Getter | Has Setter |
| --------- | ---------------------------------------------------- | ---------- | ---------- |
| expToDrop | int                                                  | true       | true       |
| player    | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | true       | false      |

