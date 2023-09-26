# AbstractCitizenEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.events.colony.citizens.AbstractCitizenEvent;
```


## Extending AbstractColonyEvent

AbstractCitizenEvent extends [AbstractColonyEvent](/mods/sdmcrtplus/integration/minecolonies/api/events/AbstractColonyEvent). That means all methods available in [AbstractColonyEvent](/mods/sdmcrtplus/integration/minecolonies/api/events/AbstractColonyEvent) are also available in AbstractCitizenEvent

## Methods

:::group{name=getCitizen}

Return Type: [ICitizen](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizen)

```zenscript
// AbstractCitizenEvent.getCitizen() as ICitizen

myAbstractCitizenEvent.getCitizen();
```

:::


