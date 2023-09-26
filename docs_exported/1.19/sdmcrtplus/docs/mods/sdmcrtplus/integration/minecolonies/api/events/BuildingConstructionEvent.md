# BuildingConstructionEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.events.BuildingConstructionEvent;
```


## Extending AbstractBuildingEvent

BuildingConstructionEvent extends [AbstractBuildingEvent](/mods/sdmcrtplus/integration/minecolonies/api/events/colony/AbstractBuildingEvent). That means all methods available in [AbstractBuildingEvent](/mods/sdmcrtplus/integration/minecolonies/api/events/colony/AbstractBuildingEvent) are also available in BuildingConstructionEvent

## Methods

:::group{name=getEventType}

Return Type: [EventType](/mods/sdmcrtplus/integration/minecolonies/api/events/EventType)

```zenscript
// BuildingConstructionEvent.getEventType() as EventType

myBuildingConstructionEvent.getEventType();
```

:::


