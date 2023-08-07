# Expansion for Player

## Methods

:::group{name=changeDimension}



```zenscript
Player.changeDimension(res as ResourceLocation, method as boolean)
```

| Parameter |                            Type                            |                                                                   Description                                                                    |
|-----------|------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| res       | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The dimension to move to (<resource:minecraft:the_end>)                                                                                          |
| method    | boolean                                                    | allows you to switch methods. Depending on the value. There will be different logic. This is necessary in case one of the methods stops working. |


:::

:::group{name=getClient}

Return Type: **invalid**

```zenscript
// Player.getClient() as invalid

player.getClient();
```

:::

:::group{name=getEnderChestInventory}

Return Type: [EnderChestInventory](/mods/sixikutils/utils/entity/type/player/inventory/EnderChestInventory)

```zenscript
// Player.getEnderChestInventory() as EnderChestInventory

player.getEnderChestInventory();
```

:::

:::group{name=getExperienceProgress}

Return Type: float

```zenscript
// Player.getExperienceProgress() as float

player.getExperienceProgress();
```

:::

:::group{name=getLastActionTime}

Writes to long when the player last did anything.

Return Type: long

```zenscript
// Player.getLastActionTime() as long

player.getLastActionTime();
```

:::

:::group{name=getRespawnAngle}

Return Type: float

```zenscript
// Player.getRespawnAngle() as float

player.getRespawnAngle();
```

:::

:::group{name=getRespawnDimension}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// Player.getRespawnDimension() as ResourceLocation

player.getRespawnDimension();
```

:::

:::group{name=getRespawnPosition}

Allows you to get the position where the player will appear. If the player does not have a bed or it is broken, then the coordinates will be the point of rebirth of the world

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// Player.getRespawnPosition() as BlockPos

player.getRespawnPosition();
```

:::

:::group{name=getStatisticsManager}

Return Type: [StatsCounter](/mods/sixikutils/utils/entity/type/player/StatsCounter)

```zenscript
// Player.getStatisticsManager() as StatsCounter

player.getStatisticsManager();
```

:::

:::group{name=getxRot}

Return Type: float

```zenscript
// Player.getxRot() as float

player.getxRot();
```

:::

:::group{name=getyBodyRot}

Return Type: float

```zenscript
// Player.getyBodyRot() as float

player.getyBodyRot();
```

:::

:::group{name=getyHeadRot}

Return Type: float

```zenscript
// Player.getyHeadRot() as float

player.getyHeadRot();
```

:::

:::group{name=getyRot}

Return Type: float

```zenscript
// Player.getyRot() as float

player.getyRot();
```

:::

:::group{name=isRespawnForced}

Return Type: boolean

```zenscript
// Player.isRespawnForced() as boolean

player.isRespawnForced();
```

:::

:::group{name=isShiftKeyDown}

Return Type: boolean

```zenscript
// Player.isShiftKeyDown() as boolean

player.isShiftKeyDown();
```

:::

:::group{name=playerDropItemIndex}



```zenscript
Player.playerDropItemIndex(index as int, flag as boolean)
```

| Parameter |  Type   |                 Description                 |
|-----------|---------|---------------------------------------------|
| index     | int     | the slot from which the item will be thrown |
| flag      | boolean | Is this an event ? (PlayerTossEvent)        |


:::

:::group{name=randomTeleport}



```zenscript
Player.randomTeleport(pos as BlockPos, flag as boolean)
```

| Parameter |                    Type                     |                      Description                      |
|-----------|---------------------------------------------|-------------------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | Coordinates within which the teleport will be located |
| flag      | boolean                                     | Is this an event ? (Enderpearl Event)                 |


:::

:::group{name=setRespawnPosition}



```zenscript
Player.setRespawnPosition(res as ResourceLocation, pos as BlockPos, respawnAngle as float, respawnForced as boolean, flag as boolean)
```

|   Parameter   |                            Type                            |                                                       Description                                                        |
|---------------|------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| res           | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The dimension to move to (<resource:minecraft:the_end>)                                                                  |
| pos           | [BlockPos](/vanilla/api/util/math/BlockPos)                | The position to be moved to                                                                                              |
| respawnAngle  | float                                                      | The angle of rotation.                                                                                                   |
| respawnForced | boolean                                                    | If true, this is equivalent to using the teleport command, if false, this is the same as the player entering the portal. |
| flag          | boolean                                                    | Set a permanent spawn point                                                                                              |


:::

:::group{name=setxRot}

```zenscript
Player.setxRot(rot as float)
```

| Parameter | Type  |
|-----------|-------|
| rot       | float |


:::

:::group{name=setyBodyRot}

```zenscript
Player.setyBodyRot(yaw as float)
```

| Parameter | Type  |
|-----------|-------|
| yaw       | float |


:::

:::group{name=setyBodyRotO}

```zenscript
Player.setyBodyRotO(yaw as float)
```

| Parameter | Type  |
|-----------|-------|
| yaw       | float |


:::

:::group{name=setyHeadRot}

```zenscript
Player.setyHeadRot(yaw as float)
```

| Parameter | Type  |
|-----------|-------|
| yaw       | float |


:::

:::group{name=setyHeadRotO}

```zenscript
Player.setyHeadRotO(yaw as float)
```

| Parameter | Type  |
|-----------|-------|
| yaw       | float |


:::

:::group{name=setyRot}

```zenscript
Player.setyRot(yaw as float)
```

| Parameter | Type  |
|-----------|-------|
| yaw       | float |


:::


## Properties

|    Name    |                                              Type                                              | Has Getter | Has Setter |
|------------|------------------------------------------------------------------------------------------------|------------|------------|
| bodyrot    | float                                                                                          | true       | true       |
| enderChest | [EnderChestInventory](/mods/sixikutils/utils/entity/type/player/inventory/EnderChestInventory) | true       | false      |
| headrot    | float                                                                                          | true       | true       |
| xrot       | float                                                                                          | true       | true       |
| yBodyRotO  | [Player](/vanilla/api/entity/type/player/Player)                                               | false      | true       |
| yHeadRotO  | [Player](/vanilla/api/entity/type/player/Player)                                               | false      | true       |
| yrot       | float                                                                                          | true       | true       |

