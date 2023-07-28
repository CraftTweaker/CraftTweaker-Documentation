# PlayerTickEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.tick.PlayerTickEvent;
```


## Extending TickEvent

PlayerTickEvent extends [TickEvent](/forge/api/event/tick/TickEvent). That means all methods available in [TickEvent](/forge/api/event/tick/TickEvent) are also available in PlayerTickEvent

## Methods

:::group{name=every}

```zenscript
PlayerTickEvent.every(ticks as int, event as Consumer<PlayerTickEvent>)
```

| Parameter |                                   Type                                   |
|-----------|--------------------------------------------------------------------------|
| ticks     | int                                                                      |
| event     | Consumer&lt;[PlayerTickEvent](/forge/api/event/tick/PlayerTickEvent)&gt; |


:::


## Properties

|  Name  |                       Type                       | Has Getter | Has Setter |
|--------|--------------------------------------------------|------------|------------|
| player | [Player](/vanilla/api/entity/type/player/Player) | true       | false      |

