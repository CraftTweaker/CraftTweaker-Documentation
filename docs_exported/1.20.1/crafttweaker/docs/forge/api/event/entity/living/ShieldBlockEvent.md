# ShieldBlockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.ShieldBlockEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.ShieldBlockEvent>(event => {
    println("ShieldBlockEvent ran!");
});
```


## Supertype

ShieldBlockEvent extends [LivingEvent](/forge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/living/LivingEvent) are also available in ShieldBlockEvent

## Properties

|         Name          |                          Type                          | Has Getter | Has Setter |
|-----------------------|--------------------------------------------------------|------------|------------|
| blockedDamage         | float                                                  | true       | true       |
| damageSource          | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| originalBlockedDamage | float                                                  | true       | false      |
| shieldTakesDamage     | boolean                                                | true       | true       |

