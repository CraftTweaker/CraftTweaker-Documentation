# LiquidBlockContainer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.block.LiquidBlockContainer;
```


## Methods

:::group{name=canPlaceLiquid}

Return Type: boolean

```zenscript
LiquidBlockContainer.canPlaceLiquid(blockGetter as BlockGetter, pos as BlockPos, blockState as BlockState, fluid as Fluid) as boolean
```

|  Parameter  |                          Type                           |
|-------------|---------------------------------------------------------|
| blockGetter | [BlockGetter](/mods/sdmcrtplus/world/level/BlockGetter) |
| pos         | [BlockPos](/vanilla/api/util/math/BlockPos)             |
| blockState  | [BlockState](/vanilla/api/block/BlockState)             |
| fluid       | [Fluid](/vanilla/api/fluid/Fluid)                       |


:::

:::group{name=placeLiquid}

Return Type: boolean

```zenscript
LiquidBlockContainer.placeLiquid(levelAccessor as invalid, pos as BlockPos, blockState as BlockState, fluidState as invalid) as boolean
```

|   Parameter   |                    Type                     |
|---------------|---------------------------------------------|
| levelAccessor | **invalid**                                 |
| pos           | [BlockPos](/vanilla/api/util/math/BlockPos) |
| blockState    | [BlockState](/vanilla/api/block/BlockState) |
| fluidState    | **invalid**                                 |


:::


