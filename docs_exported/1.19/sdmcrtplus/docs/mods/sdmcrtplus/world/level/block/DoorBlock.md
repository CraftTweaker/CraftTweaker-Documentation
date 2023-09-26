# DoorBlock

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.block.DoorBlock;
```


## Extending Block

DoorBlock extends [Block](/vanilla/api/block/Block). That means all methods available in [Block](/vanilla/api/block/Block) are also available in DoorBlock

## Methods

:::group{name=isPathfindable}

Return Type: boolean

```zenscript
DoorBlock.isPathfindable(blockState as BlockState, blockGetter as BlockGetter, pos as BlockPos, pathComputationType as PathComputationType) as boolean
```

|      Parameter      |                                        Type                                        |
|---------------------|------------------------------------------------------------------------------------|
| blockState          | [BlockState](/vanilla/api/block/BlockState)                                        |
| blockGetter         | [BlockGetter](/mods/sdmcrtplus/world/level/BlockGetter)                            |
| pos                 | [BlockPos](/vanilla/api/util/math/BlockPos)                                        |
| pathComputationType | [PathComputationType](/mods/sdmcrtplus/world/level/pathfinder/PathComputationType) |


:::

:::group{name=setOpen}

```zenscript
DoorBlock.setOpen(entity as Entity?, level as Level, blockState as BlockState, pos as BlockPos, b as boolean)
```

| Parameter  |                    Type                     |
|------------|---------------------------------------------|
| entity     | [Entity](/vanilla/api/entity/Entity)?       |
| level      | [Level](/vanilla/api/world/Level)           |
| blockState | [BlockState](/vanilla/api/block/BlockState) |
| pos        | [BlockPos](/vanilla/api/util/math/BlockPos) |
| b          | boolean                                     |


:::


