# CustomTeamPropertiesChangedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbteams.events.CustomTeamPropertiesChangedEvent;
```


## Extending CustomTeamEvent

CustomTeamPropertiesChangedEvent extends [CustomTeamEvent](/mods/sdmcrtplus/integration/ftbteams/events/CustomTeamEvent). That means all methods available in [CustomTeamEvent](/mods/sdmcrtplus/integration/ftbteams/events/CustomTeamEvent) are also available in CustomTeamPropertiesChangedEvent

## Methods

:::group{name=getOldProperties}

Return Type: [TeamProperties](/mods/sdmcrtplus/integration/ftbteams/TeamProperties)

```zenscript
// CustomTeamPropertiesChangedEvent.getOldProperties() as TeamProperties

myCustomTeamPropertiesChangedEvent.getOldProperties();
```

:::


