# LivingShieldBlockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.LivingShieldBlockEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.LivingShieldBlockEvent>(event => {
    println("LivingShieldBlockEvent ran!");
});
```


## Supertype

LivingShieldBlockEvent extends [LivingEvent](/neoforge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/neoforge/api/event/entity/living/LivingEvent) are also available in LivingShieldBlockEvent

## Implemented Interfaces
LivingShieldBlockEvent implements the following interfaces. That means all methods defined in these interfaces are also available in LivingShieldBlockEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|         Name          |                                        Type                                        | Has Getter | Has Setter |
|-----------------------|------------------------------------------------------------------------------------|------------|------------|
| blocked               | [LivingShieldBlockEvent](/neoforge/api/event/entity/living/LivingShieldBlockEvent) | true       | true       |
| blockedDamage         | [LivingShieldBlockEvent](/neoforge/api/event/entity/living/LivingShieldBlockEvent) | true       | true       |
| damageContainer       | [DamageContainer](/neoforge/api/world/damage/DamageContainer)                      | true       | false      |
| damageSource          | [DamageSource](/vanilla/api/world/damage/DamageSource)                             | true       | false      |
| originalBlock         | boolean                                                                            | true       | false      |
| originalBlockedDamage | float                                                                              | true       | false      |
| shieldDamage          | [LivingShieldBlockEvent](/neoforge/api/event/entity/living/LivingShieldBlockEvent) | true       | true       |

