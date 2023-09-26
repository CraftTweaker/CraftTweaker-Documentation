# Team

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbteams.Team;
```


## Extending TeamBase

Team extends [TeamBase](/mods/sdmcrtplus/integration/ftbteams/TeamBase). That means all methods available in [TeamBase](/mods/sdmcrtplus/integration/ftbteams/TeamBase) are also available in Team

## Methods

:::group{name=getManager}

Return Type: [TeamManager](/mods/sdmcrtplus/integration/ftbteams/TeamManager)

```zenscript
// Team.getManager() as TeamManager

myTeam.getManager();
```

:::

:::group{name=getOnlineMembers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// Team.getOnlineMembers() as stdlib.List<ServerPlayer>

myTeam.getOnlineMembers();
```

:::

:::group{name=getOwner}

Return Type: string

```zenscript
// Team.getOwner() as string

myTeam.getOwner();
```

:::

:::group{name=isValid}

Return Type: boolean

```zenscript
// Team.isValid() as boolean

myTeam.isValid();
```

:::

:::group{name=msg}

Return Type: int

```zenscript
Team.msg(player as ServerPlayer, message as string) as int
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |
| message   | string                                                       |


:::

:::group{name=sendMessage}

```zenscript
Team.sendMessage(player as ServerPlayer, message as string)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| player    | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |
| message   | string                                                       |


:::


