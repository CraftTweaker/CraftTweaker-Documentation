# EntityInteractSpecificEvent

This event is fired on both sides whenever a player right-clicks an entity.

 "Interact at" is an interact where the local vector (which part of the entity you clicked) is known.
 The state of this event affects whether [Entity](/vanilla/api/entity/Entity)#interactAt(Player, Vec3, InteractionHand) is called.

The event is cancelable.

If the event is canceled, will cause the entity to not be interacted with

The event does not have a result.



## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.interact.EntityInteractSpecificEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.interact.EntityInteractSpecificEvent>(event => {
    println("EntityInteractSpecificEvent ran!");
});
```


## Supertype

EntityInteractSpecificEvent extends [PlayerInteractEvent](/neoforge/api/event/interact/PlayerInteractEvent). That means all methods available in [PlayerInteractEvent](/neoforge/api/event/interact/PlayerInteractEvent) are also available in EntityInteractSpecificEvent

## Implemented Interfaces
EntityInteractSpecificEvent implements the following interfaces. That means all methods defined in these interfaces are also available in EntityInteractSpecificEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|        Name        |                           Type                            | Has Getter | Has Setter |
|--------------------|-----------------------------------------------------------|------------|------------|
| cancellationResult | [InteractionResult](/vanilla/api/world/InteractionResult) | true       | true       |
| localPos           | [Vec3](/vanilla/api/util/math/Vec3)                       | true       | false      |
| target             | [Entity](/vanilla/api/entity/Entity)                      | true       | false      |

