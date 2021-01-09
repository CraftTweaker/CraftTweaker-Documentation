# MCWorld

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.MCWorld;
```


## 已实现的接口
MCWorld implements the following interfaces. That means all methods defined in these interfaces are also available in MCWorld

- AutoCloseable
## 方法

### getBiome

Return Type: [MCBiome](/vanilla/api/world/MCBiome)

```zenscript
MCWorld.getBiome(pos as BlockPos) as MCBiome
```
| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |

### getBlockState

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCWorld.getBlockState(pos as BlockPos) as MCBlockState
```
| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |

### getRedstonePower

Return Type: int

```zenscript
MCWorld.getRedstonePower(pos as BlockPos, direction as Direction) as int
```
| 参数        | 类型                                       | 描述                      |
| --------- | ---------------------------------------- | ----------------------- |
| 点         | [BlockPos](/vanilla/api/util/BlockPos)   | No Description Provided |
| direction | [Direction](/vanilla/api/util/Direction) | No Description Provided |

### getRedstonePowerFromNeighbors

Return Type: int

```zenscript
MCWorld.getRedstonePowerFromNeighbors(pos as BlockPos) as int
```
| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |

### getStrongPower

Return Type: int

```zenscript
MCWorld.getStrongPower(pos as BlockPos) as int
```
| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |

### getTileData

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
MCWorld.getTileData(pos as BlockPos) as IData
```
| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |

### isBlockPowered

Return Type: boolean

```zenscript
MCWorld.isBlockPowered(pos as BlockPos) as boolean
```
| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |

### isRainingAt

Return Type: boolean

```zenscript
MCWorld.isRainingAt(pos as BlockPos) as boolean
```
| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |

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
| 参数    | 类型                                                       | 描述                      |
| ----- | -------------------------------------------------------- | ----------------------- |
| 点     | [BlockPos](/vanilla/api/util/BlockPos)                   | No Description Provided |
| state | [MCBlockState #MC方块状态](/vanilla/api/blocks/MCBlockState) | No Description Provided |


## 参数

| 名称               | 类型      | 可获得  | 可设置   |
| ---------------- | ------- | ---- | ----- |
| dayTime          | boolean | true | false |
| difficulty       | string  | true | false |
| difficultyLocked | boolean | true | false |
| dimension        | string  | true | false |
| gameTime         | long    | true | false |
| hardcore         | boolean | true | false |
| nightTime        | boolean | true | false |
| raining          | boolean | true | false |
| remote           | boolean | true | false |
| seaLevel         | int     | true | false |
| thundering       | boolean | true | false |

