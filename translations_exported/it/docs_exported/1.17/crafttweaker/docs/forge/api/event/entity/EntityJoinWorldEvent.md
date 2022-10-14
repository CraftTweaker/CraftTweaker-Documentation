# EntityJoinWorldEvent



The event is cancelable.

If the event is canceled, it will deny the entity to join the world

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.EntityJoinWorldEvent;
```


## Extending EntityEvent

EntityJoinWorldEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in EntityJoinWorldEvent

## Proprietà

| Nome  | Tipo                              | Ha Getter | Ha Setter | Descrizione             |
| ----- | --------------------------------- | --------- | --------- | ----------------------- |
| world | [Level](/vanilla/api/world/Level) | sì        | no        | No Description Provided |

