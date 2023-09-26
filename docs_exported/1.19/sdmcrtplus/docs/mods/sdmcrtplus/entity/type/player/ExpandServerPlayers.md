# Expansion for ServerPlayer

## Methods

:::group{name=getLastActionTime}

Returns the last time the player moved

Return Type: long

```zenscript
// ServerPlayer.getLastActionTime() as long

serverPlayer.getLastActionTime();
```

:::

:::group{name=getRespawnDimension}

Allows you to get a dimension in which the player will be reborn after death or after teleportation from the ender world

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// ServerPlayer.getRespawnDimension() as ResourceLocation

serverPlayer.getRespawnDimension();
```

:::

:::group{name=getRespawnPosition}

Will allow you to get the player's rebirth point. If there is a bed, then the coordinates of the bed, if not, then the global point in the world.

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ServerPlayer.getRespawnPosition() as BlockPos

serverPlayer.getRespawnPosition();
```

:::

:::group{name=playNotifySound}

```zenscript
ServerPlayer.playNotifySound(sound as ResourceLocation, volume as float, pitch as float)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| sound     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| volume    | float                                                      |
| pitch     | float                                                      |


:::

:::group{name=setPlayerInput}

```zenscript
ServerPlayer.setPlayerInput(posX as float, posY as float, jump as boolean, shiftKey as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| posX      | float   |
| posY      | float   |
| jump      | boolean |
| shiftKey  | boolean |


:::

:::group{name=setRespawnPosition}

Modifies the player's objection point.

Return Type: boolean

```zenscript
ServerPlayer.setRespawnPosition(position as BlockPos, dimension as ResourceLocation, respawnAngle as int, respawnForced as boolean, sendSetSpawnMessage as boolean) as boolean
```

|      Parameter      |                            Type                            |                                  Description                                  |
|---------------------|------------------------------------------------------------|-------------------------------------------------------------------------------|
| position            | [BlockPos](/vanilla/api/util/math/BlockPos)                | - Coordinates on which the player will appear                                 |
| dimension           | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | - The dimension in which the player will appear                               |
| respawnAngle        | int                                                        | - The angle of rotation of the character's body when respawn                  |
| respawnForced       | boolean                                                    | - This objection is forced. Using the respawn() method ?                      |
| sendSetSpawnMessage | boolean                                                    | - Send a notification to the player that his respawn point has been changed ? |


:::

:::group{name=trackStartFallingPosition}

```zenscript
// ServerPlayer.trackStartFallingPosition()

serverPlayer.trackStartFallingPosition();
```

:::


## Properties

|       Name       |                            Type                            | Has Getter | Has Setter |                                                                    Description                                                                    |
|------------------|------------------------------------------------------------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| lastActionTime   | long                                                       | true       | false      | Returns the last time the player moved                                                                                                            |
| respawnDimension | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      | Allows you to get a dimension in which the player will be reborn after death or after teleportation from the ender world                          |
| respawnPosition  | [BlockPos](/vanilla/api/util/math/BlockPos)                | true       | false      | Will allow you to get the player's rebirth point. If there is a bed, then the coordinates of the bed, if not, then the global point in the world. |

