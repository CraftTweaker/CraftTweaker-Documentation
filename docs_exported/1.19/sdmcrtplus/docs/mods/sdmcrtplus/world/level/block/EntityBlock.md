# EntityBlock

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.block.EntityBlock;
```


## Methods

:::group{name=getListener}

Return Type: **invalid**?

```zenscript
EntityBlock.getListener<T : BlockEntity>(level as ServerLevel, t as T) as invalid?
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel)        |
| t         | T                                                    |
| T         | [BlockEntity](/vanilla/api/block/entity/BlockEntity) |


:::

:::group{name=getTicker}

Return Type: **invalid**?

```zenscript
EntityBlock.getTicker<T : BlockEntity>(level as Level, blockState as BlockState, tBlockEntityType as BlockEntityType<T>) as invalid?
```

|    Parameter     |                                      Type                                      |
|------------------|--------------------------------------------------------------------------------|
| level            | [Level](/vanilla/api/world/Level)                                              |
| blockState       | [BlockState](/vanilla/api/block/BlockState)                                    |
| tBlockEntityType | [BlockEntityType](/mods/sdmcrtplus/world/level/block/BlockEntityType)&lt;T&gt; |
| T                | [BlockEntity](/vanilla/api/block/entity/BlockEntity)                           |


:::

:::group{name=newBlockEntity}

Return Type: [BlockEntity](/vanilla/api/block/entity/BlockEntity)?

```zenscript
EntityBlock.newBlockEntity(pos as BlockPos, blockState as BlockState) as BlockEntity?
```

| Parameter  |                    Type                     |
|------------|---------------------------------------------|
| pos        | [BlockPos](/vanilla/api/util/math/BlockPos) |
| blockState | [BlockState](/vanilla/api/block/BlockState) |


:::


