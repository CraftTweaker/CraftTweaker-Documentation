# MobEffectRemoveEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.effect.MobEffectRemoveEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.effect.MobEffectRemoveEvent>(event => {
    println("MobEffectRemoveEvent ran!");
});
```


## Supertype

MobEffectRemoveEvent extends [MobEffectEvent](/forge/api/event/entity/living/effect/MobEffectEvent). That means all methods available in [MobEffectEvent](/forge/api/event/entity/living/effect/MobEffectEvent) are also available in MobEffectRemoveEvent

## Properties

|  Name  |                       Type                        | Has Getter | Has Setter |
|--------|---------------------------------------------------|------------|------------|
| effect | [MobEffect](/vanilla/api/entity/effect/MobEffect) | true       | false      |

