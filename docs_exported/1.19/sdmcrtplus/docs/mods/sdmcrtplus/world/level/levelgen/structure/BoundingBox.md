# BoundingBox

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.levelgen.structure.BoundingBox;
```


## Constructors


```zenscript
new BoundingBox(position as BlockPos) as BoundingBox
```
| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |



```zenscript
new BoundingBox(x1 as int, y1 as int, z1 as int, x2 as int, y2 as int, z2 as int) as BoundingBox
```
| Parameter | Type |
|-----------|------|
| x1        | int  |
| y1        | int  |
| z1        | int  |
| x2        | int  |
| y2        | int  |
| z2        | int  |



## Methods

:::group{name=getCenter}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BoundingBox.getCenter() as BlockPos

myBoundingBox.getCenter();
```

:::

:::group{name=getLength}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// BoundingBox.getLength() as Vec3i

myBoundingBox.getLength();
```

:::

:::group{name=getXSpan}

Return Type: int

```zenscript
// BoundingBox.getXSpan() as int

myBoundingBox.getXSpan();
```

:::

:::group{name=getYSpan}

Return Type: int

```zenscript
// BoundingBox.getYSpan() as int

myBoundingBox.getYSpan();
```

:::

:::group{name=getZSpan}

Return Type: int

```zenscript
// BoundingBox.getZSpan() as int

myBoundingBox.getZSpan();
```

:::

:::group{name=intersects}

Return Type: boolean

```zenscript
BoundingBox.intersects(box as BoundingBox) as boolean
```

| Parameter |                                    Type                                    |
|-----------|----------------------------------------------------------------------------|
| box       | [BoundingBox](/mods/sdmcrtplus/world/level/levelgen/structure/BoundingBox) |


:::

:::group{name=isInside}

Return Type: boolean

```zenscript
BoundingBox.isInside(pos as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=maxX}

Return Type: int

```zenscript
// BoundingBox.maxX() as int

myBoundingBox.maxX();
```

:::

:::group{name=maxY}

Return Type: int

```zenscript
// BoundingBox.maxY() as int

myBoundingBox.maxY();
```

:::

:::group{name=maxZ}

Return Type: int

```zenscript
// BoundingBox.maxZ() as int

myBoundingBox.maxZ();
```

:::

:::group{name=minX}

Return Type: int

```zenscript
// BoundingBox.minX() as int

myBoundingBox.minX();
```

:::

:::group{name=minY}

Return Type: int

```zenscript
// BoundingBox.minY() as int

myBoundingBox.minY();
```

:::

:::group{name=minZ}

Return Type: int

```zenscript
// BoundingBox.minZ() as int

myBoundingBox.minZ();
```

:::


## Properties

|  Name  |                    Type                     | Has Getter | Has Setter |
|--------|---------------------------------------------|------------|------------|
| XSpan  | int                                         | true       | false      |
| YSpan  | int                                         | true       | false      |
| ZSpan  | int                                         | true       | false      |
| center | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |
| length | [Vec3i](/vanilla/api/util/math/Vec3i)       | true       | false      |
| maxX   | int                                         | true       | false      |
| maxY   | int                                         | true       | false      |
| maxZ   | int                                         | true       | false      |
| minX   | int                                         | true       | false      |
| minY   | int                                         | true       | false      |
| minZ   | int                                         | true       | false      |

