# AbstractBlockGate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.blocks.decorative.AbstractBlockGate;
```


## Extending DoorBlock

AbstractBlockGate extends [DoorBlock](/mods/sdmcrtplus/world/level/block/DoorBlock). That means all methods available in [DoorBlock](/mods/sdmcrtplus/world/level/block/DoorBlock) are also available in AbstractBlockGate

## Methods

:::group{name=getBlockHardness}

Return Type: float

```zenscript
AbstractBlockGate.getBlockHardness(blockState as BlockState, worldIn as BlockGetter, pos as BlockPos) as float
```

| Parameter  |                          Type                           |
|------------|---------------------------------------------------------|
| blockState | [BlockState](/vanilla/api/block/BlockState)             |
| worldIn    | [BlockGetter](/mods/sdmcrtplus/world/level/BlockGetter) |
| pos        | [BlockPos](/vanilla/api/util/math/BlockPos)             |


:::

:::group{name=removeGate}

```zenscript
AbstractBlockGate.removeGate(world as Level, startPos as BlockPos, facing as Direction)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| world     | [Level](/vanilla/api/world/Level)                  |
| startPos  | [BlockPos](/vanilla/api/util/math/BlockPos)        |
| facing    | [Direction](/vanilla/api/util/direction/Direction) |


:::

:::group{name=toggleGate}

```zenscript
AbstractBlockGate.toggleGate(world as Level, clickedBlock as BlockPos, facing as Direction)
```

|  Parameter   |                        Type                        |
|--------------|----------------------------------------------------|
| world        | [Level](/vanilla/api/world/Level)                  |
| clickedBlock | [BlockPos](/vanilla/api/util/math/BlockPos)        |
| facing       | [Direction](/vanilla/api/util/direction/Direction) |


:::


