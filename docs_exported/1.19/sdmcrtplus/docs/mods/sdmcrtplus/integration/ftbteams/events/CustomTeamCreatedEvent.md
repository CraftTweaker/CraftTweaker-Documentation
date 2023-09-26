# CustomTeamCreatedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbteams.events.CustomTeamCreatedEvent;
```


## Extending CustomTeamEvent

CustomTeamCreatedEvent extends [CustomTeamEvent](/mods/sdmcrtplus/integration/ftbteams/events/CustomTeamEvent). That means all methods available in [CustomTeamEvent](/mods/sdmcrtplus/integration/ftbteams/events/CustomTeamEvent) are also available in CustomTeamCreatedEvent

## Methods

:::group{name=getCreator}

Return Type: [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)

```zenscript
// CustomTeamCreatedEvent.getCreator() as ServerPlayer

myCustomTeamCreatedEvent.getCreator();
```

:::


