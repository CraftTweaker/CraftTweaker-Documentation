# AABB

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.AABB;
```


## 使用方式

:::group{name=clip}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
AABB.clip(minVec as Vec3, maxVec as Vec3) as Vec3
```

| 参数     | 类型                                  | 描述                      |
| ------ | ----------------------------------- | ----------------------- |
| minVec | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |
| maxVec | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=contains}

Return Type: boolean

```zenscript
AABB.contains(other as Vec3) as boolean
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=contains}

Return Type: boolean

```zenscript
AABB.contains(x as double, y as double, z as double) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| x  | double | No Description Provided |
| y  | double | No Description Provided |
| z  | double | No Description Provided |


:::

:::group{name=contract}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.contract(x as double, y as double, z as double) as AABB
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| x  | double | No Description Provided |
| y  | double | No Description Provided |
| z  | double | No Description Provided |


:::

:::group{name=deflate}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.deflate(scalar as double) as AABB
```

| 参数     | 类型     | 描述                      |
| ------ | ------ | ----------------------- |
| scalar | double | No Description Provided |


:::

:::group{name=deflate}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.deflate(x as double, y as double, z as double) as AABB
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| x  | double | No Description Provided |
| y  | double | No Description Provided |
| z  | double | No Description Provided |


:::

:::group{name=expandTowards}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.expandTowards(vec as Vec3) as AABB
```

| 参数  | 类型                                  | 描述                      |
| --- | ----------------------------------- | ----------------------- |
| vec | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=expandTowards}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.expandTowards(x as double, y as double, z as double) as AABB
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| x  | double | No Description Provided |
| y  | double | No Description Provided |
| z  | double | No Description Provided |


:::

:::group{name=getCenter}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)

```zenscript
// AABB.getCenter() as Vec3

myAABB.getCenter();
```

:::

:::group{name=getSize}

Return Type: double

```zenscript
// AABB.getSize() as double

myAABB.getSize();
```

:::

:::group{name=getXsize}

Return Type: double

```zenscript
// AABB.getXsize() as double

myAABB.getXsize();
```

:::

:::group{name=getYsize}

Return Type: double

```zenscript
// AABB.getYsize() as double

myAABB.getYsize();
```

:::

:::group{name=getZsize}

Return Type: double

```zenscript
// AABB.getZsize() as double

myAABB.getZsize();
```

:::

:::group{name=hasNaN}

Return Type: boolean

```zenscript
// AABB.hasNaN() as boolean

myAABB.hasNaN();
```

:::

:::group{name=inflate}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.inflate(scalar as double) as AABB
```

| 参数     | 类型     | 描述                      |
| ------ | ------ | ----------------------- |
| scalar | double | No Description Provided |


:::

:::group{name=inflate}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.inflate(x as double, y as double, z as double) as AABB
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| x  | double | No Description Provided |
| y  | double | No Description Provided |
| z  | double | No Description Provided |


:::

:::group{name=intersect}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.intersect(other as AABB) as AABB
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [AABB](/vanilla/api/util/math/AABB) | No Description Provided |


:::

:::group{name=intersects}

Return Type: boolean

```zenscript
AABB.intersects(other as AABB) as boolean
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [AABB](/vanilla/api/util/math/AABB) | No Description Provided |


:::

:::group{name=intersects}

Return Type: boolean

```zenscript
AABB.intersects(minVec as Vec3, maxVec as Vec3) as boolean
```

| 参数     | 类型                                  | 描述                      |
| ------ | ----------------------------------- | ----------------------- |
| minVec | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |
| maxVec | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=intersects}

Return Type: boolean

```zenscript
AABB.intersects(minX as double, minY as double, minZ as double, maxX as double, maxY as double, maxZ as double) as boolean
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| minX | double | No Description Provided |
| minY | double | No Description Provided |
| minZ | double | No Description Provided |
| maxX | double | No Description Provided |
| maxY | double | No Description Provided |
| maxZ | double | No Description Provided |


:::

:::group{name=max}

Return Type: double

```zenscript
AABB.max(direction as Axis) as double
```

| 参数        | 类型                                       | 描述                      |
| --------- | ---------------------------------------- | ----------------------- |
| direction | [Axis](/vanilla/api/util/direction/Axis) | No Description Provided |


:::

:::group{name=min}

Return Type: double

```zenscript
AABB.min(direction as Axis) as double
```

| 参数        | 类型                                       | 描述                      |
| --------- | ---------------------------------------- | ----------------------- |
| direction | [Axis](/vanilla/api/util/direction/Axis) | No Description Provided |


:::

:::group{name=minmax}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.minmax(other as AABB) as AABB
```

| 参数    | 类型                                  | 描述                      |
| ----- | ----------------------------------- | ----------------------- |
| other | [AABB](/vanilla/api/util/math/AABB) | No Description Provided |


:::

:::group{name=move}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.move(pos as BlockPos) as AABB
```

| 参数 | 类型                                          | 描述                      |
| -- | ------------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::

:::group{name=move}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.move(vec as Vec3) as AABB
```

| 参数  | 类型                                  | 描述                      |
| --- | ----------------------------------- | ----------------------- |
| vec | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=move}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.move(x as double, y as double, z as double) as AABB
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| x  | double | No Description Provided |
| y  | double | No Description Provided |
| z  | double | No Description Provided |


:::

:::group{name=setMaxX}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.setMaxX(maxX as double) as AABB
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| maxX | double | No Description Provided |


:::

:::group{name=setMaxY}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.setMaxY(maxY as double) as AABB
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| maxY | double | No Description Provided |


:::

:::group{name=setMaxZ}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.setMaxZ(maxZ as double) as AABB
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| maxZ | double | No Description Provided |


:::

:::group{name=setMinX}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.setMinX(minX as double) as AABB
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| minX | double | No Description Provided |


:::

:::group{name=setMinY}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.setMinY(minY as double) as AABB
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| minY | double | No Description Provided |


:::

:::group{name=setMinZ}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.setMinZ(minZ as double) as AABB
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| minZ | double | No Description Provided |


:::


## 参数

| 名称       | 类型                                  | 可获得  | 可设置   | 描述                      |
| -------- | ----------------------------------- | ---- | ----- | ----------------------- |
| center   | [Vec3](/vanilla/api/util/math/Vec3) | true | false | No Description Provided |
| hasNaN   | 布尔值                                 | true | false | No Description Provided |
| size #大小 | double                              | true | false | No Description Provided |
| xSize    | double                              | true | false | No Description Provided |
| ySize    | double                              | true | false | No Description Provided |
| zSize    | double                              | true | false | No Description Provided |

