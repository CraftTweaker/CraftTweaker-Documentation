# MobEffectExpiredEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.effect.MobEffectExpiredEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.effect.MobEffectExpiredEvent>(event => {
    println("MobEffectExpiredEvent ran!");
});
```


## Supertype

MobEffectExpiredEvent extends [MobEffectEvent](/neoforge/api/event/entity/living/effect/MobEffectEvent). That means all methods available in [MobEffectEvent](/neoforge/api/event/entity/living/effect/MobEffectEvent) are also available in MobEffectExpiredEvent

## Implemented Interfaces
MobEffectExpiredEvent implements the following interfaces. That means all methods defined in these interfaces are also available in MobEffectExpiredEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

