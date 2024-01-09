# EntityMountEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.EntityMountEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.EntityMountEvent>(event => {
    println("EntityMountEvent ran!");
});
```


## Supertype

EntityMountEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in EntityMountEvent

## Properties

|        Name        |                 Type                 | Has Getter | Has Setter |
|--------------------|--------------------------------------|------------|------------|
| dismounting        | boolean                              | true       | false      |
| entityBeingMounted | [Entity](/vanilla/api/entity/Entity) | true       | false      |
| entityMounting     | [Entity](/vanilla/api/entity/Entity) | true       | false      |
| level              | [Level](/vanilla/api/world/Level)    | true       | false      |
| mounting           | boolean                              | true       | false      |

