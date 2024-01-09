# EntityPlaceBlockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.block.EntityPlaceBlockEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.block.EntityPlaceBlockEvent>(event => {
    println("EntityPlaceBlockEvent ran!");
});
```


## Supertype

EntityPlaceBlockEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in EntityPlaceBlockEvent

## Properties

|     Name      |                    Type                     | Has Getter | Has Setter |
|---------------|---------------------------------------------|------------|------------|
| entity        | [Entity](/vanilla/api/entity/Entity)?       | true       | false      |
| placedAgainst | [BlockState](/vanilla/api/block/BlockState) | true       | false      |
| placedBlock   | [BlockState](/vanilla/api/block/BlockState) | true       | false      |

