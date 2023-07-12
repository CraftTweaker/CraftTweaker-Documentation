# RightClickItemEvent

The rightClickItem event is fired whenever the player right clicks with an item in their hand.
 It does not offer any special getters, but you can still access all members from [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent)

The event is cancelable.

If the event is canceled, Item#onItemRightClick will not be called

The event does not have a result.



## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.player.interact.RightClickItemEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.player.interact.RightClickItemEvent>(event => {
    println("RightClickItemEvent ran!");
});
```


## Supertype

RightClickItemEvent extends [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent). That means all methods available in [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent) are also available in RightClickItemEvent

