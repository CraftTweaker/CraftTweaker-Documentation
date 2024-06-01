# PlayerPickupXpEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.xp.PlayerPickupXpEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.xp.PlayerPickupXpEvent>(event => {
    println("PlayerPickupXpEvent ran!");
});
```


## Supertype

PlayerPickupXpEvent extends [PlayerXpEvent](/neoforge/api/event/xp/PlayerXpEvent). That means all methods available in [PlayerXpEvent](/neoforge/api/event/xp/PlayerXpEvent) are also available in PlayerPickupXpEvent

## Implemented Interfaces
PlayerPickupXpEvent implements the following interfaces. That means all methods defined in these interfaces are also available in PlayerPickupXpEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

| Name |                             Type                             | Has Getter | Has Setter |
|------|--------------------------------------------------------------|------------|------------|
| orb  | [ExperienceOrb](/vanilla/api/entity/type/misc/ExperienceOrb) | true       | false      |

