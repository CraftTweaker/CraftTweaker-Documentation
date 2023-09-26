# EndPortalActivatedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.enigmaticlegacy.events.EndPortalActivatedEvent;
```


## Extending PlayerEvent

EndPortalActivatedEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in EndPortalActivatedEvent

## Methods

:::group{name=getPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// EndPortalActivatedEvent.getPos() as BlockPos

myEndPortalActivatedEvent.getPos();
```

:::


