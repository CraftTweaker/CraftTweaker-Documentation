# CustomPlayerLeftPartyTeamEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbteams.events.CustomPlayerLeftPartyTeamEvent;
```


## Extending CustomTeamEvent

CustomPlayerLeftPartyTeamEvent extends [CustomTeamEvent](/mods/sdmcrtplus/integration/ftbteams/events/CustomTeamEvent). That means all methods available in [CustomTeamEvent](/mods/sdmcrtplus/integration/ftbteams/events/CustomTeamEvent) are also available in CustomPlayerLeftPartyTeamEvent

## Methods

:::group{name=getNewTeam}

Return Type: [PlayerTeam](/mods/sdmcrtplus/integration/ftbteams/PlayerTeam)

```zenscript
// CustomPlayerLeftPartyTeamEvent.getNewTeam() as PlayerTeam

myCustomPlayerLeftPartyTeamEvent.getNewTeam();
```

:::

:::group{name=getPlayer}

Return Type: [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)?

```zenscript
// CustomPlayerLeftPartyTeamEvent.getPlayer() as ServerPlayer?

myCustomPlayerLeftPartyTeamEvent.getPlayer();
```

:::

:::group{name=getPlayerId}

Return Type: string

```zenscript
// CustomPlayerLeftPartyTeamEvent.getPlayerId() as string

myCustomPlayerLeftPartyTeamEvent.getPlayerId();
```

:::

:::group{name=getTeamDeleted}

Return Type: boolean

```zenscript
// CustomPlayerLeftPartyTeamEvent.getTeamDeleted() as boolean

myCustomPlayerLeftPartyTeamEvent.getTeamDeleted();
```

:::


