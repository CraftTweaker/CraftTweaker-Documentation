# CustomPlayerJoinedPartyTeamEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbteams.events.CustomPlayerJoinedPartyTeamEvent;
```


## Extending CustomTeamEvent

CustomPlayerJoinedPartyTeamEvent extends [CustomTeamEvent](/mods/sdmcrtplus/integration/ftbteams/events/CustomTeamEvent). That means all methods available in [CustomTeamEvent](/mods/sdmcrtplus/integration/ftbteams/events/CustomTeamEvent) are also available in CustomPlayerJoinedPartyTeamEvent

## Methods

:::group{name=getPlayer}

Return Type: [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)

```zenscript
// CustomPlayerJoinedPartyTeamEvent.getPlayer() as ServerPlayer

myCustomPlayerJoinedPartyTeamEvent.getPlayer();
```

:::

:::group{name=getPreviousTeam}

Return Type: [PlayerTeam](/mods/sdmcrtplus/integration/ftbteams/PlayerTeam)

```zenscript
// CustomPlayerJoinedPartyTeamEvent.getPreviousTeam() as PlayerTeam

myCustomPlayerJoinedPartyTeamEvent.getPreviousTeam();
```

:::


