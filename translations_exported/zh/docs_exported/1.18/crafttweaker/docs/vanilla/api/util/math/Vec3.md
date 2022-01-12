# Vec3

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.Vec3;
```


## 已实现的接口
Vec3 implements the following interfaces. That means all methods defined in these interfaces are also available in Vec3

- [Position](/vanilla/api/util/Position)

## Constructor #构造函数


```zenscript
new Vec3(x as double, y as double, z as double) as Vec3
```
| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No description provided |
| y  | 双精度 | No description provided |
| z  | 双精度 | No description provided |



## 使用方式

:::group{name=add}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.add(other as Vec3) as Vec3
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=add}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.add(x as double, y as double, z as double) as Vec3
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No Description Provided |
| y  | 双精度 | No Description Provided |
| z  | 双精度 | No Description Provided |


:::

:::group{name=closerThan}

Return Type: boolean

```zenscript
Vec3.closerThan(position as Position, maxDistance as double) as boolean
```

| 参数          | 类型                                     | 描述                      |
| ----------- | -------------------------------------- | ----------------------- |
| position    | [Position](/vanilla/api/util/Position) | No Description Provided |
| maxDistance | 双精度                                    | No Description Provided |


:::

:::group{name=cross}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.cross(other as Vec3) as Vec3
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=distanceTo}

Return Type: double

```zenscript
Vec3.distanceTo(other as Vec3) as double
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Vec3.distanceToSqr(other as Vec3) as double
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=distanceToSqr}

Return Type: double

```zenscript
Vec3.distanceToSqr(x as double, y as double, z as double) as double
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No Description Provided |
| y  | 双精度 | No Description Provided |
| z  | 双精度 | No Description Provided |


:::

:::group{name=dot}

Return Type: double

```zenscript
Vec3.dot(other as Vec3) as double
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=getValue}

Return Type: double

```zenscript
Vec3.getValue(axis as Axis) as double
```

| 参数   | 类型                                       | 描述                      |
| ---- | ---------------------------------------- | ----------------------- |
| axis | [Axis](/vanilla/api/util/direction/Axis) | No Description Provided |


:::

:::group{name=horizontalDistance}

Return Type: double

```zenscript
// Vec3.horizontalDistance() as double

myVec3.horizontalDistance();
```

:::

:::group{name=horizontalDistanceSqr}

Return Type: double

```zenscript
// Vec3.horizontalDistanceSqr() as double

myVec3.horizontalDistanceSqr();
```

:::

:::group{name=length}

Return Type: double

```zenscript
// Vec3.length() as double

myVec3.length();
```

:::

:::group{name=lengthSqr}

Return Type: double

```zenscript
// Vec3.lengthSqr() as double

myVec3.lengthSqr();
```

:::

:::group{name=lerp}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.lerp(other as Vec3, value as double) as Vec3
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |
| 值     | 双精度                                 | No Description Provided |


:::

:::group{name=multiply}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.multiply(other as Vec3) as Vec3
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=multiply}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.multiply(x as double, y as double, z as double) as Vec3
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No Description Provided |
| y  | 双精度 | No Description Provided |
| z  | 双精度 | No Description Provided |


:::

:::group{name=normalize}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Vec3.normalize() as Vec3

myVec3.normalize();
```

:::

:::group{name=reverse}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// Vec3.reverse() as Vec3

myVec3.reverse();
```

:::

:::group{name=scale}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.scale(scalar as double) as Vec3
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| scalar | 双精度 | No Description Provided |


:::

:::group{name=subtract}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.subtract(other as Vec3) as Vec3
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=subtract}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.subtract(x as double, y as double, z as double) as Vec3
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | 双精度 | No Description Provided |
| y  | 双精度 | No Description Provided |
| z  | 双精度 | No Description Provided |


:::

:::group{name=vectorTo}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.vectorTo(other as Vec3) as Vec3
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=xRot}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.xRot(pitch as float) as Vec3
```

| 参数    | 类型  | 描述                      |
| ----- | --- | ----------------------- |
| pitch | 浮点数 | No Description Provided |


:::

:::group{name=yRot}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.yRot(yaw as float) as Vec3
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| yaw | 浮点数 | No Description Provided |


:::

:::group{name=zRot}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
Vec3.zRot(roll as float) as Vec3
```

| 参数   | 类型  | 描述                      |
| ---- | --- | ----------------------- |
| roll | 浮点数 | No Description Provided |


:::


## 参数

| 名称                    | 类型                                  | 可获得  | 可设置   | 描述                      |
| --------------------- | ----------------------------------- | ---- | ----- | ----------------------- |
| horizontalDistance    | 双精度                                 | true | false | No Description Provided |
| horizontalDistanceSqr | 双精度                                 | true | false | No Description Provided |
| length                | 双精度                                 | true | false | No Description Provided |
| lengthSqr             | 双精度                                 | true | false | No Description Provided |
| normalize             | [Vec3](/vanilla/api/util/math/Vec3) | true | false | No Description Provided |
| reverse               | [Vec3](/vanilla/api/util/math/Vec3) | true | false | No Description Provided |

