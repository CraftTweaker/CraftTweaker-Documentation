# LivingIncomingDamageEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.LivingIncomingDamageEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.LivingIncomingDamageEvent>(event => {
    println("LivingIncomingDamageEvent ran!");
});
```


## Supertype

LivingIncomingDamageEvent extends [LivingEvent](/neoforge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/neoforge/api/event/entity/living/LivingEvent) are also available in LivingIncomingDamageEvent

## Implemented Interfaces
LivingIncomingDamageEvent implements the following interfaces. That means all methods defined in these interfaces are also available in LivingIncomingDamageEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Methods

:::group{name=addReductionModifier}

```zenscript
LivingIncomingDamageEvent.addReductionModifier(type as DamageContainerReduction, reductionFunc as IReductionFunction)
```

|   Parameter   |                                      Type                                       |
|---------------|---------------------------------------------------------------------------------|
| type          | [DamageContainerReduction](/neoforge/api/world/damage/DamageContainerReduction) |
| reductionFunc | [IReductionFunction](/neoforge/api/world/damage/IReductionFunction)             |


:::

:::group{name=setInvulnerabilityTicks}

```zenscript
LivingIncomingDamageEvent.setInvulnerabilityTicks(ticks as int)
```

| Parameter | Type |
|-----------|------|
| ticks     | int  |


:::


## Properties

|      Name      |                                           Type                                           | Has Getter | Has Setter |
|----------------|------------------------------------------------------------------------------------------|------------|------------|
| amount         | [LivingIncomingDamageEvent](/neoforge/api/event/entity/living/LivingIncomingDamageEvent) | true       | true       |
| container      | [DamageContainer](/neoforge/api/world/damage/DamageContainer)                            | true       | false      |
| originalAmount | float                                                                                    | true       | false      |
| source         | [DamageSource](/vanilla/api/world/damage/DamageSource)                                   | true       | false      |

