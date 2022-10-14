# LivingKnockBackEvent



The event is cancelable.

If the event is canceled, the entity is not knocked back.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.LivingKnockBackEvent;
```


## Extending LivingEvent

LivingKnockBackEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingKnockBackEvent

## Methods

:::group{name=getOriginRatioX}

Return Type: double

```zenscript
// LivingKnockBackEvent.getOriginRatioX() as double

event.getOriginRatioX();
```

:::

:::group{name=getOriginRatioZ}

Return Type: double

```zenscript
// LivingKnockBackEvent.getOriginRatioZ() as double

event.getOriginRatioZ();
```

:::

:::group{name=getOriginStrength}

Return Type: float

```zenscript
// LivingKnockBackEvent.getOriginStrength() as float

event.getOriginStrength();
```

:::

:::group{name=getRatioX}

Return Type: double

```zenscript
// LivingKnockBackEvent.getRatioX() as double

event.getRatioX();
```

:::

:::group{name=getRatioZ}

Return Type: double

```zenscript
// LivingKnockBackEvent.getRatioZ() as double

event.getRatioZ();
```

:::

:::group{name=getStrength}

Return Type: float

```zenscript
// LivingKnockBackEvent.getStrength() as float

event.getStrength();
```

:::

:::group{name=setRatioX}

Return Type: void

```zenscript
LivingKnockBackEvent.setRatioX(value as double) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| value     | double | No Description Provided |


:::

:::group{name=setRatioZ}

Return Type: void

```zenscript
LivingKnockBackEvent.setRatioZ(value as double) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| value     | double | No Description Provided |


:::

:::group{name=setStrength}

Return Type: void

```zenscript
LivingKnockBackEvent.setStrength(value as float) as void
```

| Parameter | Type  | Description             |
| --------- | ----- | ----------------------- |
| value     | float | No Description Provided |


:::


## Properties

| 이름             | Type   | Has Getter | Has Setter | Description             |
| -------------- | ------ | ---------- | ---------- | ----------------------- |
| originRatioX   | double | true       | false      | No Description Provided |
| originRatioZ   | double | true       | false      | No Description Provided |
| originStrength | float  | true       | false      | No Description Provided |
| ratioX         | double | true       | true       | No Description Provided |
| ratioZ         | double | true       | true       | No Description Provided |
| strength       | float  | true       | true       | No Description Provided |

