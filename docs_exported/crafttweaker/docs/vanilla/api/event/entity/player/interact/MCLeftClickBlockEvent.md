# MCLeftClickBlockEvent

This event is fired when a player left clicks while targeting a block.
 This event controls which of [MCBlock](/vanilla/api/block/MCBlock)#onBlockClicked and/or the item harvesting methods will be called.

 Note that if the event is canceled and the player holds down left mouse, the event will continue to fire.
 This is due to how vanilla calls the left click handler methods.

 Also note that creative mode directly breaks the block without running any other logic.

The event is cancelable.

If the event is canceled, none of the above noted methods to be called.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.interact.MCLeftClickBlockEvent;
```


## Extending MCPlayerInteractEvent

MCLeftClickBlockEvent extends [MCPlayerInteractEvent](/vanilla/api/event/entity/player/interact/MCPlayerInteractEvent). That means all methods available in [MCPlayerInteractEvent](/vanilla/api/event/entity/player/interact/MCPlayerInteractEvent) are also available in MCLeftClickBlockEvent

