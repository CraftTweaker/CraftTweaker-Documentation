# WaystoneActivatedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.waystones.events.WaystoneActivatedEvent;
```


## Methods

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// WaystoneActivatedEvent.getPlayer() as Player

myWaystoneActivatedEvent.getPlayer();
```

:::

:::group{name=getWaystone}

Return Type: [IWaystone](/mods/sdmcrtplus/integration/waystones/IWaystone)

```zenscript
// WaystoneActivatedEvent.getWaystone() as IWaystone

myWaystoneActivatedEvent.getWaystone();
```

:::


