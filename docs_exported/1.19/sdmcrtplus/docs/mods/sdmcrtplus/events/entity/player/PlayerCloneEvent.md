# PlayerCloneEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.entity.player.PlayerCloneEvent;
```


## Extending PlayerEvent

PlayerCloneEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerCloneEvent

## Methods

:::group{name=getOriginal}

The old EntityPlayer that this new entity is a clone of.

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// PlayerCloneEvent.getOriginal() as Player

myPlayerCloneEvent.getOriginal();
```

:::

:::group{name=isWasDeath}

True if this event was fired because the player died. False if it was fired because the entity switched dimensions.

Return Type: boolean

```zenscript
// PlayerCloneEvent.isWasDeath() as boolean

myPlayerCloneEvent.isWasDeath();
```

:::


