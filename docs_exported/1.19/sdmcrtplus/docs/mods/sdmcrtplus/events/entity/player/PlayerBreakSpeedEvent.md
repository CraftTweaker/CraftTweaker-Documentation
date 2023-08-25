# PlayerBreakSpeedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.entity.player.PlayerBreakSpeedEvent;
```


## Extending PlayerEvent

PlayerBreakSpeedEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerBreakSpeedEvent

## Methods

:::group{name=getNewSpeed}

Return Type: float

```zenscript
// PlayerBreakSpeedEvent.getNewSpeed() as float

myPlayerBreakSpeedEvent.getNewSpeed();
```

:::

:::group{name=getOriginalSpeed}

Return Type: float

```zenscript
// PlayerBreakSpeedEvent.getOriginalSpeed() as float

myPlayerBreakSpeedEvent.getOriginalSpeed();
```

:::

:::group{name=getPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// PlayerBreakSpeedEvent.getPosition() as BlockPos

myPlayerBreakSpeedEvent.getPosition();
```

:::

:::group{name=getState}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// PlayerBreakSpeedEvent.getState() as BlockState

myPlayerBreakSpeedEvent.getState();
```

:::

:::group{name=setNewSpeed}

```zenscript
PlayerBreakSpeedEvent.setNewSpeed(speed as float)
```

| Parameter | Type  |
|-----------|-------|
| speed     | float |


:::


## Properties

|     Name      |                    Type                     | Has Getter | Has Setter |
|---------------|---------------------------------------------|------------|------------|
| newSpeed      | float                                       | true       | true       |
| originalSpeed | float                                       | true       | false      |
| pos           | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |
| state         | [BlockState](/vanilla/api/block/BlockState) | true       | false      |

