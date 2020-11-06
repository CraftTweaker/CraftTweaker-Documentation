# MCWorld

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.  
```zenscript
crafttweaker.api.world.MCWorld
```

## Methods
### getBiome

Return type: [crafttweaker.api.world.MCBiome](/vanilla/api/world/MCBiome)

```zenscript
myMCWorld.getBiome(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### getBlockState

Return type: [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCWorld.getBlockState(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### getRedstonePower

Return type: int

```zenscript
myMCWorld.getRedstonePower(pos as crafttweaker.api.util.BlockPos, direction as crafttweaker.api.util.Direction);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |
| direction | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | No description provided |


### getRedstonePowerFromNeighbors

Return type: int

```zenscript
myMCWorld.getRedstonePowerFromNeighbors(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### getStrongPower

Return type: int

```zenscript
myMCWorld.getStrongPower(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### getTileData

Return type: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMCWorld.getTileData(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### isBlockPowered

Return type: boolean

```zenscript
myMCWorld.isBlockPowered(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### isRainingAt

Return type: boolean

```zenscript
myMCWorld.isRainingAt(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### isRemote

Return type: boolean

```zenscript
myMCWorld.isRemote();
```

### setBlockState

Return type: boolean

```zenscript
myMCWorld.setBlockState(pos as crafttweaker.api.util.BlockPos, state as crafttweaker.api.block.MCBlockState);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |
| state | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | No description provided |



## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| dayTime | boolean | true | false |
| difficulty | String | true | false |
| difficultyLocked | boolean | true | false |
| dimension | String | true | false |
| gameTime | long | true | false |
| hardcore | boolean | true | false |
| nightTime | boolean | true | false |
| raining | boolean | true | false |
| remote | boolean | true | false |
| seaLevel | int | true | false |
| thundering | boolean | true | false |

