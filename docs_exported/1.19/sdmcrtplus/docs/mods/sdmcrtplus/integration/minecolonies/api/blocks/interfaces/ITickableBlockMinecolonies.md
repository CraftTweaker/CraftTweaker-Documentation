# ITickableBlockMinecolonies

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.blocks.interfaces.ITickableBlockMinecolonies;
```


## Implemented Interfaces
ITickableBlockMinecolonies implements the following interfaces. That means all methods defined in these interfaces are also available in ITickableBlockMinecolonies

- [EntityBlock](/mods/sdmcrtplus/world/level/block/EntityBlock)

## Methods

:::group{name=getTicker}

Return Type: **invalid**?

```zenscript
ITickableBlockMinecolonies.getTicker<T : BlockEntity>(level as Level, state as BlockState, type as BlockEntityType<T>) as invalid?
```

| Parameter |                                      Type                                      |
|-----------|--------------------------------------------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)                                              |
| state     | [BlockState](/vanilla/api/block/BlockState)                                    |
| type      | [BlockEntityType](/mods/sdmcrtplus/world/level/block/BlockEntityType)&lt;T&gt; |
| T         | [BlockEntity](/vanilla/api/block/entity/BlockEntity)                           |


:::


