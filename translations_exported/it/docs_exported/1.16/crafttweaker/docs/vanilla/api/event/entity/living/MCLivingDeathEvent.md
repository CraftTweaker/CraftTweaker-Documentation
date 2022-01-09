# MCLivingDeathEvent

This event is fired just before an entity is killed. This allows you to run additional logic or prevent the death.

The event is cancelable.

If the event is canceled, the entity does not die.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingDeathEvent;
```


## Extending MCLivingEvent

MCLivingDeathEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingDeathEvent

## Metodi

:::group{name=getSource}

Gets the source of the damage that killed the entity.

Returns: The source of the damage that killed the entity.  
Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
// MCLivingDeathEvent.getSource() as DamageSource

event.getSource();
```

:::


## Proprietà

| Nome     | Tipo                                           | Ha Getter | Ha Setter | Descrizione                                           |
| -------- | ---------------------------------------------- | --------- | --------- | ----------------------------------------------------- |
| sorgente | [DamageSource](/vanilla/api/util/DamageSource) | sì        | no        | Gets the source of the damage that killed the entity. |

