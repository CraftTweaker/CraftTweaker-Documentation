# CriticalHitEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.player.CriticalHitEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.player.CriticalHitEvent>(event => {
    println("CriticalHitEvent ran!");
});
```


## Supertype

CriticalHitEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in CriticalHitEvent

## Properties

|       Name        |                                  Type                                  | Has Getter | Has Setter |
|-------------------|------------------------------------------------------------------------|------------|------------|
| damageMultiplier  | [CriticalHitEvent](/neoforge/api/event/entity/player/CriticalHitEvent) | true       | true       |
| isVanillaCritical | boolean                                                                | true       | false      |
| target            | [Entity](/vanilla/api/entity/Entity)                                   | true       | false      |
| vanillaMultiplier | float                                                                  | true       | false      |

