# LivingHealEvent

This event is fired just before an entity is healed. This allows you to modify the amount of healing or prevent it all together by canceling the event.

The event is cancelable.

If the event is canceled, the entity is not healed

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.LivingHealEvent;
```


## Extending LivingEvent

LivingHealEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingHealEvent

## Methods

:::group{name=getAmount}

Gets the amount of healing.

Returns: The amount of damage to heal.  
Return Type: float

```zenscript
// LivingHealEvent.getAmount() as float

event.getAmount();
```

:::

:::group{name=setAmount}

Sets the amount of healing.

Return Type: void

```zenscript
// LivingHealEvent.setAmount(amount as float) as void

event.setAmount(0.5);
```

| Parameter | Type  | Description                   |
| --------- | ----- | ----------------------------- |
| amount    | float | The amount of damage to heal. |


:::


## Properties

| Nombre | Type  | Has Getter | Has Setter | Description                 |
| ------ | ----- | ---------- | ---------- | --------------------------- |
| amount | float | true       | true       | Gets the amount of healing. |

