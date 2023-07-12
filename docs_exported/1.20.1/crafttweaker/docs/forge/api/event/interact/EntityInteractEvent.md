# EntityInteractEvent

This event is fired on both sides whenever the player interacts with an entity.

The event is cancelable.

If the event is canceled, will cause the entity to not be interacted with

The event does not have a result.



## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.interact.EntityInteractEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.interact.EntityInteractEvent>(event => {
    println("EntityInteractEvent ran!");
});
```


## Supertype

EntityInteractEvent extends [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent). That means all methods available in [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent) are also available in EntityInteractEvent

## Properties

|  Name  |                 Type                 | Has Getter | Has Setter |
|--------|--------------------------------------|------------|------------|
| target | [Entity](/vanilla/api/entity/Entity) | true       | false      |

