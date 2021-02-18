# MCWorld

Worlds represent a dimension within the game. They are used to interact with the blocks, mobs, and other variables within that dimension.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.MCWorld;
```


## Implemented Interfaces
MCWorld implements the following interfaces. That means all methods defined in these interfaces are also available in MCWorld

- AutoCloseable

## Casters

| Result type                                       | Is Implicit |
| ------------------------------------------------- | ----------- |
| [MCServerWorld](/vanilla/api/world/MCServerWorld) | false       |

## Methods

### asServerWorld

Return Type: [MCServerWorld](/vanilla/api/world/MCServerWorld)

```zenscript
MCWorld.asServerWorld() as MCServerWorld
world.asServerWorld();
```

### destroyBlock

Destroys a block within the world.

Return Type: boolean

```zenscript
MCWorld.destroyBlock(pos as BlockPos, doDrops as boolean) as boolean
world.destroyBlock(new BlockPos(0, 1, 2), true);
```

| Parameter | Type                                   | Description                                          |
| --------- | -------------------------------------- | ---------------------------------------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position of the block.                           |
| doDrops   | boolean型                               | Whether or not the block drops itself and it's loot. |


Destroys a block within the world.

Return Type: boolean

```zenscript
MCWorld.destroyBlock(pos as BlockPos, doDrops as boolean, breaker as MCEntity) as boolean
world.destroyBlock(new BlockPos(0, 1, 2), true, player);
```

| Parameter | Type                                     | Description                                          |
| --------- | ---------------------------------------- | ---------------------------------------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos)   | The position of the block.                           |
| doDrops   | boolean型                                 | Whether or not the block drops itself and it's loot. |
| breaker   | [MCEntity](/vanilla/api/entity/MCEntity) | The entity to break the block.                       |


### getBiome

Gets the biome at a given position.

Return Type: [MCBiome](/vanilla/api/world/MCBiome)

```zenscript
MCWorld.getBiome(pos as BlockPos) as MCBiome
world.getBiome(new BlockPos(0, 1, 2));
```

| Parameter | Type                                   | Description              |
| --------- | -------------------------------------- | ------------------------ |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position to look up. |


### getBlockState

Gets the block state at a given position.

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCWorld.getBlockState(pos as BlockPos) as MCBlockState
world.getBlockState(new BlockPos(0, 1, 2));
```

| Parameter | Type                                   | Description              |
| --------- | -------------------------------------- | ------------------------ |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position to look up. |


### getRedstonePower

Gets the redstone signal strength available to a position from a given direction.

Return Type: int

```zenscript
MCWorld.getRedstonePower(pos as BlockPos, direction as Direction) as int
world.getRedstonePower(new BlockPos(0, 1, 2), <direction:north>);
```

| Parameter | Type                                     | Description             |
| --------- | ---------------------------------------- | ----------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos)   | The position to check.  |
| direction | [Direction](/vanilla/api/util/Direction) | The direction to query. |


### getRedstonePowerFromNeighbors

Gets the highest redstone signal available to a position from any of it's neighbors.

Return Type: int

```zenscript
MCWorld.getRedstonePowerFromNeighbors(pos as BlockPos) as int
world.getRedstonePowerFromNeighbors(new BlockPos(0, 1, 2));
```

| Parameter | Type                                   | Description            |
| --------- | -------------------------------------- | ---------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position to check. |


### getStrongPower

Gets the highest strong (direct) redstone signal of any neighboring block.

Return Type: int

```zenscript
MCWorld.getStrongPower(pos as BlockPos) as int
world.getStrongPower(new BlockPos(0, 1, 2));
```

| Parameter | Type                                   | Description            |
| --------- | -------------------------------------- | ---------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position to check. |


### getTileData

