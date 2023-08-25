# StructureStart

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.levelgen.structure.StructureStart;
```


## Methods

:::group{name=canBeReferenced}

Return Type: boolean

```zenscript
// StructureStart.canBeReferenced() as boolean

myStructureStart.canBeReferenced();
```

:::

:::group{name=getBoundingBox}

Return Type: [BoundingBox](/mods/sdmcrtplus/world/level/levelgen/structure/BoundingBox)

```zenscript
// StructureStart.getBoundingBox() as BoundingBox

myStructureStart.getBoundingBox();
```

:::

:::group{name=getChunkPos}

Return Type: [ChunkPos](/mods/sdmcrtplus/world/level/ChunkPos)

```zenscript
// StructureStart.getChunkPos() as ChunkPos

myStructureStart.getChunkPos();
```

:::

:::group{name=getPieces}

Return Type: stdlib.List&lt;[StructurePiece](/mods/sdmcrtplus/world/level/levelgen/structure/StructurePiece)&gt;

```zenscript
// StructureStart.getPieces() as stdlib.List<StructurePiece>

myStructureStart.getPieces();
```

:::

:::group{name=getReferences}

Return Type: int

```zenscript
// StructureStart.getReferences() as int

myStructureStart.getReferences();
```

:::

:::group{name=getStructure}

Return Type: [Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure)

```zenscript
// StructureStart.getStructure() as Structure

myStructureStart.getStructure();
```

:::

:::group{name=isValid}

Return Type: boolean

```zenscript
// StructureStart.isValid() as boolean

myStructureStart.isValid();
```

:::


## Properties

|      Name       |                                                Type                                                 | Has Getter | Has Setter |
|-----------------|-----------------------------------------------------------------------------------------------------|------------|------------|
| boundingBox     | [BoundingBox](/mods/sdmcrtplus/world/level/levelgen/structure/BoundingBox)                          | true       | false      |
| canBeReferenced | boolean                                                                                             | true       | false      |
| chunkPos        | [ChunkPos](/mods/sdmcrtplus/world/level/ChunkPos)                                                   | true       | false      |
| isValid         | boolean                                                                                             | true       | false      |
| pieces          | stdlib.List&lt;[StructurePiece](/mods/sdmcrtplus/world/level/levelgen/structure/StructurePiece)&gt; | true       | false      |
| references      | int                                                                                                 | true       | false      |
| structure       | [Structure](/mods/sdmcrtplus/world/level/levelgen/structure/Structure)                              | true       | false      |

