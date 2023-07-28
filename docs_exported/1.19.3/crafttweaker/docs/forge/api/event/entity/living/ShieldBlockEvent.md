# ShieldBlockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.entity.living.ShieldBlockEvent;
```


## Extending LivingEvent

ShieldBlockEvent extends [LivingEvent](/forge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/living/LivingEvent) are also available in ShieldBlockEvent

## Properties

|         Name          |                      Type                       | Has Getter | Has Setter |
|-----------------------|-------------------------------------------------|------------|------------|
| blockedDamage         | float                                           | true       | true       |
| damageSource          | [DamageSource](/vanilla/api/world/DamageSource) | true       | false      |
| originalBlockedDamage | float                                           | true       | false      |
| shieldTakesDamage     | boolean                                         | true       | true       |

