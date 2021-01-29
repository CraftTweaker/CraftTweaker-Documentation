# MCLivingHurtEvent

This event is fired just before an entity is hurt. This allows you to modify the damage received, cancel the attack, or run additional effects.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingHurtEvent;
```


## Extending MCLivingEvent

MCLivingHurtEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingHurtEvent

## Methods

### getAmount

Gets the amount of damage.

Return Type: float

```zenscript
MCLivingHurtEvent.getAmount() as float
event.getAmount();
```
### getSource

Gets the source of the damage.

Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
MCLivingHurtEvent.getSource() as DamageSource
event.getSource();
```
### setAmount

Sets the amount of damage.

Return Type: void

```zenscript
MCLivingHurtEvent.setAmount(amount as float) as void
event.setAmount(0.5);
```
| Параметр | Тип   | Description           |
| -------- | ----- | --------------------- |
| amount   | float | The amount of damage. |


## Свойства

| Название | Тип                                            | Имеет Getter | Имеет Setter |
| -------- | ---------------------------------------------- | ------------ | ------------ |
| amount   | float                                          | true         | true         |
| источник | [DamageSource](/vanilla/api/util/DamageSource) | true         | false        |

