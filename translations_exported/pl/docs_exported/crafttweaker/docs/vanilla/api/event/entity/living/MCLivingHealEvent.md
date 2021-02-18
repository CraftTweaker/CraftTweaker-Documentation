# MCLivingHealEvent

This event is fired just before an entity is healed. This allows you to modify the amount of healing or prevent it all together by canceling the event.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingHealEvent;
```


## Extending MCLivingEvent

MCLivingHealEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingHealEvent

## Methods

### getAmount

Gets the amount of healing.

Return Type: float

```zenscript
MCLivingHealEvent.getAmount() as float
event.getAmount();
```

### setAmount

Sets the amount of healing.

Return Type: void

```zenscript
MCLivingHealEvent.setAmount(amount as float) as void
event.setAmount(0.5);
```

| Parameter | Type  | Description                   |
| --------- | ----- | ----------------------------- |
| amount    | float | The amount of damage to heal. |



## Properties

| Name   | Type  | Has Getter | Has Setter |
| ------ | ----- | ---------- | ---------- |
| amount | float | true       | true       |

