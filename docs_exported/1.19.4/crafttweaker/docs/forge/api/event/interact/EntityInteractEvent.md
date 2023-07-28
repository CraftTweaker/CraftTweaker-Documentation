# EntityInteractEvent

This event is fired on both sides whenever the player interacts with an entity.

The event is cancelable.

If the event is canceled, will cause the entity to not be interacted with

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.interact.EntityInteractEvent;
```


## Extending PlayerInteractEvent

EntityInteractEvent extends [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent). That means all methods available in [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent) are also available in EntityInteractEvent

## Properties

|  Name  |                 Type                 | Has Getter | Has Setter |
|--------|--------------------------------------|------------|------------|
| target | [Entity](/vanilla/api/entity/Entity) | true       | false      |

