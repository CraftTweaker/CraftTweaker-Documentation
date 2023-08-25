# StructureManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.StructureManager;
```


## Methods

:::group{name=getAllStructuresAt}

Return Type: [LongSet](/mods/sdmcrtplus/utils/fastutil/longs/LongSet)[[Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure)]

```zenscript
StructureManager.getAllStructuresAt(position as BlockPos) as LongSet[Structure]
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getStructureAt}

Return Type: [StructureStart](/mods/sdmcrtplus/world/level/levelgen/structure/StructureStart)

```zenscript
StructureManager.getStructureAt(structure as Structure, position as BlockPos) as StructureStart
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| structure | [Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure) |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)                            |


:::

:::group{name=getStructureWithPieceAt}

Return Type: [StructureStart](/mods/sdmcrtplus/world/level/levelgen/structure/StructureStart)

```zenscript
StructureManager.getStructureWithPieceAt(structure as Structure, position as BlockPos) as StructureStart
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| structure | [Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure) |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)                            |


:::


