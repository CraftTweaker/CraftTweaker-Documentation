# LivingKnockBackEvent



The event is cancelable.

If the event is canceled, the entity is not knocked back.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.LivingKnockBackEvent;
```


## Extending LivingEvent

LivingKnockBackEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingKnockBackEvent

## Metodi

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

```zenscript
LivingKnockBackEvent.setRatioX(value as double)
```

| Parametro | Tipo   |
| --------- | ------ |
| valore    | double |


:::

:::group{name=setRatioZ}

```zenscript
LivingKnockBackEvent.setRatioZ(value as double)
```

| Parametro | Tipo   |
| --------- | ------ |
| valore    | double |


:::

:::group{name=setStrength}

```zenscript
LivingKnockBackEvent.setStrength(value as float)
```

| Parametro | Tipo  |
| --------- | ----- |
| valore    | float |


:::


## Proprietà

| Nome           | Tipo   | Ha Getter | Ha Setter |
| -------------- | ------ | --------- | --------- |
| originRatioX   | double | sì        | no        |
| originRatioZ   | double | sì        | no        |
| originStrength | float  | sì        | no        |
| ratioX         | double | sì        | sì        |
| ratioZ         | double | sì        | sì        |
| strength       | float  | sì        | sì        |

