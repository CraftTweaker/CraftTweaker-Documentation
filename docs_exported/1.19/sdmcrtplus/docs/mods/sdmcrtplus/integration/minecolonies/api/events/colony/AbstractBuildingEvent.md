# AbstractBuildingEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.events.colony.AbstractBuildingEvent;
```


## Extending AbstractColonyEvent

AbstractBuildingEvent extends [AbstractColonyEvent](/mods/sdmcrtplus/integration/minecolonies/api/events/AbstractColonyEvent). That means all methods available in [AbstractColonyEvent](/mods/sdmcrtplus/integration/minecolonies/api/events/AbstractColonyEvent) are also available in AbstractBuildingEvent

## Methods

:::group{name=getBuilding}

Return Type: [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)

```zenscript
// AbstractBuildingEvent.getBuilding() as IBuilding

myAbstractBuildingEvent.getBuilding();
```

:::


