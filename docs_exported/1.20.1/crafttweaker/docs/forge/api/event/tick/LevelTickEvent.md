# LevelTickEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.tick.LevelTickEvent;
```


## Extending TickEvent

LevelTickEvent extends [TickEvent](/forge/api/event/tick/TickEvent). That means all methods available in [TickEvent](/forge/api/event/tick/TickEvent) are also available in LevelTickEvent

## Methods

:::group{name=every}

```zenscript
LevelTickEvent.every(ticks as int, event as Consumer<LevelTickEvent>)
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| ticks     | int                                                                    |
| event     | Consumer&lt;[LevelTickEvent](/forge/api/event/tick/LevelTickEvent)&gt; |


:::


## Properties

|  Name   |               Type                | Has Getter | Has Setter |
|---------|-----------------------------------|------------|------------|
| hasTime | boolean                           | true       | false      |
| level   | [Level](/vanilla/api/world/Level) | true       | false      |

