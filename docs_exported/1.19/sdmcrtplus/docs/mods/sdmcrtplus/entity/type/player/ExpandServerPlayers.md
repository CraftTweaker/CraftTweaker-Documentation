# Expansion for ServerPlayer

## Methods

:::group{name=getRespawnPosition}

Will allow you to get the player's rebirth point. If there is a bed, then the coordinates of the bed, if not, then the global point in the world.

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ServerPlayer.getRespawnPosition() as BlockPos

serverPlayer.getRespawnPosition();
```

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


