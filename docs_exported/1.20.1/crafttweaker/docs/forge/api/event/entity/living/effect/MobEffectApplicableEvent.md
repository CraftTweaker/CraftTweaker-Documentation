# MobEffectApplicableEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.effect.MobEffectApplicableEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.effect.MobEffectApplicableEvent>(event => {
    println("MobEffectApplicableEvent ran!");
});
```


## Supertype

MobEffectApplicableEvent extends [MobEffectEvent](/forge/api/event/entity/living/effect/MobEffectEvent). That means all methods available in [MobEffectEvent](/forge/api/event/entity/living/effect/MobEffectEvent) are also available in MobEffectApplicableEvent

