# MCLivingHealEvent

This event is fired just before an entity is healed. This allows you to modify the amount of healing or prevent it all together by canceling the event.

The event is cancelable.

If the event is canceled, the entity is not healed

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingHealEvent;
```


## Extending MCLivingEvent

MCLivingHealEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingHealEvent

## Metodi

:::group{name=getAmount}

Gets the amount of healing.

Returns: The amount of damage to heal.  
Return Type: float

```zenscript
// MCLivingHealEvent.getAmount() as float

event.getAmount();
```

:::

:::group{name=setAmount}

Sets the amount of healing.

Return Type: void

```zenscript
// MCLivingHealEvent.setAmount(amount as float) as void

event.setAmount(0.5);
```

| Parametro | Tipo  | Descrizione                   |
| --------- | ----- | ----------------------------- |
| amount    | float | The amount of damage to heal. |


:::


## Proprietà

| Nome   | Tipo  | Ha Getter | Ha Setter | Descrizione                 |
| ------ | ----- | --------- | --------- | --------------------------- |
| amount | float | sì        | sì        | Gets the amount of healing. |

