# LivingPostDamageEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.LivingPostDamageEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.LivingPostDamageEvent>(event => {
    println("LivingPostDamageEvent ran!");
});
```


## Supertype

LivingPostDamageEvent extends [LivingDamageEvent](/neoforge/api/event/entity/living/LivingDamageEvent). That means all methods available in [LivingDamageEvent](/neoforge/api/event/entity/living/LivingDamageEvent) are also available in LivingPostDamageEvent

## Methods

:::group{name=getReduction}

Return Type: float

```zenscript
LivingPostDamageEvent.getReduction(reduction as DamageContainerReduction) as float
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| reduction | [DamageContainerReduction](/neoforge/api/world/damage/DamageContainerReduction) |


:::


## Properties

|              Name              |                          Type                          | Has Getter | Has Setter |
|--------------------------------|--------------------------------------------------------|------------|------------|
| blockedDamage                  | float                                                  | true       | false      |
| newDamage                      | float                                                  | true       | false      |
| originalDamage                 | float                                                  | true       | false      |
| postAttackInvulnerabilityTicks | int                                                    | true       | false      |
| shieldDamage                   | float                                                  | true       | false      |
| source                         | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |

