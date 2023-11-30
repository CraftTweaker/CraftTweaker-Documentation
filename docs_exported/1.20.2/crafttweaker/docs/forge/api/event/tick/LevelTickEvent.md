# LevelTickEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.tick.LevelTickEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.tick.LevelTickEvent>(event => {
    println("LevelTickEvent ran!");
});
```


## Supertype

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

