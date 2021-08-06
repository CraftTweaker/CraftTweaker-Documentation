# IBlockNeighborChanged

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.functions.IBlockNeighborChanged;
```


## 方法

:::group{name=apply}

Return Type: void

```zenscript
IBlockNeighborChanged.apply(state as MCBlockState, world as MCWorld, pos as BlockPos, block as MCBlock, fromPos as BlockPos, isMoving as boolean) as void
```

| 参数       | 类型                                                      | 描述                      |
| -------- | ------------------------------------------------------- | ----------------------- |
| state    | [MCBlockState #MC方块状态](/vanilla/api/block/MCBlockState) | No Description Provided |
| world    | [MCWorld](/vanilla/api/world/MCWorld)                   | No Description Provided |
| 点        | [BlockPos](/vanilla/api/util/BlockPos)                  | No Description Provided |
| block    | [MCBlock #MC方块](/vanilla/api/block/MCBlock)             | No Description Provided |
| fromPos  | [BlockPos](/vanilla/api/util/BlockPos)                  | No Description Provided |
| isMoving | boolean                                                 | No Description Provided |


:::


