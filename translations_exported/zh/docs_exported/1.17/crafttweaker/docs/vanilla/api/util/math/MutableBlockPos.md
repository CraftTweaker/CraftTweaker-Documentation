# MutableBlockPos

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.MutableBlockPos;
```


## Extending BlockPos

MutableBlockPos extends [BlockPos](/vanilla/api/util/math/BlockPos). That means all methods available in [BlockPos](/vanilla/api/util/math/BlockPos) are also available in MutableBlockPos

## 使用方式

:::group{name=clamp}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.clamp(axis as Axis, min as int, max as int) as MutableBlockPos
```

| 参数   | 类型                                       | 描述                      |
| ---- | ---------------------------------------- | ----------------------- |
| axis | [Axis](/vanilla/api/util/direction/Axis) | No Description Provided |
| min  | int                                      | No Description Provided |
| max  | int                                      | No Description Provided |


:::

:::group{name=move}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.move(direction as Direction) as MutableBlockPos
```

| 参数        | 类型                                                 | 描述                      |
| --------- | -------------------------------------------------- | ----------------------- |
| direction | [Direction](/vanilla/api/util/direction/Direction) | No Description Provided |


:::

:::group{name=move}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.move(other as Vec3i) as MutableBlockPos
```

| 参数    | 类型                                    | 描述                      |
| ----- | ------------------------------------- | ----------------------- |
| other | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |


:::

:::group{name=move}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.move(direction as Direction, distance as int) as MutableBlockPos
```

| 参数        | 类型                                                 | 描述                      |
| --------- | -------------------------------------------------- | ----------------------- |
| direction | [Direction](/vanilla/api/util/direction/Direction) | No Description Provided |
| distance  | int                                                | No Description Provided |


:::

:::group{name=move}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.move(x as int, y as int, z as int) as MutableBlockPos
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | int | No Description Provided |
| y  | int | No Description Provided |
| z  | int | No Description Provided |


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

| 参数    | 类型   | 描述                      |
| ----- | ---- | ----------------------- |
| value | long | No Description Provided |


:::

:::group{name=setValue}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setValue(value as Vec3i) as MutableBlockPos
```

| 参数    | 类型                                    | 描述                      |
| ----- | ------------------------------------- | ----------------------- |
| value | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |


:::

:::group{name=setValue}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setValue(x as double, y as double, z as double) as MutableBlockPos
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| x  | double | No Description Provided |
| y  | double | No Description Provided |
| z  | double | No Description Provided |


:::

:::group{name=setValue}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setValue(x as int, y as int, z as int) as MutableBlockPos
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | int | No Description Provided |
| y  | int | No Description Provided |
| z  | int | No Description Provided |


:::

:::group{name=setValue}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setValue(axisCycle as AxisCycle, x as int, y as int, z as int) as MutableBlockPos
```

| 参数        | 类型                                            | 描述                      |
| --------- | --------------------------------------------- | ----------------------- |
| axisCycle | [AxisCycle](/vanilla/api/util/math/AxisCycle) | No Description Provided |
| x         | int                                           | No Description Provided |
| y         | int                                           | No Description Provided |
| z         | int                                           | No Description Provided |


:::

:::group{name=setWithOffset}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setWithOffset(other as Vec3i, direction as Direction) as MutableBlockPos
```

| 参数        | 类型                                                 | 描述                      |
| --------- | -------------------------------------------------- | ----------------------- |
| other     | [Vec3i](/vanilla/api/util/math/Vec3i)              | No Description Provided |
| direction | [Direction](/vanilla/api/util/direction/Direction) | No Description Provided |


:::

:::group{name=setWithOffset}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setWithOffset(other as Vec3i, offset as Vec3i) as MutableBlockPos
```

| 参数     | 类型                                    | 描述                      |
| ------ | ------------------------------------- | ----------------------- |
| other  | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |
| offset | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |


:::

:::group{name=setWithOffset}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setWithOffset(other as Vec3i, x as int, y as int, z as int) as MutableBlockPos
```

| 参数    | 类型                                    | 描述                      |
| ----- | ------------------------------------- | ----------------------- |
| other | [Vec3i](/vanilla/api/util/math/Vec3i) | No Description Provided |
| x     | int                                   | No Description Provided |
| y     | int                                   | No Description Provided |
| z     | int                                   | No Description Provided |


:::

:::group{name=setX}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setX(x as int) as MutableBlockPos
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | int | No Description Provided |


:::

:::group{name=setY}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setY(y as int) as MutableBlockPos
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| y  | int | No Description Provided |


:::

:::group{name=setZ}

Return Type: [MutableBlockPos](/vanilla/api/util/math/MutableBlockPos)

```zenscript
MutableBlockPos.setZ(z as int) as MutableBlockPos
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| z  | int | No Description Provided |


:::


