# EntityJoinLevelEvent



The event is cancelable.

If the event is canceled, it will deny the entity to join the level

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.EntityJoinLevelEvent;
```


## Extending EntityEvent

EntityJoinLevelEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in EntityJoinLevelEvent

## Properties

| 이름    | Type                              | Has Getter | Has Setter |
| ----- | --------------------------------- | ---------- | ---------- |
| level | [Level](/vanilla/api/world/Level) | true       | false      |

