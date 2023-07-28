# Server

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.game.Server;
```


## Implemented Interfaces
Server implements the following interfaces. That means all methods defined in these interfaces are also available in Server

- [CommandSource](/vanilla/api/command/CommandSource)
- AutoCloseable

## Methods

:::group{name=areNpcsEnabled}

Return Type: boolean

```zenscript
// Server.areNpcsEnabled() as boolean

myServer.areNpcsEnabled();
```

:::

:::group{name=executeCommand}

Runs a command, if silent is true, the output is hidden.

 Returns The success value of the command, or 0 if an exception occurred.
 
 Note: Some commands' success value is 0

Return Type: int

```zenscript
// Server.executeCommand(command as string, silent as boolean) as int

myServer.executeCommand("time set day", true);
```

| Parameter |  Type   | Optional | Default Value |
|-----------|---------|----------|---------------|
| command   | string  | false    |               |
| silent    | boolean | true     | false         |


:::

:::group{name=executeCommand}

let a player send a command, if silent is true, the output is hidden.

 Returns The success value of the command, or 0 if an exception occurred.
 
 Note: Some commands' success value is 0

Return Type: int

```zenscript
// Server.executeCommand(command as string, player as Player, silent as boolean) as int

myServer.executeCommand("time set day", player, true);
```

| Parameter |                       Type                       | Optional | Default Value |
|-----------|--------------------------------------------------|----------|---------------|
| command   | string                                           | false    |               |
| player    | [Player](/vanilla/api/entity/type/player/Player) | false    |               |
| silent    | boolean                                          | true     | false         |


:::

:::group{name=getAbsoluteMaxWorldSize}

Return Type: int

```zenscript
// Server.getAbsoluteMaxWorldSize() as int

myServer.getAbsoluteMaxWorldSize();
```

:::

:::group{name=getAllLevels}

Return Type: stdlib.Iterable&lt;[ServerLevel](/vanilla/api/world/ServerLevel)&gt;

```zenscript
// Server.getAllLevels() as stdlib.Iterable<ServerLevel>

myServer.getAllLevels();
```

:::

:::group{name=getAverageTickTime}

Return Type: float

```zenscript
// Server.getAverageTickTime() as float

myServer.getAverageTickTime();
```

:::

:::group{name=getDefaultGameType}

Return Type: [GameType](/vanilla/api/world/GameType)

```zenscript
// Server.getDefaultGameType() as GameType

myServer.getDefaultGameType();
```

:::

:::group{name=getForcedGameType}

Return Type: [GameType](/vanilla/api/world/GameType)?

```zenscript
// Server.getForcedGameType() as GameType?

myServer.getForcedGameType();
```

:::

:::group{name=getLevel}

Return Type: [ServerLevel](/vanilla/api/world/ServerLevel)?

```zenscript
Server.getLevel(location as ResourceLocation) as ServerLevel?
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| location  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=getMaxPlayers}

Return Type: int

```zenscript
// Server.getMaxPlayers() as int

myServer.getMaxPlayers();
```

:::

:::group{name=getModdedStatus}

Return Type: string?

```zenscript
// Server.getModdedStatus() as string?

myServer.getModdedStatus();
```

:::

:::group{name=getMotd}

Return Type: string

```zenscript
// Server.getMotd() as string

myServer.getMotd();
```

:::

:::group{name=getOperatorUserPermissionLevel}

Return Type: int

```zenscript
// Server.getOperatorUserPermissionLevel() as int

myServer.getOperatorUserPermissionLevel();
```

:::

:::group{name=getOverworldData}

Gets the custom data of the overworld.

 The overworld is always loaded, so this can be used to store and access data no matter what level a player may be in.

Returns: The overworld's custom data.  
Return Type: [CraftTweakerSavedData](/vanilla/api/world/CraftTweakerSavedData)

```zenscript
// Server.getOverworldData() as CraftTweakerSavedData

myServer.getOverworldData();
```

:::

:::group{name=getPlayerCount}

Return Type: int

```zenscript
// Server.getPlayerCount() as int

myServer.getPlayerCount();
```

:::

:::group{name=getPlayerList}

Return Type: [PlayerList](/vanilla/api/server/PlayerList)

