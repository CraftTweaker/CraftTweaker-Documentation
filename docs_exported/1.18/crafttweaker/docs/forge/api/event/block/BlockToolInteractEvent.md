# BlockToolInteractEvent

Fired when this block is right clicked by a tool to change its state.
 For example: Used to determine if an axe can strip a log, a shovel can turn grass into a path, or a hoe can till dirt into farmland.

The event is cancelable.

If the event is canceled, this will prevent the tool from changing the block's state.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.BlockToolInteractEvent;
```


## Extending BlockToolModificationEvent

BlockToolInteractEvent extends [BlockToolModificationEvent](/forge/api/event/block/BlockToolModificationEvent). That means all methods available in [BlockToolModificationEvent](/forge/api/event/block/BlockToolModificationEvent) are also available in BlockToolInteractEvent

