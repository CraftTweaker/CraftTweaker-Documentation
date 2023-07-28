# SalvageEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.pmmo.api.events.projecrtmmo.SalvageEvent;
```


## Extending PlayerEvent

SalvageEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in SalvageEvent

## Methods

:::group{name=getBlockPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// SalvageEvent.getBlockPos() as BlockPos

mySalvageEvent.getBlockPos();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// SalvageEvent.getPlayer() as Player

mySalvageEvent.getPlayer();
```

:::

:::group{name=getResult}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// SalvageEvent.getResult() as EventResult

mySalvageEvent.getResult();
```

:::

:::group{name=setCanceled}

```zenscript
SalvageEvent.setCanceled(bool as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| bool      | boolean |


:::


## Properties

|  Name  |                      Type                       | Has Getter | Has Setter |
|--------|-------------------------------------------------|------------|------------|
| player | [Player](/mods/sixikutils/curios/player/Player) | true       | false      |
| pos    | [BlockPos](/vanilla/api/util/math/BlockPos)     | true       | false      |

