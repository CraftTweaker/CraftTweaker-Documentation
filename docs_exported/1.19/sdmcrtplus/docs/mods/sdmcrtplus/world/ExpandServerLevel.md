# Expansion for ServerLevel

## Methods

:::group{name=forceChunk}

Forces a chunk to be loaded for the given mod with the "owner" of the ticket being a given block position.
     You will also need to unload chunks for optimization. So don't forget the coordinates.

Return Type: boolean

```zenscript
ServerLevel.forceChunk(position as BlockPos, add as boolean, tick as boolean) as boolean
```

| Parameter |                    Type                     |                                     Description                                      |
|-----------|---------------------------------------------|--------------------------------------------------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) | - The position that will be loaded.                                                  |
| add       | boolean                                     | - true to force the chunk, false to unforce the chunk.                               |
| tick      | boolean                                     | – true to make the chunk receive full chunk ticks even if there is no player nearby. |


:::

:::group{name=forceChunk}

Forces a chunk to be loaded for the given mod with the "owner" of the ticket being the UUID of the given entity.

Return Type: boolean

```zenscript
ServerLevel.forceChunk(entity as Entity, position as BlockPos, add as boolean, tick as boolean) as boolean
```

| Parameter |                    Type                     |                                     Description                                      |
|-----------|---------------------------------------------|--------------------------------------------------------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity)        | - The creature that will load the chunk                                              |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) | - The position that will be loaded.                                                  |
| add       | boolean                                     | - true to force the chunk, false to unforce the chunk.                               |
| tick      | boolean                                     | - true to make the chunk receive full chunk ticks even if there is no player nearby. |


:::

:::group{name=forceChunk}

Forces a chunk to be loaded for the given mod with the "owner" of the ticket being a given block position.
     You will also need to unload chunks for optimization. So don't forget the coordinates.

Return Type: boolean

```zenscript
ServerLevel.forceChunk(positionOwner as BlockPos, position as BlockPos, add as boolean, tick as boolean) as boolean
```

|   Parameter   |                    Type                     |                                     Description                                      |
|---------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| positionOwner | [BlockPos](/vanilla/api/util/math/BlockPos) | - The position that will load the chunk. This is the actual owner.                   |
| position      | [BlockPos](/vanilla/api/util/math/BlockPos) | Owner - The position that will load the chunk. This is the actual owner.             |
| add           | boolean                                     | - true to force the chunk, false to unforce the chunk.                               |
| tick          | boolean                                     | – true to make the chunk receive full chunk ticks even if there is no player nearby. |


:::

:::group{name=forceChunk}

Forces a chunk to be loaded for the given mod with the "owner" of the ticket being a given UUID.

Return Type: boolean

```zenscript
ServerLevel.forceChunk(uuid as string, position as BlockPos, add as boolean, tick as boolean) as boolean
```

| Parameter |                    Type                     |                                     Description                                      |
|-----------|---------------------------------------------|--------------------------------------------------------------------------------------|
| uuid      | string                                      | - The UUID of the creature that is responsible for loading the chunk.                |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) | - The position that will be loaded                                                   |
| add       | boolean                                     | - true to force the chunk, false to unforce the chunk.                               |
| tick      | boolean                                     | - true to make the chunk receive full chunk ticks even if there is no player nearby. |


:::

:::group{name=getStructureManager}

Return Type: [StructureManager](/mods/sdmcrtplus/world/level/StructureManager)

```zenscript
// ServerLevel.getStructureManager() as StructureManager

serverLevel.getStructureManager();
```

:::

:::group{name=getStructureTemplateManager}

Return Type: [StructureTemplateManager](/mods/sdmcrtplus/world/level/levelgen/structure/templatesystem/StructureTemplateManager)

```zenscript
// ServerLevel.getStructureTemplateManager() as StructureTemplateManager

serverLevel.getStructureTemplateManager();
```

:::

:::group{name=getStructuresNameOnPos}

