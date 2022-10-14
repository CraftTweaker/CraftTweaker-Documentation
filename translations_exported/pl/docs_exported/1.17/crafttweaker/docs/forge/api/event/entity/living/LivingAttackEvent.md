# LivingAttackEvent

LivingAttackEvent is fired when a living Entity is attacked.

The event is cancelable.

If the event is canceled, the entity does not take attack damage.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.LivingAttackEvent;
```


## Extending LivingEvent

LivingAttackEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingAttackEvent

## Methods

:::group{name=getAmount}

Return Type: float

```zenscript
// LivingAttackEvent.getAmount() as float

myLivingAttackEvent.getAmount();
```

:::

:::group{name=getSource}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// LivingAttackEvent.getSource() as DamageSource

myLivingAttackEvent.getSource();
```

:::


## Properties

| Name   | Type                                            | Has Getter | Has Setter | Description             |
| ------ | ----------------------------------------------- | ---------- | ---------- | ----------------------- |
| amount | float                                           | true       | false      | No Description Provided |
| źródło | [DamageSource](/vanilla/api/world/DamageSource) | true       | false      | No Description Provided |

