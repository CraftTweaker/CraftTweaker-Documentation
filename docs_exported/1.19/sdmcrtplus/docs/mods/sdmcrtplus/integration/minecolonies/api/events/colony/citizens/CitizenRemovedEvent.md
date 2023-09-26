# CitizenRemovedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.events.colony.citizens.CitizenRemovedEvent;
```


## Extending AbstractCitizenEvent

CitizenRemovedEvent extends [AbstractCitizenEvent](/mods/sdmcrtplus/integration/minecolonies/api/events/colony/citizens/AbstractCitizenEvent). That means all methods available in [AbstractCitizenEvent](/mods/sdmcrtplus/integration/minecolonies/api/events/colony/citizens/AbstractCitizenEvent) are also available in CitizenRemovedEvent

## Methods

:::group{name=getDamageSource}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// CitizenRemovedEvent.getDamageSource() as DamageSource

myCitizenRemovedEvent.getDamageSource();
```

:::


