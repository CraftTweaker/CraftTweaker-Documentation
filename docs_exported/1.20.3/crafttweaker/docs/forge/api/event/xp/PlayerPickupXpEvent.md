# PlayerPickupXpEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.xp.PlayerPickupXpEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.xp.PlayerPickupXpEvent>(event => {
    println("PlayerPickupXpEvent ran!");
});
```


## Supertype

PlayerPickupXpEvent extends [PlayerXpEvent](/forge/api/event/xp/PlayerXpEvent). That means all methods available in [PlayerXpEvent](/forge/api/event/xp/PlayerXpEvent) are also available in PlayerPickupXpEvent

## Properties

| Name |                             Type                             | Has Getter | Has Setter |
|------|--------------------------------------------------------------|------------|------------|
| orb  | [ExperienceOrb](/vanilla/api/entity/type/misc/ExperienceOrb) | true       | false      |

