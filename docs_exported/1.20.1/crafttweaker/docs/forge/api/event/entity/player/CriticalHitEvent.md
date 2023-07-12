# CriticalHitEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.player.CriticalHitEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.player.CriticalHitEvent>(event => {
    println("CriticalHitEvent ran!");
});
```


## Supertype

CriticalHitEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in CriticalHitEvent

## Properties

|       Name        |                                Type                                 | Has Getter | Has Setter |
|-------------------|---------------------------------------------------------------------|------------|------------|
| damageModifier    | [CriticalHitEvent](/forge/api/event/entity/player/CriticalHitEvent) | true       | true       |
| isVanillaCritical | boolean                                                             | true       | false      |
| oldDamageModifier | float                                                               | true       | false      |
| target            | [Entity](/vanilla/api/entity/Entity)                                | true       | false      |

