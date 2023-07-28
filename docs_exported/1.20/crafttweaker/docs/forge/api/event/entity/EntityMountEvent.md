# EntityMountEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.entity.EntityMountEvent;
```


## Extending EntityEvent

EntityMountEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in EntityMountEvent

## Properties

|        Name        |                 Type                 | Has Getter | Has Setter |
|--------------------|--------------------------------------|------------|------------|
| dismounting        | boolean                              | true       | false      |
| entityBeingMounted | [Entity](/vanilla/api/entity/Entity) | true       | false      |
| entityMounting     | [Entity](/vanilla/api/entity/Entity) | true       | false      |
| level              | [Level](/vanilla/api/world/Level)    | true       | false      |
| mounting           | boolean                              | true       | false      |

