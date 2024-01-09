# PostPistonEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.block.piston.PostPistonEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.block.piston.PostPistonEvent>(event => {
    println("PostPistonEvent ran!");
});
```


## Supertype

PostPistonEvent extends [PistonEvent](/neoforge/api/event/block/piston/PistonEvent). That means all methods available in [PistonEvent](/neoforge/api/event/block/piston/PistonEvent) are also available in PostPistonEvent

