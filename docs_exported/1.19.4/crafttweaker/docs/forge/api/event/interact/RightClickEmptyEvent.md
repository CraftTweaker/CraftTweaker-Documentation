# RightClickEmptyEvent

The rightClickEmpty event is fired whenever the player right clicks with an empty hand.
 It does not offer any special getters, but you can still access all members from [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent)

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.interact.RightClickEmptyEvent;
```


## Extending PlayerInteractEvent

RightClickEmptyEvent extends [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent). That means all methods available in [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent) are also available in RightClickEmptyEvent

