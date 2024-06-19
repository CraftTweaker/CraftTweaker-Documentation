# EntityMountEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.EntityMountEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.EntityMountEvent>(event => {
    println("EntityMountEvent ran!");
});
```


## Supertype

EntityMountEvent extends [EntityEvent](/neoforge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/neoforge/api/event/entity/EntityEvent) are also available in EntityMountEvent

## Implemented Interfaces
EntityMountEvent implements the following interfaces. That means all methods defined in these interfaces are also available in EntityMountEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|        Name        |                 Type                 | Has Getter | Has Setter |
|--------------------|--------------------------------------|------------|------------|
| dismounting        | boolean                              | true       | false      |
| entityBeingMounted | [Entity](/vanilla/api/entity/Entity) | true       | false      |
| entityMounting     | [Entity](/vanilla/api/entity/Entity) | true       | false      |
| level              | [Level](/vanilla/api/world/Level)    | true       | false      |
| mounting           | boolean                              | true       | false      |

