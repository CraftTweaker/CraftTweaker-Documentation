# Server

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.game.Server;
```


## 已实现的接口
Server implements the following interfaces. That means all methods defined in these interfaces are also available in Server

- [CommandSource](/vanilla/api/command/CommandSource)
- AutoCloseable

## 使用方式

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

| 参数      | 类型     | 描述                      | 可选    | DefaultValue |
| ------- | ------ | ----------------------- | ----- | ------------ |
| command | string | No Description Provided | false |              |
| silent  | 布尔值    | No Description Provided | true  | false        |


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

| 参数      | 类型                                               | 描述                      | 可选    | DefaultValue |
| ------- | ------------------------------------------------ | ----------------------- | ----- | ------------ |
| command | string                                           | No Description Provided | false |              |
| player  | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided | false |              |
| silent  | 布尔值                                              | No Description Provided | true  | false        |


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

Return Type: [GameType](/vanilla/api/world/GameType)

```zenscript
// Server.getForcedGameType() as GameType

myServer.getForcedGameType();
```

:::

:::group{name=getLevel}

Return Type: [ServerLevel](/vanilla/api/world/ServerLevel)

```zenscript
Server.getLevel(location as ResourceLocation) as ServerLevel
```

| 参数 | 类型                                             | 描述                      |
| -- | ---------------------------------------------- | ----------------------- |
| 位置 | [资源位置](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=getMaxPlayers}

Return Type: int

```zenscript
// Server.getMaxPlayers() as int

myServer.getMaxPlayers();
```

:::

:::group{name=getModdedStatus}

Return Type: **invalid**

```zenscript
// Server.getModdedStatus() as invalid

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

:::group{name=getPlayerCount}

Return Type: int

```zenscript
// Server.getPlayerCount() as int

myServer.getPlayerCount();
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
Server.getSpawnRadius(level as ServerLevel) as int
```

| 参数    | 类型                                            | 描述                      |
| ----- | --------------------------------------------- | ----------------------- |
| level | [ServerLevel](/vanilla/api/world/ServerLevel) | No Description Provided |


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

| 参数     | 类型                                               | 描述                      |
| ------ | ------------------------------------------------ | ----------------------- |
| level  | [ServerLevel](/vanilla/api/world/ServerLevel)    | No Description Provided |
| 点      | [BlockPos](/vanilla/api/util/math/BlockPos)      | No Description Provided |
| player | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |


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

Return Type: void

```zenscript
Server.setDefaultGameType(gameType as GameType) as void
```

| 参数       | 类型                                      | 描述                      |
| -------- | --------------------------------------- | ----------------------- |
| gameType | [GameType](/vanilla/api/world/GameType) | No Description Provided |


:::

:::group{name=setDifficulty}

Return Type: void

```zenscript
Server.setDifficulty(difficulty as Difficulty, force as boolean) as void
```

| 参数         | 类型                                          | 描述                      |
| ---------- | ------------------------------------------- | ----------------------- |
| difficulty | [Difficulty](/vanilla/api/world/Difficulty) | No Description Provided |
| force      | 布尔值                                         | No Description Provided |


:::

:::group{name=setDifficultyLocked}

Return Type: void

```zenscript
Server.setDifficultyLocked(locked as boolean) as void
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| locked | 布尔值 | No Description Provided |


:::

:::group{name=setEnforceWhitelist}

Return Type: void

```zenscript
Server.setEnforceWhitelist(enforceWhitelist as boolean) as void
```

| 参数               | 类型  | 描述                      |
| ---------------- | --- | ----------------------- |
| enforceWhitelist | 布尔值 | No Description Provided |


:::

:::group{name=setFlightAllowed}

Return Type: void

```zenscript
Server.setFlightAllowed(flightAllowed as boolean) as void
```

| 参数            | 类型  | 描述                      |
| ------------- | --- | ----------------------- |
| flightAllowed | 布尔值 | No Description Provided |


:::

:::group{name=setMotd}

Return Type: void

```zenscript
Server.setMotd(motd as string) as void
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| motd | string | No Description Provided |


:::

:::group{name=setPvpAllowed}

Return Type: void

```zenscript
Server.setPvpAllowed(pvpAllowed as boolean) as void
```

| 参数         | 类型  | 描述                      |
| ---------- | --- | ----------------------- |
| pvpAllowed | 布尔值 | No Description Provided |


:::


## 参数

| 名称                          | 类型                                                                                        | 可获得  | 可设置   | 描述                      |
| --------------------------- | ----------------------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| absoluteMaxWorldSize        | int                                                                                       | true | false | No Description Provided |
| allLevels                   | stdlib.Iterable&lt;[ServerLevel](/vanilla/api/world/ServerLevel)&gt;          | true | false | No Description Provided |
| areNpcsEnabled              | 布尔值                                                                                       | true | false | No Description Provided |
| averageTickTime             | float                                                                                     | true | false | No Description Provided |
| defaultGameTime             | [GameType](/vanilla/api/world/GameType)                                                   | true | false | No Description Provided |
| forcedGameType              | [GameType](/vanilla/api/world/GameType)                                                   | true | false | No Description Provided |
| isCommandBlockEnabled       | 布尔值                                                                                       | true | false | No Description Provided |
| isDedicatedServer           | 布尔值                                                                                       | true | false | No Description Provided |
| isEnforceWhitelist          | 布尔值                                                                                       | true | false | No Description Provided |
| isFlightAllowed             | 布尔值                                                                                       | true | false | No Description Provided |
| isHardcore                  | 布尔值                                                                                       | true | false | No Description Provided |
| isNetherEnabled             | 布尔值                                                                                       | true | false | No Description Provided |
| isPvpAllowed                | 布尔值                                                                                       | true | false | No Description Provided |
| isReady                     | 布尔值                                                                                       | true | false | No Description Provided |
| isRunning                   | 布尔值                                                                                       | true | false | No Description Provided |
| isShutdown                  | 布尔值                                                                                       | true | false | No Description Provided |
| isSingleplayer              | 布尔值                                                                                       | true | false | No Description Provided |
| isSpawningAnimals           | 布尔值                                                                                       | true | false | No Description Provided |
| isSpawningMonsters          | 布尔值                                                                                       | true | false | No Description Provided |
| isStopped                   | 布尔值                                                                                       | true | false | No Description Provided |
| levelKeys                   | stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt; | true | false | No Description Provided |
| maxPlayer                   | int                                                                                       | true | false | No Description Provided |
| moddeStatus                 | **invalid**                                                                               | true | false | No Description Provided |
| motd                        | string                                                                                    | true | false | No Description Provided |
| operatorUserPermissionLevel | int                                                                                       | true | false | No Description Provided |
| overworld                   | [ServerLevel](/vanilla/api/world/ServerLevel)                                             | true | false | No Description Provided |
| playerCount                 | int                                                                                       | true | false | No Description Provided |
| playerNames                 | string[]                                                                                  | true | false | No Description Provided |
| serverModName               | string                                                                                    | true | false | No Description Provided |
| serverVersion               | string                                                                                    | true | false | No Description Provided |
| spawnProtectionRadius       | int                                                                                       | true | false | No Description Provided |
| tickCount                   | int                                                                                       | true | false | No Description Provided |

