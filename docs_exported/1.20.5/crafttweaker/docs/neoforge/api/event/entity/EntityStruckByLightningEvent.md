# EntityStruckByLightningEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.EntityStruckByLightningEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.EntityStruckByLightningEvent>(event => {
    println("EntityStruckByLightningEvent ran!");
});
```


## Supertype

EntityStruckByLightningEvent extends [EntityEvent](/neoforge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/neoforge/api/event/entity/EntityEvent) are also available in EntityStruckByLightningEvent

## Implemented Interfaces
EntityStruckByLightningEvent implements the following interfaces. That means all methods defined in these interfaces are also available in EntityStruckByLightningEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|   Name    |                             Type                             | Has Getter | Has Setter |
|-----------|--------------------------------------------------------------|------------|------------|
| lightning | [LightningBolt](/vanilla/api/entity/type/misc/LightningBolt) | true       | false      |

