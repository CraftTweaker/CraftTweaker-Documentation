# EntityInteractEvent

This event is fired on both sides whenever the player right clicks an entity.

The event is cancelable.

If the event is canceled, will cause the entity to not be interacted with

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.interact.EntityInteractEvent;
```


## Extending PlayerInteractEvent

EntityInteractEvent extends [PlayerInteractEvent](/forge/api/event/entity/player/interact/PlayerInteractEvent). That means all methods available in [PlayerInteractEvent](/forge/api/event/entity/player/interact/PlayerInteractEvent) are also available in EntityInteractEvent

## Methods

:::group{name=getTarget}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// EntityInteractEvent.getTarget() as Entity

myEntityInteractEvent.getTarget();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| target | [Entity](/vanilla/api/entity/Entity) | true | false | No Description Provided |

