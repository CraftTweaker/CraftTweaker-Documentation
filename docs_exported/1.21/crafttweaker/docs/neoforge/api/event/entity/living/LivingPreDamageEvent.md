# LivingPreDamageEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.LivingPreDamageEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.LivingPreDamageEvent>(event => {
    println("LivingPreDamageEvent ran!");
});
```


## Supertype

LivingPreDamageEvent extends [LivingDamageEvent](/neoforge/api/event/entity/living/LivingDamageEvent). That means all methods available in [LivingDamageEvent](/neoforge/api/event/entity/living/LivingDamageEvent) are also available in LivingPreDamageEvent

## Properties

|   Name    |                             Type                              | Has Getter | Has Setter |
|-----------|---------------------------------------------------------------|------------|------------|
| container | [DamageContainer](/neoforge/api/world/damage/DamageContainer) | true       | false      |

