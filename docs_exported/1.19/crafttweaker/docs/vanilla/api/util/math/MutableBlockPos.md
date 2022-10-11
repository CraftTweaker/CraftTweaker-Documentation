# MutableBlockPos

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.MutableBlockPos;
```


## Extending BlockPos

MutableBlockPos extends [BlockPos](/vanilla/api/util/math/BlockPos). That means all methods available in [BlockPos](/vanilla/api/util/math/BlockPos) are also available in MutableBlockPos

## Methods

:::group{name=clamp}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.clamp(axis as Axis, min as int, max as int) as MutableBlockPos
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| axis      | [Axis](/vanilla/api/util/direction/Axis) |
| min       | int                                      |
| max       | int                                      |


:::

:::group{name=move}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.move(direction as Direction) as MutableBlockPos
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| direction | [Direction](/vanilla/api/util/direction/Direction) |


:::

:::group{name=move}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.move(other as Vec3i) as MutableBlockPos
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) |


:::

:::group{name=move}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.move(direction as Direction, distance as int) as MutableBlockPos
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| direction | [Direction](/vanilla/api/util/direction/Direction) |
| distance  | int                                                |


:::

:::group{name=move}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.move(x as int, y as int, z as int) as MutableBlockPos
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| y         | int  |
| z         | int  |


:::

:::group{name=mutable}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
// MutableBlockPos.mutable() as MutableBlockPos

myMutableBlockPos.mutable();
```

:::

:::group{name=setValue}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setValue(value as long) as MutableBlockPos
```

| Parameter | Type |
|-----------|------|
| value     | long |


:::

:::group{name=setValue}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setValue(value as Vec3i) as MutableBlockPos
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| value     | [Vec3i](/vanilla/api/util/math/Vec3i) |


:::

:::group{name=setValue}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setValue(x as double, y as double, z as double) as MutableBlockPos
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=setValue}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setValue(x as int, y as int, z as int) as MutableBlockPos
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| y         | int  |
| z         | int  |


:::

:::group{name=setValue}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setValue(axisCycle as AxisCycle, x as int, y as int, z as int) as MutableBlockPos
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| axisCycle | [AxisCycle](/vanilla/api/util/math/AxisCycle) |
| x         | int                                           |
| y         | int                                           |
| z         | int                                           |


:::

:::group{name=setWithOffset}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setWithOffset(other as Vec3i, direction as Direction) as MutableBlockPos
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i)              |
| direction | [Direction](/vanilla/api/util/direction/Direction) |


:::

:::group{name=setWithOffset}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setWithOffset(other as Vec3i, offset as Vec3i) as MutableBlockPos
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) |
| offset    | [Vec3i](/vanilla/api/util/math/Vec3i) |


:::

:::group{name=setWithOffset}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setWithOffset(other as Vec3i, x as int, y as int, z as int) as MutableBlockPos
```

| Parameter |                 Type                  |
|-----------|---------------------------------------|
| other     | [Vec3i](/vanilla/api/util/math/Vec3i) |
| x         | int                                   |
| y         | int                                   |
| z         | int                                   |


:::

:::group{name=setX}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setX(x as int) as MutableBlockPos
```

| Parameter | Type |
|-----------|------|
| x         | int  |


:::

:::group{name=setY}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setY(y as int) as MutableBlockPos
```

| Parameter | Type |
|-----------|------|
| y         | int  |


:::

:::group{name=setZ}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setZ(z as int) as MutableBlockPos
```

| Parameter | Type |
|-----------|------|
| z         | int  |


:::


