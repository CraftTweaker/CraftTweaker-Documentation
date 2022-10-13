# IBlockIsSideInvisible

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.functions.IBlockIsSideInvisible;
```


## Static Properties

| 名称         | 类型                                                                                | 可获得  | 可设置   | 描述                      |
| ---------- | --------------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| GLASS_LIKE | [IBlockIsSideInvisible](/mods/contenttweaker/API/functions/IBlockIsSideInvisible) | true | false | No Description Provided |

## 使用方式

:::group{name=apply}

Return Type: boolean

```zenscript
IBlockIsSideInvisible.apply(thisBlock as CoTBlockAdvanced, state as MCBlockState, adjacentBlockState as MCBlockState, side as Direction) as boolean
```

| 参数                 | 类型                                                                          | 描述                      |
| ------------------ | --------------------------------------------------------------------------- | ----------------------- |
| thisBlock          | [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced) | No Description Provided |
| state              | [MCBlockState #MC方块状态](/vanilla/api/block/MCBlockState)                     | No Description Provided |
| adjacentBlockState | [MCBlockState #MC方块状态](/vanilla/api/block/MCBlockState)                     | No Description Provided |
| side               | [Direction](/vanilla/api/util/Direction)                                    | No Description Provided |


:::


