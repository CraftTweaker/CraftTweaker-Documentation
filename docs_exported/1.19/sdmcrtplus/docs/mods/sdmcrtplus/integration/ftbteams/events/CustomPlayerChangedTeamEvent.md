# CustomPlayerChangedTeamEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbteams.events.CustomPlayerChangedTeamEvent;
```


## Extending CustomTeamEvent

CustomPlayerChangedTeamEvent extends [CustomTeamEvent](/mods/sdmcrtplus/integration/ftbteams/events/CustomTeamEvent). That means all methods available in [CustomTeamEvent](/mods/sdmcrtplus/integration/ftbteams/events/CustomTeamEvent) are also available in CustomPlayerChangedTeamEvent

## Methods

:::group{name=getPlayer}

Return Type: [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)?

```zenscript
// CustomPlayerChangedTeamEvent.getPlayer() as ServerPlayer?

myCustomPlayerChangedTeamEvent.getPlayer();
```

:::

:::group{name=getPlayerId}

Return Type: string

```zenscript
// CustomPlayerChangedTeamEvent.getPlayerId() as string

myCustomPlayerChangedTeamEvent.getPlayerId();
```

:::

:::group{name=getPreviousTeam}

Return Type: [Team](/mods/sdmcrtplus/integration/ftbteams/Team)

```zenscript
// CustomPlayerChangedTeamEvent.getPreviousTeam() as Team

myCustomPlayerChangedTeamEvent.getPreviousTeam();
```

:::


