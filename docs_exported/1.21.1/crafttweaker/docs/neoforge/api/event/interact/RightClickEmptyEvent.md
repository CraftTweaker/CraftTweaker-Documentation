# RightClickEmptyEvent

The rightClickEmpty event is fired whenever the player right clicks with an empty hand.
 It does not offer any special getters, but you can still access all members from [PlayerInteractEvent](/neoforge/api/event/interact/PlayerInteractEvent)

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.interact.RightClickEmptyEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.interact.RightClickEmptyEvent>(event => {
    println("RightClickEmptyEvent ran!");
});
```


## Supertype

RightClickEmptyEvent extends [PlayerInteractEvent](/neoforge/api/event/interact/PlayerInteractEvent). That means all methods available in [PlayerInteractEvent](/neoforge/api/event/interact/PlayerInteractEvent) are also available in RightClickEmptyEvent

