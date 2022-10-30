# PistonEventPost

Fires after the piston has moved and set surrounding states. This will not fire if [PistonPreEvent](/forge/api/event/block/piston/PistonPreEvent) is cancelled.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.piston.PistonEventPost;
```


## Extending PistonEvent

PistonEventPost extends [PistonEvent](/forge/api/event/block/piston/PistonEvent). That means all methods available in [PistonEvent](/forge/api/event/block/piston/PistonEvent) are also available in PistonEventPost

