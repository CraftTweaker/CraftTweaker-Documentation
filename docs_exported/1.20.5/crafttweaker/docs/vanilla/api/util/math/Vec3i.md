# Vec3i

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Vec3i;
```


## Implemented Interfaces
Vec3i implements the following interfaces. That means all methods defined in these interfaces are also available in Vec3i

- stdlib.Comparable&lt;[Vec3i](/vanilla/api/util/math/Vec3i)&gt;

## Methods

:::group{name=above}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Vec3i.above() as Vec3i

myVec3i.above();
```

:::

:::group{name=above}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.above(distance as int) as Vec3i
```

| Parameter | Type |
|-----------|------|
| distance  | int  |


:::

:::group{name=below}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Vec3i.below() as Vec3i

myVec3i.below();
```

:::

:::group{name=below}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.below(distance as int) as Vec3i
```

| Parameter | Type |
|-----------|------|
| distance  | int  |


:::

:::group{name=closerThan}

Return Type: boolean

```zenscript
Vec3i.closerThan(other as Vec3i, maxDistance as double) as boolean
```

|  Parameter  |                 Type                  |
|-------------|---------------------------------------|
| other       | [Vec3i](/vanilla/api/util/math/Vec3i) |
| maxDistance | double                                |


:::

:::group{name=compareTo}

Return Type: int

```zenscript
Vec3i.compareTo(other as Vec3i) as int
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) |


:::

:::group{name=cross}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.cross(other as Vec3i) as Vec3i
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) |


:::

:::group{name=distManhattan}

Return Type: int

```zenscript
Vec3i.distManhattan(other as Vec3i) as int
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) |


:::

:::group{name=distSqr}

Return Type: double

```zenscript
Vec3i.distSqr(other as Vec3i) as double
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) |


:::

:::group{name=distToCenterSqr}

Return Type: double

```zenscript
Vec3i.distToCenterSqr(position as Position) as double
```

| Parameter |                  Type                  |
|-----------|----------------------------------------|
| position  | [Position](/vanilla/api/util/Position) |


:::

:::group{name=distToCenterSqr}

Return Type: double

```zenscript
Vec3i.distToCenterSqr(x as double, y as double, z as double) as double
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=east}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Vec3i.east() as Vec3i

myVec3i.east();
```

:::

:::group{name=east}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.east(distance as int) as Vec3i
```

| Parameter | Type |
|-----------|------|
| distance  | int  |


:::

:::group{name=getValue}

Return Type: int

```zenscript
Vec3i.getValue(axis as Axis) as int
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| axis      | [Axis](/vanilla/api/util/direction/Axis) |


:::

:::group{name=getX}

Return Type: int

```zenscript
// Vec3i.getX() as int

myVec3i.getX();
```

:::

:::group{name=getY}

Return Type: int

```zenscript
// Vec3i.getY() as int

myVec3i.getY();
```

:::

:::group{name=getZ}

Return Type: int

```zenscript
// Vec3i.getZ() as int

myVec3i.getZ();
```

:::

:::group{name=multiply}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.multiply(scalar as int) as Vec3i
```

| Parameter | Type |
|-----------|------|
| scalar    | int  |


:::

:::group{name=north}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Vec3i.north() as Vec3i

myVec3i.north();
```

:::

:::group{name=north}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.north(distance as int) as Vec3i
```

| Parameter | Type |
|-----------|------|
| distance  | int  |


:::

:::group{name=offset}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.offset(other as Vec3i) as Vec3i
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) |


:::

:::group{name=offset}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.offset(x as int, y as int, z as int) as Vec3i
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| y         | int  |
| z         | int  |


:::

:::group{name=relative}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.relative(direction as Direction) as Vec3i
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| direction | [Direction](/vanilla/api/util/direction/Direction) |


:::

:::group{name=relative}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.relative(axis as Axis, distanec as int) as Vec3i
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| axis      | [Axis](/vanilla/api/util/direction/Axis) |
| distanec  | int                                      |


:::

:::group{name=relative}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.relative(direction as Direction, distance as int) as Vec3i
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| direction | [Direction](/vanilla/api/util/direction/Direction) |
| distance  | int                                                |


:::

:::group{name=south}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Vec3i.south() as Vec3i

myVec3i.south();
```

:::

:::group{name=south}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.south(distance as int) as Vec3i
```

| Parameter | Type |
|-----------|------|
| distance  | int  |


:::

:::group{name=subtract}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.subtract(other as Vec3i) as Vec3i
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) |


:::

:::group{name=toShortString}

Return Type: string

```zenscript
// Vec3i.toShortString() as string

myVec3i.toShortString();
```

:::

:::group{name=west}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Vec3i.west() as Vec3i

myVec3i.west();
```

:::

:::group{name=west}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
Vec3i.west(distance as int) as Vec3i
```

| Parameter | Type |
|-----------|------|
| distance  | int  |


:::


## Properties

|     Name      |  Type  | Has Getter | Has Setter |
|---------------|--------|------------|------------|
| toShortString | string | true       | false      |
| x             | int    | true       | false      |
| y             | int    | true       | false      |
| z             | int    | true       | false      |

