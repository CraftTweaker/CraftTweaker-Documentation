# MobEffectRemoveEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.effect.MobEffectRemoveEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.effect.MobEffectRemoveEvent>(event => {
    println("MobEffectRemoveEvent ran!");
});
```


## Supertype

MobEffectRemoveEvent extends [MobEffectEvent](/neoforge/api/event/entity/living/effect/MobEffectEvent). That means all methods available in [MobEffectEvent](/neoforge/api/event/entity/living/effect/MobEffectEvent) are also available in MobEffectRemoveEvent

## Implemented Interfaces
MobEffectRemoveEvent implements the following interfaces. That means all methods defined in these interfaces are also available in MobEffectRemoveEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|  Name  |                       Type                        | Has Getter | Has Setter |
|--------|---------------------------------------------------|------------|------------|
| effect | [MobEffect](/vanilla/api/entity/effect/MobEffect) | true       | false      |

