# StructureManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.misc.world.StructureManager;
```


## Methods

:::group{name=getStructureAt}

Return Type: [StructureStart](/mods/sixikutils/utils/world/StructureStart)

```zenscript
StructureManager.getStructureAt(pos as BlockPos, structure as Structure) as StructureStart
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)         |
| structure | [Structure](/mods/sixikutils/utils/world/Structure) |


:::

:::group{name=getStructureWithPieceAt}

Return Type: [StructureStart](/mods/sixikutils/utils/world/StructureStart)

```zenscript
StructureManager.getStructureWithPieceAt(pos as BlockPos, structure as Structure) as StructureStart
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)         |
| structure | [Structure](/mods/sixikutils/utils/world/Structure) |


:::


