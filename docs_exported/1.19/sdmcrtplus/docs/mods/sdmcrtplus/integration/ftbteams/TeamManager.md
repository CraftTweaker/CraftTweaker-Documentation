# TeamManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbteams.TeamManager;
```


## Methods

:::group{name=createParty}

Return Type: [Pair](/mods/sdmcrtplus/utils/core/Pair)

```zenscript
TeamManager.createParty(player as ServerPlayer, name as string) as Pair
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |
| name      | string                                                       |


:::

:::group{name=createParty}

Return Type: [Pair](/mods/sdmcrtplus/utils/core/Pair)

```zenscript
TeamManager.createParty(player as ServerPlayer, name as string, description as string?, color4I as Color4I) as Pair
```

|  Parameter  |                              Type                               |
|-------------|-----------------------------------------------------------------|
| player      | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)    |
| name        | string                                                          |
| description | string?                                                         |
| color4I     | [Color4I](/mods/sdmcrtplus/integration/ftblibrary/icon/Color4I) |


:::

:::group{name=getInternalPlayerTeam}

Return Type: [PlayerTeam](/mods/sdmcrtplus/integration/ftbteams/PlayerTeam)

```zenscript
TeamManager.getInternalPlayerTeam(player as ServerPlayer) as PlayerTeam
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=getInternalPlayerTeam}

Return Type: [PlayerTeam](/mods/sdmcrtplus/integration/ftbteams/PlayerTeam)

```zenscript
TeamManager.getInternalPlayerTeam(uuid as string) as PlayerTeam
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::

:::group{name=getKnownPlayers}

Return Type: V[K]?

```zenscript
// TeamManager.getKnownPlayers() as V[K]?

myTeamManager.getKnownPlayers();
```

:::

:::group{name=getPlayerTeam}

Return Type: [Team](/mods/sdmcrtplus/integration/ftbteams/Team)?

```zenscript
TeamManager.getPlayerTeam(player as ServerPlayer) as Team?
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=getPlayerTeam}

Return Type: [Team](/mods/sdmcrtplus/integration/ftbteams/Team)?

```zenscript
TeamManager.getPlayerTeam(uuid as string) as Team?
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::

:::group{name=getServer}

Return Type: [Server](/vanilla/api/game/Server)

```zenscript
// TeamManager.getServer() as Server

myTeamManager.getServer();
```

:::

:::group{name=getTeamByID}

Return Type: [Team](/mods/sdmcrtplus/integration/ftbteams/Team)?

```zenscript
TeamManager.getTeamByID(uuid as string) as Team?
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::

:::group{name=getTeams}

Return Type: Collection&lt;[Team](/mods/sdmcrtplus/integration/ftbteams/Team)&gt;

```zenscript
// TeamManager.getTeams() as Collection<Team>

myTeamManager.getTeams();
```

:::


