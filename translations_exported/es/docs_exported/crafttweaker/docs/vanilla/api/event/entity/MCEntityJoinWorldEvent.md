# MCEntityJoinWorldEvent



The event is cancelable.

If the event is canceled, it will deny the entity to join the world

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.MCEntityJoinWorldEvent;
```


## Extending MCEntityEvent

MCEntityJoinWorldEvent extends [MCEntityEvent](/vanilla/api/event/entity/MCEntityEvent). That means all methods available in [MCEntityEvent](/vanilla/api/event/entity/MCEntityEvent) are also available in MCEntityJoinWorldEvent

## Properties

| Nombre | Type                                  | Has Getter | Has Setter | Description             |
| ------ | ------------------------------------- | ---------- | ---------- | ----------------------- |
| world  | [MCWorld](/vanilla/api/world/MCWorld) | true       | false      | No Description Provided |

