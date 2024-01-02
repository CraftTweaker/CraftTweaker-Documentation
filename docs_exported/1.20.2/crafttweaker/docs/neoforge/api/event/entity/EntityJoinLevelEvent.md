# EntityJoinLevelEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.EntityJoinLevelEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.EntityJoinLevelEvent>(event => {
    println("EntityJoinLevelEvent ran!");
});
```


## Supertype

EntityJoinLevelEvent extends [EntityEvent](/neoforge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/neoforge/api/event/entity/EntityEvent) are also available in EntityJoinLevelEvent

## Implemented Interfaces
EntityJoinLevelEvent implements the following interfaces. That means all methods defined in these interfaces are also available in EntityJoinLevelEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|      Name      |               Type                | Has Getter | Has Setter |
|----------------|-----------------------------------|------------|------------|
| level          | [Level](/vanilla/api/world/Level) | true       | false      |
| loadedFromDisk | boolean                           | true       | false      |

