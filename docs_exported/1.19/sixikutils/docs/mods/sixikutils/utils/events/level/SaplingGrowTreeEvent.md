# SaplingGrowTreeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.misc.SaplingGrowTreeEvent;
```


## Extending LevelEvent

SaplingGrowTreeEvent extends [LevelEvent](/mods/sixikutils/utils/events/level/server/LevelEvent). That means all methods available in [LevelEvent](/mods/sixikutils/utils/events/level/server/LevelEvent) are also available in SaplingGrowTreeEvent

## Methods

:::group{name=getPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// SaplingGrowTreeEvent.getPos() as BlockPos

mySaplingGrowTreeEvent.getPos();
```

:::

:::group{name=getRand}

Return Type: [RandomSource](/vanilla/api/util/math/RandomSource)

```zenscript
// SaplingGrowTreeEvent.getRand() as RandomSource

mySaplingGrowTreeEvent.getRand();
```

:::

:::group{name=getResult}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// SaplingGrowTreeEvent.getResult() as EventResult

mySaplingGrowTreeEvent.getResult();
```

:::

:::group{name=getWorld}

Return Type: [Level](/mods/sixikutils/pmmo/server/world)

```zenscript
// SaplingGrowTreeEvent.getWorld() as Level

mySaplingGrowTreeEvent.getWorld();
```

:::


