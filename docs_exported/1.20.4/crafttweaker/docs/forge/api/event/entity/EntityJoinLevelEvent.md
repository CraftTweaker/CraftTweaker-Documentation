# EntityJoinLevelEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.EntityJoinLevelEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.EntityJoinLevelEvent>(event => {
    println("EntityJoinLevelEvent ran!");
});
```


## Supertype

EntityJoinLevelEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in EntityJoinLevelEvent

## Properties

|      Name      |               Type                | Has Getter | Has Setter |
|----------------|-----------------------------------|------------|------------|
| level          | [Level](/vanilla/api/world/Level) | true       | false      |
| loadedFromDisk | boolean                           | true       | false      |

