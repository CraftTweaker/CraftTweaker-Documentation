# PrePistonEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.block.piston.PrePistonEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.block.piston.PrePistonEvent>(event => {
    println("PrePistonEvent ran!");
});
```


## Supertype

PrePistonEvent extends [PistonEvent](/neoforge/api/event/block/piston/PistonEvent). That means all methods available in [PistonEvent](/neoforge/api/event/block/piston/PistonEvent) are also available in PrePistonEvent

## Implemented Interfaces
PrePistonEvent implements the following interfaces. That means all methods defined in these interfaces are also available in PrePistonEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

