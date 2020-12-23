# MCWorld

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.MCWorld;
```


## Implemented Interfaces
MCWorld implements the following interfaces. That means all methods defined in these interfaces are also available in MCWorld

- AutoCloseable
## Methods

### getBiome

Return Type: [MCBiome](/vanilla/api/world/MCBiome)

```zenscript
MCWorld.getBiome(pos as BlockPos) as MCBiome
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
### getBlockState

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCWorld.getBlockState(pos as BlockPos) as MCBlockState
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
### getRedstonePower

Return Type: int

```zenscript
MCWorld.getRedstonePower(pos as BlockPos, direction as Direction) as int
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
| direction | [Direction](/vanilla/api/util/Direction) | No Description Provided |
### getRedstonePowerFromNeighbors

Return Type: int

```zenscript
MCWorld.getRedstonePowerFromNeighbors(pos as BlockPos) as int
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
### getStrongPower

Return Type: int

```zenscript
MCWorld.getStrongPower(pos as BlockPos) as int
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
### getTileData

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
MCWorld.getTileData(pos as BlockPos) as IData
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
### isBlockPowered

Return Type: boolean

```zenscript
MCWorld.isBlockPowered(pos as BlockPos) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
### isRainingAt

Return Type: boolean

```zenscript
MCWorld.isRainingAt(pos as BlockPos) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
### isRemote

Return Type: boolean

```zenscript
MCWorld.isRemote() as boolean
myMCWorld.isRemote();
```
### setBlockState

Return Type: boolean

```zenscript
MCWorld.setBlockState(pos as BlockPos, state as MCBlockState) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
| state | [MCBlockState](/vanilla/api/blocks/MCBlockState) | No Description Provided |

## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| dayTime | boolean | true | false |
| difficulty | string | true | false |
| difficultyLocked | boolean | true | false |
| dimension | string | true | false |
| gameTime | long | true | false |
| hardcore | boolean | true | false |
| nightTime | boolean | true | false |
| raining | boolean | true | false |
| remote | boolean | true | false |
| seaLevel | int | true | false |
| thundering | boolean | true | false |

