# MobEffectApplicableEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.effect.MobEffectApplicableEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.effect.MobEffectApplicableEvent>(event => {
    println("MobEffectApplicableEvent ran!");
});
```


## Supertype

MobEffectApplicableEvent extends [MobEffectEvent](/neoforge/api/event/entity/living/effect/MobEffectEvent). That means all methods available in [MobEffectEvent](/neoforge/api/event/entity/living/effect/MobEffectEvent) are also available in MobEffectApplicableEvent

