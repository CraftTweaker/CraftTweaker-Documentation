# BlockEntity

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.entity.BlockEntity;
```


## Extending CapabilityProvider&lt;BlockEntity&gt;

BlockEntity extends [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[BlockEntity](/vanilla/api/block/entity/BlockEntity)&gt;. That means all methods available in [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[BlockEntity](/vanilla/api/block/entity/BlockEntity)&gt; are also available in BlockEntity

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

Return Type: [Level](/vanilla/api/world/Level)?

```zenscript
// BlockEntity.getLevel() as Level?

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

:::group{name=setData}

```zenscript
BlockEntity.setData(data as MapData)
```

| 参数   | 类型                                         |
| ---- | ------------------------------------------ |
| data | [MapData #地图数据](/vanilla/api/data/MapData) |


:::

:::group{name=updateData}

```zenscript
BlockEntity.updateData(data as MapData)
```

| 参数   | 类型                                         |
| ---- | ------------------------------------------ |
| data | [MapData #地图数据](/vanilla/api/data/MapData) |


:::


## 参数

| 名称         | 类型                                          | 可获得  | 可设置   |
| ---------- | ------------------------------------------- | ---- | ----- |
| blockPos   | [BlockPos](/vanilla/api/util/math/BlockPos) | true | false |
| blockState | [BlockState](/vanilla/api/block/BlockState) | true | false |
| data       | [MapData #地图数据](/vanilla/api/data/MapData)  | true | true  |
| hasLevel   | 布尔值                                         | true | false |
| level      | [Level](/vanilla/api/world/Level)?          | true | false |

