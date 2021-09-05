# IBlockRandomTick

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.functions.IBlockRandomTick;
```


## 方法

:::group{name=apply}

Return Type: void

```zenscript
IBlockRandomTick.apply(state as MCBlockState, world as MCServerWorld, pos as BlockPos, random as Random) as void
```

| 参数     | 类型                                                      | 描述                      |
| ------ | ------------------------------------------------------- | ----------------------- |
| state  | [MCBlockState #MC方块状态](/vanilla/api/block/MCBlockState) | No Description Provided |
| world  | [MCServerWorld](/vanilla/api/world/MCServerWorld)       | No Description Provided |
| 点      | [BlockPos](/vanilla/api/util/BlockPos)                  | No Description Provided |
| random | [Random](/vanilla/api/util/Random)                      | No Description Provided |


:::


