# SectionPos

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.api.misc.world.SectionPos;
```


## Extending Vec3i

SectionPos extends [Vec3i](/vanilla/api/util/math/Vec3i). That means all methods available in [Vec3i](/vanilla/api/util/math/Vec3i) are also available in SectionPos

## Methods

:::group{name=getX}

Return Type: int

```zenscript
// SectionPos.getX() as int

mySectionPos.getX();
```

:::

:::group{name=getY}

Return Type: int

```zenscript
// SectionPos.getY() as int

mySectionPos.getY();
```

:::

:::group{name=getZ}

Return Type: int

```zenscript
// SectionPos.getZ() as int

mySectionPos.getZ();
```

:::

:::group{name=maxBlockX}

Return Type: int

```zenscript
// SectionPos.maxBlockX() as int

mySectionPos.maxBlockX();
```

:::

:::group{name=maxBlockY}

Return Type: int

```zenscript
// SectionPos.maxBlockY() as int

mySectionPos.maxBlockY();
```

:::

:::group{name=maxBlockZ}

Return Type: int

```zenscript
// SectionPos.maxBlockZ() as int

mySectionPos.maxBlockZ();
```

:::

:::group{name=minBlockX}

Return Type: int

```zenscript
// SectionPos.minBlockX() as int

mySectionPos.minBlockX();
```

:::

:::group{name=minBlockY}

Return Type: int

```zenscript
// SectionPos.minBlockY() as int

mySectionPos.minBlockY();
```

:::

:::group{name=minBlockZ}

Return Type: int

```zenscript
// SectionPos.minBlockZ() as int

mySectionPos.minBlockZ();
```

:::

:::group{name=relative}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
SectionPos.relative(direction as Direction) as Vec3i
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| direction | [Direction](/vanilla/api/util/direction/Direction) |


:::

:::group{name=relative}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
SectionPos.relative(axis as Axis, num as int) as Vec3i
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| axis      | [Axis](/vanilla/api/util/direction/Axis) |
| num       | int                                      |


:::

:::group{name=relative}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
SectionPos.relative(axis as Direction, num as int) as Vec3i
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| axis      | [Direction](/vanilla/api/util/direction/Direction) |
| num       | int                                                |


:::


## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| maxX | int  | true       | false      |
| maxY | int  | true       | false      |
| maxZ | int  | true       | false      |
| minX | int  | true       | false      |
| minY | int  | true       | false      |
| minZ | int  | true       | false      |
| x    | int  | true       | false      |
| y    | int  | true       | false      |
| z    | int  | true       | false      |

