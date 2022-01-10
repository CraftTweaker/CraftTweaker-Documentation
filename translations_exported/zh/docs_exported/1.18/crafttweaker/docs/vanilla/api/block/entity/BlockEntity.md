# BlockEntity

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.entity.BlockEntity;
```


## 使用方式

:::group{name=getBlockPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BlockEntity.getBlockPos() as BlockPos

myBlockEntity.getBlockPos();
```

:::

:::group{name=getBlockState}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// BlockEntity.getBlockState() as BlockState

myBlockEntity.getBlockState();
```

:::

:::group{name=getLevel}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// BlockEntity.getLevel() as Level

myBlockEntity.getLevel();
```

:::

:::group{name=hasLevel}

Return Type: boolean

```zenscript
// BlockEntity.hasLevel() as boolean

myBlockEntity.hasLevel();
```

:::

:::group{name=updateData}

Return Type: void

```zenscript
BlockEntity.updateData(data as MapData) as void
```

| 参数   | 类型                                         | 描述                      |
| ---- | ------------------------------------------ | ----------------------- |
| data | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::


## 参数

| 名称         | 类型                                          | 可获得  | 可设置   | 描述                      |
| ---------- | ------------------------------------------- | ---- | ----- | ----------------------- |
| blockPos   | [BlockPos](/vanilla/api/util/math/BlockPos) | true | false | No Description Provided |
| blockState | [BlockState](/vanilla/api/block/BlockState) | true | false | No Description Provided |
| data       | [MapData #地图数据](/vanilla/api/data/MapData)  | true | false | No Description Provided |
| hasLevel   | 布尔值                                         | true | false | No Description Provided |
| level      | [Level](/vanilla/api/world/Level)           | true | false | No Description Provided |

