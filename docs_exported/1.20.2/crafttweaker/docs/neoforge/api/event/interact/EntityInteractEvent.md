# EntityInteractEvent

This event is fired on both sides whenever the player interacts with an entity.

The event is cancelable.

If the event is canceled, will cause the entity to not be interacted with

The event does not have a result.



## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.interact.EntityInteractEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.interact.EntityInteractEvent>(event => {
    println("EntityInteractEvent ran!");
});
```


## Supertype

EntityInteractEvent extends [PlayerInteractEvent](/neoforge/api/event/interact/PlayerInteractEvent). That means all methods available in [PlayerInteractEvent](/neoforge/api/event/interact/PlayerInteractEvent) are also available in EntityInteractEvent

## Implemented Interfaces
EntityInteractEvent implements the following interfaces. That means all methods defined in these interfaces are also available in EntityInteractEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|  Name  |                 Type                 | Has Getter | Has Setter |
|--------|--------------------------------------|------------|------------|
| target | [Entity](/vanilla/api/entity/Entity) | true       | false      |

