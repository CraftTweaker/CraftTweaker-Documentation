# LayeredCauldronBlock

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.type.cauldron.LayeredCauldronBlock;
```


## Extending AbstractCauldronBlock

LayeredCauldronBlock extends [AbstractCauldronBlock](/vanilla/api/block/type/cauldron/AbstractCauldronBlock). That means all methods available in [AbstractCauldronBlock](/vanilla/api/block/type/cauldron/AbstractCauldronBlock) are also available in LayeredCauldronBlock

## Static Methods

:::group{name=lowerFillLevel}

Lowers the fill level of the layered Cauldron at the given position.

```zenscript
// LayeredCauldronBlock.lowerFillLevel(blockState as BlockState, level as Level, position as BlockPos)

LayeredCauldronBlock.lowerFillLevel(<blockstate:minecraft:cauldron:level=3>, level, new BlockPos(1, 2, 3););
```

| Parameter  |                    Type                     |           Description           |
|------------|---------------------------------------------|---------------------------------|
| blockState | [BlockState](/vanilla/api/block/BlockState) | The blockstate of the cauldron. |
| level      | [Level](/vanilla/api/world/Level)           | The current level.              |
| position   | [BlockPos](/vanilla/api/util/math/BlockPos) | The position of the cauldron.   |


:::

