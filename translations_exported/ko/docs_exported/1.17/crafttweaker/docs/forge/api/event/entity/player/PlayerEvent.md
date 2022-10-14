# PlayerEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.PlayerEvent;
```


## Extending LivingEvent

PlayerEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in PlayerEvent

## Methods

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// PlayerEvent.getPlayer() as Player

myPlayerEvent.getPlayer();
```

:::


## Properties

| 이름     | Type                                             | Has Getter | Has Setter | Description             |
| ------ | ------------------------------------------------ | ---------- | ---------- | ----------------------- |
| player | [Player](/vanilla/api/entity/type/player/Player) | true       | false      | No Description Provided |