```zenscript
// Server.getPlayerList() as PlayerList

myServer.getPlayerList();
```

:::

:::group{name=getPlayerNames}

Return Type: string[]

```zenscript
// Server.getPlayerNames() as string[]

myServer.getPlayerNames();
```

:::

:::group{name=getServerModName}

Return Type: string

```zenscript
// Server.getServerModName() as string

myServer.getServerModName();
```

:::

:::group{name=getServerVersion}

Return Type: string

```zenscript
// Server.getServerVersion() as string

myServer.getServerVersion();
```

:::

:::group{name=getSpawnProtectionRadius}

Return Type: int

```zenscript
// Server.getSpawnProtectionRadius() as int

myServer.getSpawnProtectionRadius();
```

:::

:::group{name=getSpawnRadius}

Return Type: int

```zenscript
Server.getSpawnRadius(level as ServerLevel?) as int
```

| Parameter |                      Type                      |
|-----------|------------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel)? |


:::

:::group{name=getTickCount}

Return Type: int

```zenscript
// Server.getTickCount() as int

myServer.getTickCount();
```

:::

:::group{name=isCommandBlockEnabled}

Return Type: boolean

```zenscript
// Server.isCommandBlockEnabled() as boolean

myServer.isCommandBlockEnabled();
```

:::

:::group{name=isDedicatedServer}

Return Type: boolean

```zenscript
// Server.isDedicatedServer() as boolean

myServer.isDedicatedServer();
```

:::

:::group{name=isEnforceWhitelist}

Return Type: boolean

```zenscript
// Server.isEnforceWhitelist() as boolean

myServer.isEnforceWhitelist();
```

:::

:::group{name=isFlightAllowed}

Return Type: boolean

```zenscript
// Server.isFlightAllowed() as boolean

myServer.isFlightAllowed();
```

:::

:::group{name=isHardcore}

Return Type: boolean

```zenscript
// Server.isHardcore() as boolean

myServer.isHardcore();
```

:::

:::group{name=isNetherEnabled}

Return Type: boolean

```zenscript
// Server.isNetherEnabled() as boolean

myServer.isNetherEnabled();
```

:::

:::group{name=isPvpAllowed}

Return Type: boolean

```zenscript
// Server.isPvpAllowed() as boolean

myServer.isPvpAllowed();
```

:::

:::group{name=isReady}

Return Type: boolean

```zenscript
// Server.isReady() as boolean

myServer.isReady();
```

:::

:::group{name=isRunning}

Return Type: boolean

```zenscript
// Server.isRunning() as boolean

myServer.isRunning();
```

:::

:::group{name=isShutdown}

Return Type: boolean

```zenscript
// Server.isShutdown() as boolean

myServer.isShutdown();
```

:::

:::group{name=isSingleplayer}

Return Type: boolean

```zenscript
// Server.isSingleplayer() as boolean

myServer.isSingleplayer();
```

:::

:::group{name=isSpawningAnimals}

Return Type: boolean

```zenscript
// Server.isSpawningAnimals() as boolean

myServer.isSpawningAnimals();
```

:::

:::group{name=isSpawningMonsters}

Return Type: boolean

```zenscript
// Server.isSpawningMonsters() as boolean

myServer.isSpawningMonsters();
```

:::

:::group{name=isStopped}

Return Type: boolean

```zenscript
// Server.isStopped() as boolean

myServer.isStopped();
```

:::

:::group{name=isUnderSpawnProtection}

Return Type: boolean

```zenscript
Server.isUnderSpawnProtection(level as ServerLevel, pos as BlockPos, player as Player) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel)    |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)      |
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=levelKeys}

Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// Server.levelKeys() as stdlib.List<ResourceLocation>

myServer.levelKeys();
```

:::

:::group{name=overworld}

Return Type: [ServerLevel](/vanilla/api/world/ServerLevel)

```zenscript
// Server.overworld() as ServerLevel

myServer.overworld();
```

:::

:::group{name=setDefaultGameType}

```zenscript
Server.setDefaultGameType(gameType as GameType)
```

| Parameter |                  Type                   |
|-----------|-----------------------------------------|
| gameType  | [GameType](/vanilla/api/world/GameType) |


