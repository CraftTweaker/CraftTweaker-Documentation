# PlayerList

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.server.PlayerList;
```


## Methods

:::group{name=getMaxPlayers}

Return Type: int

```zenscript
// PlayerList.getMaxPlayers() as int

myPlayerList.getMaxPlayers();
```

:::

:::group{name=getPlayer}

Return Type: [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)?

```zenscript
PlayerList.getPlayer(uuid as stdlib.UUID) as ServerPlayer?
```

| Parameter |    Type     |
|-----------|-------------|
| uuid      | stdlib.UUID |


:::

:::group{name=getPlayerByName}

Return Type: [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)?

```zenscript
PlayerList.getPlayerByName(name as string) as ServerPlayer?
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getPlayerCount}

Return Type: int

```zenscript
// PlayerList.getPlayerCount() as int

myPlayerList.getPlayerCount();
```

:::

:::group{name=getPlayers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// PlayerList.getPlayers() as stdlib.List<ServerPlayer>

myPlayerList.getPlayers();
```

:::

:::group{name=getServer}

Return Type: [Server](/vanilla/api/game/Server)

```zenscript
// PlayerList.getServer() as Server

myPlayerList.getServer();
```

:::

:::group{name=getSimulationDistance}

Return Type: int

```zenscript
// PlayerList.getSimulationDistance() as int

myPlayerList.getSimulationDistance();
```

:::

:::group{name=getViewDistance}

Return Type: int

```zenscript
// PlayerList.getViewDistance() as int

myPlayerList.getViewDistance();
```

:::


## Properties

|            Name            |                                      Type                                       | Has Getter | Has Setter |
|----------------------------|---------------------------------------------------------------------------------|------------|------------|
| allowCommandsForAllPlayers | boolean                                                                         | true       | false      |
| maxPlayers                 | int                                                                             | true       | false      |
| playerCount                | int                                                                             | true       | false      |
| players                    | stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt; | true       | false      |
| server                     | [Server](/vanilla/api/game/Server)                                              | true       | false      |
| simulationDistance         | int                                                                             | true       | false      |
| viewDistance               | int                                                                             | true       | false      |

