# BlockEntityType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.block.BlockEntityType;
```


## Methods

:::group{name=create}

Return Type: T

```zenscript
BlockEntityType.create<T : BlockEntity>(pos as BlockPos, blockState as BlockState) as T
```

| Parameter  |                         Type                         |
|------------|------------------------------------------------------|
| pos        | [BlockPos](/vanilla/api/util/math/BlockPos)          |
| blockState | [BlockState](/vanilla/api/block/BlockState)          |
| T          | [BlockEntity](/vanilla/api/block/entity/BlockEntity) |


:::

:::group{name=getBlockEntity}

Return Type: T

```zenscript
BlockEntityType.getBlockEntity<T : BlockEntity>(blockGetter as BlockGetter, pos as BlockPos) as T
```

|  Parameter  |                          Type                           |
|-------------|---------------------------------------------------------|
| blockGetter | [BlockGetter](/mods/sdmcrtplus/world/level/BlockGetter) |
| pos         | [BlockPos](/vanilla/api/util/math/BlockPos)             |
| T           | [BlockEntity](/vanilla/api/block/entity/BlockEntity)    |


:::

:::group{name=isValid}

Return Type: boolean

```zenscript
BlockEntityType.isValid<T : BlockEntity>(blockState as BlockState) as boolean
```

| Parameter  |                         Type                         |
|------------|------------------------------------------------------|
| blockState | [BlockState](/vanilla/api/block/BlockState)          |
| T          | [BlockEntity](/vanilla/api/block/entity/BlockEntity) |


:::


