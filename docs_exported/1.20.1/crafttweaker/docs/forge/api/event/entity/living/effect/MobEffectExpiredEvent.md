# MobEffectExpiredEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.effect.MobEffectExpiredEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.effect.MobEffectExpiredEvent>(event => {
    println("MobEffectExpiredEvent ran!");
});
```


## Supertype

MobEffectExpiredEvent extends [MobEffectEvent](/forge/api/event/entity/living/effect/MobEffectEvent). That means all methods available in [MobEffectEvent](/forge/api/event/entity/living/effect/MobEffectEvent) are also available in MobEffectExpiredEvent

