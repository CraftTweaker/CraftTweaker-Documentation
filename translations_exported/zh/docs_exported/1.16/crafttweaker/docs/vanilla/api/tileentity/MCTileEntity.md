# MCTileEntity

Represents a block entity.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tileentity.MCTileEntity;
```


## 使用方式

:::group{name=updateData}

Return Type: void

```zenscript
MCTileEntity.updateData(data as MapData) as void
```

| 参数   | 类型                                         | 描述                      |
| ---- | ------------------------------------------ | ----------------------- |
| data | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::


## 参数

| 名称    | 类型                                         | 可获得  | 可设置   | 描述                      |
| ----- | ------------------------------------------ | ---- | ----- | ----------------------- |
| data  | [MapData #地图数据](/vanilla/api/data/MapData) | true | false | No Description Provided |
| 点     | [BlockPos](/vanilla/api/util/BlockPos)     | true | false | No Description Provided |
| world | [MCWorld](/vanilla/api/world/MCWorld)      | true | false | No Description Provided |