:::

:::group{name=setDifficulty}

```zenscript
Server.setDifficulty(difficulty as Difficulty, force as boolean)
```

| Parameter  |                    Type                     |
|------------|---------------------------------------------|
| difficulty | [Difficulty](/vanilla/api/world/Difficulty) |
| force      | boolean                                     |


:::

:::group{name=setDifficultyLocked}

```zenscript
Server.setDifficultyLocked(locked as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| locked    | boolean |


:::

:::group{name=setEnforceWhitelist}

```zenscript
Server.setEnforceWhitelist(enforceWhitelist as boolean)
```

|    Parameter     |  Type   |
|------------------|---------|
| enforceWhitelist | boolean |


:::

:::group{name=setFlightAllowed}

```zenscript
Server.setFlightAllowed(flightAllowed as boolean)
```

|   Parameter   |  Type   |
|---------------|---------|
| flightAllowed | boolean |


:::

:::group{name=setMotd}

```zenscript
Server.setMotd(motd as string)
```

| Parameter |  Type  |
|-----------|--------|
| motd      | string |


:::

:::group{name=setPvpAllowed}

```zenscript
Server.setPvpAllowed(pvpAllowed as boolean)
```

| Parameter  |  Type   |
|------------|---------|
| pvpAllowed | boolean |


:::


## Properties

|            Name             |                                     Type                                      | Has Getter | Has Setter |                                                                                 Description                                                                                  |
|-----------------------------|-------------------------------------------------------------------------------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| absoluteMaxWorldSize        | int                                                                           | true       | false      |                                                                                                                                                                              |
| allLevels                   | stdlib.Iterable&lt;[ServerLevel](/vanilla/api/world/ServerLevel)&gt;          | true       | false      |                                                                                                                                                                              |
| areNpcsEnabled              | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| averageTickTime             | float                                                                         | true       | false      |                                                                                                                                                                              |
| defaultGameTime             | [GameType](/vanilla/api/world/GameType)                                       | true       | false      |                                                                                                                                                                              |
| forcedGameType              | [GameType](/vanilla/api/world/GameType)?                                      | true       | false      |                                                                                                                                                                              |
| isCommandBlockEnabled       | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isDedicatedServer           | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isEnforceWhitelist          | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isFlightAllowed             | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isHardcore                  | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isNetherEnabled             | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isPvpAllowed                | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isReady                     | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isRunning                   | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isShutdown                  | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isSingleplayer              | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isSpawningAnimals           | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isSpawningMonsters          | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| isStopped                   | boolean                                                                       | true       | false      |                                                                                                                                                                              |
| levelKeys                   | stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt; | true       | false      |                                                                                                                                                                              |
| maxPlayer                   | int                                                                           | true       | false      |                                                                                                                                                                              |
| moddeStatus                 | string?                                                                       | true       | false      |                                                                                                                                                                              |
| motd                        | string                                                                        | true       | false      |                                                                                                                                                                              |
| operatorUserPermissionLevel | int                                                                           | true       | false      |                                                                                                                                                                              |
| overworld                   | [ServerLevel](/vanilla/api/world/ServerLevel)                                 | true       | false      |                                                                                                                                                                              |
| overworldData               | [CraftTweakerSavedData](/vanilla/api/world/CraftTweakerSavedData)             | true       | false      | Gets the custom data of the overworld. <br />  <br />  The overworld is always loaded, so this can be used to store and access data no matter what level a player may be in. |
| playerCount                 | int                                                                           | true       | false      |                                                                                                                                                                              |
| playerList                  | [PlayerList](/vanilla/api/server/PlayerList)                                  | true       | false      |                                                                                                                                                                              |
| playerNames                 | string[]                                                                      | true       | false      |                                                                                                                                                                              |
| serverModName               | string                                                                        | true       | false      |                                                                                                                                                                              |
| serverVersion               | string                                                                        | true       | false      |                                                                                                                                                                              |
| spawnProtectionRadius       | int                                                                           | true       | false      |                                                                                                                                                                              |
| tickCount                   | int                                                                           | true       | false      |                                                                                                                                                                              |

