# MobEffectAddedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.entity.living.effect.MobEffectAddedEvent;
```


## Extending MobEffectEvent

MobEffectAddedEvent extends [MobEffectEvent](/forge/api/event/entity/living/effect/MobEffectEvent). That means all methods available in [MobEffectEvent](/forge/api/event/entity/living/effect/MobEffectEvent) are also available in MobEffectAddedEvent

## Properties

|       Name        |                                Type                                | Has Getter | Has Setter |
|-------------------|--------------------------------------------------------------------|------------|------------|
| effectInstance    | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)  | true       | false      |
| effectSource      | [Entity](/vanilla/api/entity/Entity)?                              | true       | false      |
| oldEffectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)? | true       | false      |

