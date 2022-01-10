# LivingDamageEvent



The event is cancelable.

If the event is canceled, the Entity is not hurt. Used resources WILL NOT be restored.

The event does not have a result.



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.LivingDamageEvent;
```


## Extending LivingEvent

LivingDamageEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingDamageEvent

## Methoden

:::group{name=getAmount}

Return Type: float

```zenscript
// LivingDamageEvent.getAmount() as float

myLivingDamageEvent.getAmount();
```

:::

:::group{name=getSource}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// LivingDamageEvent.getSource() as DamageSource

myLivingDamageEvent.getSource();
```

:::

:::group{name=setAmount}

Return Type: void

```zenscript
LivingDamageEvent.setAmount(amount as float) as void
```

| Parameter | Type  | Beschreibung            |
| --------- | ----- | ----------------------- |
| amount    | float | No Description Provided |


:::


## Properties

| Name   | Type                                            | Has Getter | Has Setter | Beschreibung            |
| ------ | ----------------------------------------------- | ---------- | ---------- | ----------------------- |
| amount | float                                           | true       | true       | No Description Provided |
| quell  | [DamageSource](/vanilla/api/world/DamageSource) | true       | false      | No Description Provided |

