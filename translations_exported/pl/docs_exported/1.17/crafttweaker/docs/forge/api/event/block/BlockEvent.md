# BlockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.BlockEvent;
```


## Extending Event

BlockEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in BlockEvent

## Methods

:::group{name=getBlockState}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// BlockEvent.getBlockState() as BlockState

myBlockEvent.getBlockState();
```

:::

:::group{name=getPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BlockEvent.getPos() as BlockPos

myBlockEvent.getPos();
```

:::

:::group{name=getWorld}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// BlockEvent.getWorld() as Level

myBlockEvent.getWorld();
```

:::


## Properties

| Name  | Type                                        | Has Getter | Has Setter | Description             |
| ----- | ------------------------------------------- | ---------- | ---------- | ----------------------- |
| pos   | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      | No Description Provided |
| state | [BlockState](/vanilla/api/block/BlockState) | true       | false      | No Description Provided |
| world | [Level](/vanilla/api/world/Level)           | true       | false      | No Description Provided |

