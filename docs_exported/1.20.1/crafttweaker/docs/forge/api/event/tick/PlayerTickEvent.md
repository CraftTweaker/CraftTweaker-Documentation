# PlayerTickEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.tick.PlayerTickEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.tick.PlayerTickEvent>(event => {
    println("PlayerTickEvent ran!");
});
```


## Supertype

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

