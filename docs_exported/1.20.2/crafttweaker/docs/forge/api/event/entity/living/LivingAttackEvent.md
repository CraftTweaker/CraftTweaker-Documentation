# LivingAttackEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.LivingAttackEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.LivingAttackEvent>(event => {
    println("LivingAttackEvent ran!");
});
```


## Supertype

LivingAttackEvent extends [LivingEvent](/forge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/living/LivingEvent) are also available in LivingAttackEvent

## Properties

|  Name  |                          Type                          | Has Getter | Has Setter |
|--------|--------------------------------------------------------|------------|------------|
| amount | float                                                  | true       | false      |
| source | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |

