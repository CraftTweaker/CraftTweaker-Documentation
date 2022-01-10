# LivingFallEvent



The event is cancelable.

If the event is canceled, the Entity does not fall (no fall damage is inflicted).

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.LivingFallEvent;
```


## Extending LivingEvent

LivingFallEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingFallEvent

## Metodi

:::group{name=getDamageMultiplier}

Return Type: float

```zenscript
// LivingFallEvent.getDamageMultiplier() as float

myLivingFallEvent.getDamageMultiplier();
```

:::

:::group{name=getDistance}

Return Type: float

```zenscript
// LivingFallEvent.getDistance() as float

myLivingFallEvent.getDistance();
```

:::

:::group{name=setDamageMultiplier}

Return Type: void

```zenscript
LivingFallEvent.setDamageMultiplier(value as int) as void
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| valore    | int  | No Description Provided |


:::

:::group{name=setDistance}

Return Type: void

```zenscript
LivingFallEvent.setDistance(value as int) as void
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| valore    | int  | No Description Provided |


:::


## Proprietà

| Nome             | Tipo  | Ha Getter | Ha Setter | Descrizione             |
| ---------------- | ----- | --------- | --------- | ----------------------- |
| damageMultiplier | float | sì        | sì        | No Description Provided |
| distance         | float | sì        | sì        | No Description Provided |

