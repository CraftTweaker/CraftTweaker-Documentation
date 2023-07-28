# BlockPos

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.BlockPos;
```


## Extending Vec3i

BlockPos extends [Vec3i](/vanilla/api/util/math/Vec3i). That means all methods available in [Vec3i](/vanilla/api/util/math/Vec3i) are also available in BlockPos

## Static Methods

:::group{name=containing}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.containing(x as double, y as double, z as double) as BlockPos
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


:::

## Constructors

Creates a new BlockPos using the values of the given vector. Note, the values will be floored down, providing 0.85 is the same as providing 0.
```zenscript
new BlockPos(vector as Vec3) as BlockPos
new BlockPos(new Vec3(0, 1, 2));
```
| Parameter |                Type                 |            Description            |
|-----------|-------------------------------------|-----------------------------------|
| vector    | [Vec3](/vanilla/api/util/math/Vec3) | The vector to copy the values of. |


Creates a new BlockPos using the provided values.
```zenscript
new BlockPos(x as int, y as int, z as int) as BlockPos
new BlockPos(0, 1, 2);
```
| Parameter | Type |         Description         |
|-----------|------|-----------------------------|
| x         | int  | The x value of the blockpos |
| y         | int  | The y value of the blockpos |
| z         | int  | The z value of the blockpos |



## Methods

:::group{name=above}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BlockPos.above() as BlockPos

myBlockPos.above();
```

:::

:::group{name=above}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.above(distance as int) as BlockPos
```

| Parameter | Type |
|-----------|------|
| distance  | int  |


:::

:::group{name=asImmutable}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BlockPos.asImmutable() as BlockPos

myBlockPos.asImmutable();
```

:::

:::group{name=asLong}

Return Type: long

```zenscript
// BlockPos.asLong() as long

myBlockPos.asLong();
```

:::

:::group{name=asMutable}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
// BlockPos.asMutable() as MutableBlockPos

myBlockPos.asMutable();
```

:::

:::group{name=atY}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.atY(value as int) as BlockPos
```

| Parameter | Type |
|-----------|------|
| value     | int  |


:::

:::group{name=below}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BlockPos.below() as BlockPos

myBlockPos.below();
```

:::

:::group{name=below}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.below(distance as int) as BlockPos
```

| Parameter | Type |
|-----------|------|
| distance  | int  |


:::

:::group{name=cross}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.cross(other as Vec3i) as BlockPos
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) |


:::

:::group{name=east}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BlockPos.east() as BlockPos

myBlockPos.east();
```

:::

:::group{name=east}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.east(distance as int) as BlockPos
```

| Parameter | Type |
|-----------|------|
| distance  | int  |


:::

:::group{name=multiply}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.multiply(scalar as int) as BlockPos
```

| Parameter | Type |
|-----------|------|
| scalar    | int  |


:::

:::group{name=north}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BlockPos.north() as BlockPos

myBlockPos.north();
```

:::

:::group{name=north}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.north(distance as int) as BlockPos
```

| Parameter | Type |
|-----------|------|
| distance  | int  |


:::

:::group{name=offset}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.offset(other as Vec3i) as BlockPos
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) |


:::

:::group{name=offset}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.offset(x as int, y as int, z as int) as BlockPos
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| y         | int  |
| z         | int  |


:::

:::group{name=relative}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.relative(direction as Direction) as BlockPos
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| direction | [Direction](/vanilla/api/util/direction/Direction) |


:::

:::group{name=relative}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.relative(axis as Axis, distance as int) as BlockPos
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| axis      | [Axis](/vanilla/api/util/direction/Axis) |
| distance  | int                                      |


:::

:::group{name=relative}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.relative(direction as Direction, distance as int) as BlockPos
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| direction | [Direction](/vanilla/api/util/direction/Direction) |
| distance  | int                                                |


:::

:::group{name=rotate}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.rotate(rotation as Rotation) as BlockPos
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| rotation  | [Rotation](/vanilla/api/util/math/Rotation) |


:::

:::group{name=south}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BlockPos.south() as BlockPos

myBlockPos.south();
```

:::

:::group{name=south}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.south(distance as int) as BlockPos
```

| Parameter | Type |
|-----------|------|
| distance  | int  |


:::

:::group{name=subtract}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.subtract(other as Vec3i) as BlockPos
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) |


:::

:::group{name=west}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BlockPos.west() as BlockPos

myBlockPos.west();
```

:::

:::group{name=west}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
BlockPos.west(distance as int) as BlockPos
```

| Parameter | Type |
|-----------|------|
| distance  | int  |


:::


