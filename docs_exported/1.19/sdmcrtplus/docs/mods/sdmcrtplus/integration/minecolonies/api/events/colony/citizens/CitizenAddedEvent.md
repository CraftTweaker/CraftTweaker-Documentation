# CitizenAddedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.events.colony.citizens.CitizenAddedEvent;
```


## Extending AbstractCitizenEvent

CitizenAddedEvent extends [AbstractCitizenEvent](/mods/sdmcrtplus/integration/minecolonies/api/events/colony/citizens/AbstractCitizenEvent). That means all methods available in [AbstractCitizenEvent](/mods/sdmcrtplus/integration/minecolonies/api/events/colony/citizens/AbstractCitizenEvent) are also available in CitizenAddedEvent

## Methods

:::group{name=getSource}

Return Type: [CitizenAddedEventSource](/mods/sdmcrtplus/integration/minecolonies/api/events/colony/citizens/CitizenAddedEventSource)

```zenscript
// CitizenAddedEvent.getSource() as CitizenAddedEventSource

myCitizenAddedEvent.getSource();
```

:::


