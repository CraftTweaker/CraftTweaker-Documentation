# EntityLeaveLevelEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.EntityLeaveLevelEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.EntityLeaveLevelEvent>(event => {
    println("EntityLeaveLevelEvent ran!");
});
```


## Supertype

EntityLeaveLevelEvent extends [EntityEvent](/neoforge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/neoforge/api/event/entity/EntityEvent) are also available in EntityLeaveLevelEvent

## Properties

| Name  |               Type                | Has Getter | Has Setter |
|-------|-----------------------------------|------------|------------|
| level | [Level](/vanilla/api/world/Level) | true       | false      |

