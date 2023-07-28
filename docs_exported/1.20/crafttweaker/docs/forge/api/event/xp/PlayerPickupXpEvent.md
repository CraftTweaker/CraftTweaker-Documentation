# PlayerPickupXpEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.xp.PlayerPickupXpEvent;
```


## Extending PlayerXpEvent

PlayerPickupXpEvent extends [PlayerXpEvent](/forge/api/event/xp/PlayerXpEvent). That means all methods available in [PlayerXpEvent](/forge/api/event/xp/PlayerXpEvent) are also available in PlayerPickupXpEvent

## Properties

| Name |                             Type                             | Has Getter | Has Setter |
|------|--------------------------------------------------------------|------------|------------|
| orb  | [ExperienceOrb](/vanilla/api/entity/type/misc/ExperienceOrb) | true       | false      |

