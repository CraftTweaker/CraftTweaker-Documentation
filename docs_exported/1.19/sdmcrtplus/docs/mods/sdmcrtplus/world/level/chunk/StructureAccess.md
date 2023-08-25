# StructureAccess

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.StructureAccess;
```


## Methods

:::group{name=getAllReferences}

Return Type: [LongSet](/mods/sdmcrtplus/utils/fastutil/longs/LongSet)[[Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure)]

```zenscript
// StructureAccess.getAllReferences() as LongSet[Structure]

myStructureAccess.getAllReferences();
```

:::

:::group{name=getReferencesForStructure}

Return Type: [LongSet](/mods/sdmcrtplus/utils/fastutil/longs/LongSet)

```zenscript
StructureAccess.getReferencesForStructure(structure as Structure) as LongSet
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| structure | [Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure) |


:::

:::group{name=getStartForStructure}

Return Type: [StructureStart](/mods/sdmcrtplus/world/level/levelgen/structure/StructureStart)

```zenscript
StructureAccess.getStartForStructure(structure as Structure) as StructureStart
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| structure | [Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure) |


:::


## Properties

|     Name      |                                                               Type                                                               | Has Getter | Has Setter |
|---------------|----------------------------------------------------------------------------------------------------------------------------------|------------|------------|
| allReferences | [LongSet](/mods/sdmcrtplus/utils/fastutil/longs/LongSet)[[Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure)] | true       | false      |

