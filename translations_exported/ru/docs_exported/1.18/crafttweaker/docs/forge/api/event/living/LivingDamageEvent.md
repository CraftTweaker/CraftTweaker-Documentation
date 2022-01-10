# LivingDamageEvent



The event is cancelable.

If the event is canceled, the Entity is not hurt. Used resources WILL NOT be restored.

The event does not have a result.



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.LivingDamageEvent;
```


## Extending LivingEvent

LivingDamageEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingDamageEvent

## Методы

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

| Параметр | Тип   | Описание                |
| -------- | ----- | ----------------------- |
| amount   | float | No Description Provided |


:::


## Свойства

| Название | Тип                                             | Имеет Getter | Имеет Setter | Описание                |
| -------- | ----------------------------------------------- | ------------ | ------------ | ----------------------- |
| amount   | float                                           | true         | true         | No Description Provided |
| источник | [DamageSource](/vanilla/api/world/DamageSource) | true         | false        | No Description Provided |

