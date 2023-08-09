# SleepFinishedTimeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.world.level.SleepFinishedTimeEvent;
```


## Extending LevelEvent

SleepFinishedTimeEvent extends [LevelEvent](/mods/sixikutils/utils/events/level/server/LevelEvent). That means all methods available in [LevelEvent](/mods/sixikutils/utils/events/level/server/LevelEvent) are also available in SleepFinishedTimeEvent

## Methods

:::group{name=getNewTime}

Return Type: long

```zenscript
// SleepFinishedTimeEvent.getNewTime() as long

mySleepFinishedTimeEvent.getNewTime();
```

:::

:::group{name=setTimeAddition}

Return Type: boolean

```zenscript
SleepFinishedTimeEvent.setTimeAddition(l as long) as boolean
```

| Parameter | Type |
|-----------|------|
| l         | long |


:::


