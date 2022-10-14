# PickupXpEvent

This event is fired after the player collides with an experience orb, but before the player has been given the experience. It can be cancelled, and no further processing will be done.

The event is cancelable.

If the event is canceled, the xp will not change

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.xp.PickupXpEvent;
```


## Extending PlayerXpEvent

PickupXpEvent extends [PlayerXpEvent](/forge/api/event/entity/player/xp/PlayerXpEvent). That means all methods available in [PlayerXpEvent](/forge/api/event/entity/player/xp/PlayerXpEvent) are also available in PickupXpEvent

## Methods

:::group{name=getOrb}

Return Type: [ExperienceOrb](/vanilla/api/entity/type/misc/ExperienceOrb)

```zenscript
// PickupXpEvent.getOrb() as ExperienceOrb

event.getOrb();
```

:::


## Properties

| 名称  | Type                                                         | Has Getter | Has Setter | Description             |
| --- | ------------------------------------------------------------ | ---------- | ---------- | ----------------------- |
| orb | [ExperienceOrb](/vanilla/api/entity/type/misc/ExperienceOrb) | true       | false      | No Description Provided |

