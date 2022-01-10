# LivingAttackEvent

LivingAttackEvent is fired when a living Entity is attacked.

The event is cancelable.

If the event is canceled, the entity does not take attack damage.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.LivingAttackEvent;
```


## Extending LivingEvent

LivingAttackEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingAttackEvent

## Metodi

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


## Proprietà

| Nome     | Tipo                                            | Ha Getter | Ha Setter | Descrizione             |
| -------- | ----------------------------------------------- | --------- | --------- | ----------------------- |
| amount   | float                                           | sì        | no        | No Description Provided |
| sorgente | [DamageSource](/vanilla/api/world/DamageSource) | sì        | no        | No Description Provided |

