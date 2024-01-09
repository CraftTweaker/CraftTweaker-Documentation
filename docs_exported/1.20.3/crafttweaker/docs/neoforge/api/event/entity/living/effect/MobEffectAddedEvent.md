# MobEffectAddedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.effect.MobEffectAddedEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.effect.MobEffectAddedEvent>(event => {
    println("MobEffectAddedEvent ran!");
});
```


## Supertype

MobEffectAddedEvent extends [MobEffectEvent](/neoforge/api/event/entity/living/effect/MobEffectEvent). That means all methods available in [MobEffectEvent](/neoforge/api/event/entity/living/effect/MobEffectEvent) are also available in MobEffectAddedEvent

## Properties

|       Name        |                                Type                                | Has Getter | Has Setter |
|-------------------|--------------------------------------------------------------------|------------|------------|
| effectInstance    | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)  | true       | false      |
| effectSource      | [Entity](/vanilla/api/entity/Entity)?                              | true       | false      |
| oldEffectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)? | true       | false      |

