# FallingBlock

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.type.falling.FallingBlock;
```


## Extending Block

FallingBlock extends [Block](/vanilla/api/block/Block). That means all methods available in [Block](/vanilla/api/block/Block) are also available in FallingBlock

## Implemented Interfaces
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

| Parameter |                    Type                     |     Description      |
|-----------|---------------------------------------------|----------------------|
| state     | [BlockState](/vanilla/api/block/BlockState) | The state the check. |


:::

## Methods

:::group{name=getDustColor}

Return Type: int

```zenscript
FallingBlock.getDustColor(state as BlockState, level as Level, pos as BlockPos) as int
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| state     | [BlockState](/vanilla/api/block/BlockState) |
| level     | [Level](/vanilla/api/world/Level)           |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::