Returns a list of all structures located at these coordinates

Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
ServerLevel.getStructuresNameOnPos(pos as BlockPos) as stdlib.List<ResourceLocation>
```

| Parameter |                    Type                     | Description |
|-----------|---------------------------------------------|-------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | coordinates |


:::

:::group{name=getStructuresOnPos}

Returns a list of all structures located at these coordinates

Return Type: stdlib.List&lt;[Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure)&gt;

```zenscript
ServerLevel.getStructuresOnPos(pos as BlockPos) as stdlib.List<Structure>
```

| Parameter |                    Type                     | Description |
|-----------|---------------------------------------------|-------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | coordinates |


:::

:::group{name=hasForcedChunks}

Checks if a level has any forced chunks. Mainly used for seeing if a level should continue ticking with no players in it.

Return Type: boolean

```zenscript
// ServerLevel.hasForcedChunks() as boolean

serverLevel.hasForcedChunks();
```

:::

:::group{name=placeStructure}

Allows you to generate a structure in the same way as it would be possible with the place command

Return Type: boolean

```zenscript
ServerLevel.placeStructure(name as ResourceLocation, position as BlockPos) as boolean
```

| Parameter |                            Type                            |                      Description                      |
|-----------|------------------------------------------------------------|-------------------------------------------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | - ID of the structure to be generated.                |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)                | - The position where the structure will be generated. |


:::

:::group{name=placeTemplate}

Allows you to generate a template in the same way as it would be possible with the place command

Return Type: boolean

```zenscript
ServerLevel.placeTemplate(name as ResourceLocation, position as BlockPos, seed as int) as boolean
```

| Parameter |                            Type                            |                           Description                           |
|-----------|------------------------------------------------------------|-----------------------------------------------------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | - ID of the template to be generated.                           |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)                | - The position where the template will be generated.            |
| seed      | int                                                        | - Unique SEED. Which answers how the template will be generated |


:::

:::group{name=placeTemplate}

Allows you to generate a template in the same way as it would be possible with the place command

Return Type: boolean

```zenscript
ServerLevel.placeTemplate(name as ResourceLocation, position as BlockPos, integrity as int, seed as int) as boolean
```

| Parameter |                            Type                            |                                      Description                                       |
|-----------|------------------------------------------------------------|----------------------------------------------------------------------------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | - ID of the template to be generated.                                                  |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)                | - The position where the template will be generated.                                   |
| integrity | int                                                        | - In fact, this is the same as rotation. But it seems like no. I don't know (MAX 1.0F) |
| seed      | int                                                        | - Unique SEED. Which answers how the template will be generated                        |


:::

:::group{name=resetChunk}

Completely recreates chunks, but causes lags! Very strong lags. In general, it works as if it doesn't work :D
 Can kill the server !

Return Type: int

```zenscript
ServerLevel.resetChunk(position as BlockPos, range as int, skipOldChunks as boolean) as int
```

|   Parameter   |                    Type                     |
|---------------|---------------------------------------------|
| position      | [BlockPos](/vanilla/api/util/math/BlockPos) |
| range         | int                                         |
| skipOldChunks | boolean                                     |


:::

:::group{name=setDefaultSpawnPos}

Allows you to set a standard rebirth point for the world. That is, if a player dies and he does not have a bed, then he will be reborn in the place where you set the point.

Return Type: boolean

```zenscript
ServerLevel.setDefaultSpawnPos(dimension as ResourceLocation, pos as BlockPos, spawnAngle as float) as boolean
```

| Parameter  |                            Type                            |                      Description                      |
|------------|------------------------------------------------------------|-------------------------------------------------------|
| dimension  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | - The dimension in which the point will be set        |
| pos        | [BlockPos](/vanilla/api/util/math/BlockPos)                | - Coordinates by which the point will be set.         |
| spawnAngle | float                                                      | - The angle of rotation of the player during respawn. |


:::


