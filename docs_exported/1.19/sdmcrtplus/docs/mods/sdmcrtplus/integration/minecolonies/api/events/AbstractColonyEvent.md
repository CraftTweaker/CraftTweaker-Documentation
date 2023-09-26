# AbstractColonyEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.events.AbstractColonyEvent;
```


## Extending Event

AbstractColonyEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in AbstractColonyEvent

## Methods

:::group{name=getColony}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)

```zenscript
// AbstractColonyEvent.getColony() as IColony

myAbstractColonyEvent.getColony();
```

:::


