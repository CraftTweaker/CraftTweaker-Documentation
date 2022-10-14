# FallingBlock

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.type.falling.FallingBlock;
```


## Extending Block

FallingBlock extends [Block](/vanilla/api/block/Block). That means all methods available in [Block](/vanilla/api/block/Block) are also available in FallingBlock

## 已实现的接口
FallingBlock implements the following interfaces. That means all methods defined in these interfaces are also available in FallingBlock

- [Fallable](/vanilla/api/block/type/falling/Fallable)

## Static Methods

:::group{name=isFree}

Checks if the given blockstate stops a block from falling through it.

Returns: True if the blockstate can be fallen through, false otherwise.  
Return Type: boolean

```zenscript
// FallingBlock.isFree(state as BlockState) as boolean

FallingBlock.isFree(<blockstate:minecraft:dirt>);
```

| 参数    | 类型                                          | 描述                   |
| ----- | ------------------------------------------- | -------------------- |
| state | [BlockState](/vanilla/api/block/BlockState) | The state the check. |


:::

## 使用方式

:::group{name=getDustColor}

Return Type: int

```zenscript
FallingBlock.getDustColor(state as BlockState, level as Level, pos as BlockPos) as int
```

| 参数    | 类型                                          |
| ----- | ------------------------------------------- |
| state | [BlockState](/vanilla/api/block/BlockState) |
| level | [Level](/vanilla/api/world/Level)           |
| 点     | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::


