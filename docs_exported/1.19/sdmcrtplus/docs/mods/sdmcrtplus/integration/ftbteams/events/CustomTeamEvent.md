# CustomTeamEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbteams.events.CustomTeamEvent;
```


## Extending Event

CustomTeamEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in CustomTeamEvent

## Methods

:::group{name=getTeam}

Return Type: [Team](/mods/sdmcrtplus/integration/ftbteams/Team)

```zenscript
// CustomTeamEvent.getTeam() as Team

myCustomTeamEvent.getTeam();
```

:::