Gets the tile entity data for a tile entity at a given position.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
MCWorld.getTileData(pos as BlockPos) as IData
world.getTileData(new BlockPos(0, 1, 2));
```

| Parameter | Type                                   | Description                      |
| --------- | -------------------------------------- | -------------------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position of the tile entity. |


### isAir

Checks if the block at a given position is air.

Return Type: boolean

```zenscript
MCWorld.isAir(pos as BlockPos) as boolean
world.isAir(new BlockPos(0, 1, 2));
```

| Parameter | Type                                   | Description              |
| --------- | -------------------------------------- | ------------------------ |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position to look up. |


### isBlockPowered

Checks if a given position is receiving a redstone signal.

Return Type: boolean

```zenscript
MCWorld.isBlockPowered(pos as BlockPos) as boolean
world.isBlockPowered(new BlockPos(0, 1, 2));
```

| Parameter | Type                                   | Description            |
| --------- | -------------------------------------- | ---------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position to check. |


### isLoaded

Checks if the block at a given position is in a loaded chunk.

Return Type: boolean

```zenscript
MCWorld.isLoaded(pos as BlockPos) as boolean
world.isLoaded(new BlockPos(0, 1, 2));
```

| Parameter | Type                                   | Description              |
| --------- | -------------------------------------- | ------------------------ |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position to look up. |


### isRainingAt

Checks if it is raining at a specific position. This can never be true if the position does not have direct line of sight to the sky.

Return Type: boolean

```zenscript
MCWorld.isRainingAt(pos as BlockPos) as boolean
world.isRainingAt(new BlockPos(0, 1, 2));
```

| Parameter | Type                                   | Description            |
| --------- | -------------------------------------- | ---------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position to check. |


### isRemote

Checks if the world is remote. This is always true on the rendering thread.

Return Type: boolean

```zenscript
MCWorld.isRemote() as boolean
world.isRemote();
```

### playEvent

Triggers a predetermined event on the client. Using this on a server or integrated server will send the event to all nearby players.

Return Type: void

```zenscript
MCWorld.playEvent(eventId as int, pos as BlockPos, data as int) as void
world.playEvent(2005, new BlockPos(0, 1, 2), 0);
```

| Parameter | Type                                   | Description                                               |
| --------- | -------------------------------------- | --------------------------------------------------------- |
| eventId   | int                                    | The ID of the event to play.                              |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | The position of the event.                                |
| data      | int                                    | Four bytes of additional data encoded as an integer. This |
 is generally unused. |


Triggers a predetermined event on the client. Using this on a server or integrated server will send the event to all nearby players.

Return Type: void

```zenscript
MCWorld.playEvent(excluded as MCPlayerEntity, eventId as int, pos as BlockPos, data as int) as void
world.playEvent(player, 2005, new BlockPos(0, 1, 2), 0);
```

| Parameter | Type                                                 | Description                                               |
| --------- | ---------------------------------------------------- | --------------------------------------------------------- |
| excluded  | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | An excluded player who will not receive the event.        |
| eventId   | int                                                  | The ID of the event to play.                              |
| pos       | [BlockPos](/vanilla/api/util/BlockPos)               | The position of the event.                                |
| data      | int                                                  | Four bytes of additional data encoded as an integer. This |
 is generally unused. |


### setBlockState

Sets the block and it's state at a given position.

Return Type: boolean

```zenscript
MCWorld.setBlockState(pos as BlockPos, state as MCBlockState) as boolean
world.setBlockState(new BlockPos(0, 1, 2), <blockstate:minecraft:iron_block>);
```

| Parameter | Type                                             | Description                       |
| --------- | ------------------------------------------------ | --------------------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos)           | The position to set the block at. |
| state     | [MCBlockState](/vanilla/api/blocks/MCBlockState) | The new state of the block.       |



## Properties

| 名称               | Type     | Has Getter | Has Setter |
| ---------------- | -------- | ---------- | ---------- |
| dayTime          | boolean型 | true       | false      |
| difficulty       | string   | true       | false      |
| difficultyLocked | boolean型 | true       | false      |
| dimension        | string   | true       | false      |
| gameTime         | long     | true       | false      |
| hardcore         | boolean型 | true       | false      |
| nightTime        | boolean型 | true       | false      |
| raining          | boolean型 | true       | false      |
| remote           | boolean型 | true       | false      |
| seaLevel         | int      | true       | false      |
| thundering       | boolean型 | true       | false      |
| timeOfDay        | long     | true       | false      |

