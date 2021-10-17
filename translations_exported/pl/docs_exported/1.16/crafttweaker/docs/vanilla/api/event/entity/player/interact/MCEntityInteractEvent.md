# MCEntityInteractEvent

This event is fired on both sides whenever the player right clicks an entity.

The event is cancelable.

If the event is canceled, will cause the entity to not be interacted with

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.interact.MCEntityInteractEvent;
```


## Extending MCPlayerInteractEvent

MCEntityInteractEvent extends [MCPlayerInteractEvent](/vanilla/api/event/entity/player/interact/MCPlayerInteractEvent). That means all methods available in [MCPlayerInteractEvent](/vanilla/api/event/entity/player/interact/MCPlayerInteractEvent) are also available in MCEntityInteractEvent

## Methods

:::group{name=getTarget}

Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
// MCEntityInteractEvent.getTarget() as MCEntity

myMCEntityInteractEvent.getTarget();
```

:::


## Properties

| Name   | Type                                     | Has Getter | Has Setter | Description             |
| ------ | ---------------------------------------- | ---------- | ---------- | ----------------------- |
| target | [MCEntity](/vanilla/api/entity/MCEntity) | true       | false      | No Description Provided |

