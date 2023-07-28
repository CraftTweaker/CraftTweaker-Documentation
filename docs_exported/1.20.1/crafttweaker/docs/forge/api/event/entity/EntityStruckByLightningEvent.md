# EntityStruckByLightningEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.EntityStruckByLightningEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.EntityStruckByLightningEvent>(event => {
    println("EntityStruckByLightningEvent ran!");
});
```


## Supertype

EntityStruckByLightningEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in EntityStruckByLightningEvent

## Properties

|   Name    |                             Type                             | Has Getter | Has Setter |
|-----------|--------------------------------------------------------------|------------|------------|
| lightning | [LightningBolt](/vanilla/api/entity/type/misc/LightningBolt) | true       | false      |

