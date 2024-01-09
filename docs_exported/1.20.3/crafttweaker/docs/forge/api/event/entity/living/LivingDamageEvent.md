# LivingDamageEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.LivingDamageEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.LivingDamageEvent>(event => {
    println("LivingDamageEvent ran!");
});
```


## Supertype

LivingDamageEvent extends [LivingEvent](/forge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/living/LivingEvent) are also available in LivingDamageEvent

## Properties

|  Name  |                          Type                          | Has Getter | Has Setter |
|--------|--------------------------------------------------------|------------|------------|
| amount | float                                                  | true       | true       |
| source | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |

