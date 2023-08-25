# StructurePiece

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.levelgen.structure.StructurePiece;
```


## Methods

:::group{name=getBoundingBox}

Return Type: [BoundingBox](/mods/sdmcrtplus/world/level/levelgen/structure/BoundingBox)

```zenscript
// StructurePiece.getBoundingBox() as BoundingBox

myStructurePiece.getBoundingBox();
```

:::

:::group{name=getGenDepth}

Return Type: int

```zenscript
// StructurePiece.getGenDepth() as int

myStructurePiece.getGenDepth();
```

:::

:::group{name=getLocatorPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// StructurePiece.getLocatorPosition() as BlockPos

myStructurePiece.getLocatorPosition();
```

:::

:::group{name=getOrientation}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// StructurePiece.getOrientation() as Direction

myStructurePiece.getOrientation();
```

:::

:::group{name=setOrientation}

```zenscript
StructurePiece.setOrientation(Depth as int)
```

| Parameter | Type |
|-----------|------|
| Depth     | int  |


:::

:::group{name=setOrientation}

```zenscript
StructurePiece.setOrientation(direction as Direction)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| direction | [Direction](/vanilla/api/util/direction/Direction) |


:::


## Properties

|      Name       |                                    Type                                    | Has Getter | Has Setter |
|-----------------|----------------------------------------------------------------------------|------------|------------|
| boundingBox     | [BoundingBox](/mods/sdmcrtplus/world/level/levelgen/structure/BoundingBox) | true       | false      |
| genDeth         | int                                                                        | true       | false      |
| locatorPosition | [BlockPos](/vanilla/api/util/math/BlockPos)                                | true       | true       |
| orientation     | [Direction](/vanilla/api/util/direction/Direction)                         | true       | true       |

