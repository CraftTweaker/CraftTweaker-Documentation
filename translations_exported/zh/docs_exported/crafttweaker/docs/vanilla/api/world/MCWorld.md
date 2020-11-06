# MCWorld

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.world.MCWorld
```

## 方法
### getBiome

Return type: [crafttweaker.api.world.MCBiome](/vanilla/api/world/MCBiome)

```zenscript
myMCWorld.getBiome(pos as crafttweaker.api.util.BlockPos);
```

| 参数 | 类型                                                           | 描述                      |
| -- | ------------------------------------------------------------ | ----------------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### getBlockState

返回类型： [craftbiner.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCWorld.getBlockState(pos as crafttweaker.api.util.BlockPos);
```

| 参数 | 类型                                                           | 描述                      |
| -- | ------------------------------------------------------------ | ----------------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### getRedstonePower

Return type: int

```zenscript
myMCWorld.getRedstonePower(pos as crafttweaker.api.util.BlockPos, direction as crafttweaker.api.util.Direction);
```

| 参数        | 类型                                                             | 描述                      |
| --------- | -------------------------------------------------------------- | ----------------------- |
| 点         | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)   | No description provided |
| direction | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | No description provided |


### getRedstonePowerFromNeighbors

Return type: int

```zenscript
myMCWorld.getRedstonePowerFromNeighbors(pos as crafttweaker.api.util.BlockPos);
```

| 参数 | 类型                                                           | 描述                      |
| -- | ------------------------------------------------------------ | ----------------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### getStrongPower

Return type: int

```zenscript
myMCWorld.getStrongPower(pos as crafttweaker.api.util.BlockPos);
```

| 参数 | 类型                                                           | 描述                      |
| -- | ------------------------------------------------------------ | ----------------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### getTileData

返回类型： [craftbiner.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMCWorld.getTileData(pos as crafttweaker.api.util.BlockPos);
```

| 参数 | 类型                                                           | 描述                      |
| -- | ------------------------------------------------------------ | ----------------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### isBlockPowered

Return type: boolean

```zenscript
myMCWorld.isBlockPowered(pos as crafttweaker.api.util.BlockPos);
```

| 参数 | 类型                                                           | 描述                      |
| -- | ------------------------------------------------------------ | ----------------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


### isRainingAt

Return type: boolean

```zenscript
myMCWorld.isRainingAt(pos as crafttweaker.api.util.BlockPos);
```

| 参数 | 类型                                                           | 描述                      |
| -- | ------------------------------------------------------------ | ----------------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |


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

| 参数    | 类型                                                                      | 描述                      |
| ----- | ----------------------------------------------------------------------- | ----------------------- |
| 点     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | No description provided |
| state | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | No description provided |



## 参数

| 名称               | 类型      | 可获得  | 可设置   |
| ---------------- | ------- | ---- | ----- |
| dayTime          | boolean | true | false |
| difficulty       | String  | true | false |
| difficultyLocked | boolean | true | false |
| dimension        | String  | true | false |
| gameTime         | long    | true | false |
| hardcore         | boolean | true | false |
| nightTime        | boolean | true | false |
| raining          | boolean | true | false |
| remote           | boolean | true | false |
| seaLevel         | int     | true | false |
| thundering       | boolean | true | false |

