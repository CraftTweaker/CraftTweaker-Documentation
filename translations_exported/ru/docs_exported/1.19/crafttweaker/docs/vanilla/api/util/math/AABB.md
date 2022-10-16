# AABB

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.AABB;
```


## Методы

:::group{name=clip}

Return Type: [Vec3](/vanilla/api/util/math/Vec3)?

```zenscript
AABB.clip(minVec as Vec3, maxVec as Vec3) as Vec3?
```

| Параметр | Тип                                 |
| -------- | ----------------------------------- |
| minVec   | [Vec3](/vanilla/api/util/math/Vec3) |
| maxVec   | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=contains}

Return Type: boolean

```zenscript
AABB.contains(other as Vec3) as boolean
```

| Параметр | Тип                                 |
| -------- | ----------------------------------- |
| other    | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=contains}

Return Type: boolean

```zenscript
AABB.contains(x as double, y as double, z as double) as boolean
```

| Параметр | Тип    |
| -------- | ------ |
| x        | double |
| y        | double |
| z        | double |


:::

:::group{name=contract}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.contract(x as double, y as double, z as double) as AABB
```

| Параметр | Тип    |
| -------- | ------ |
| x        | double |
| y        | double |
| z        | double |


:::

:::group{name=deflate}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.deflate(scalar as double) as AABB
```

| Параметр | Тип    |
| -------- | ------ |
| scalar   | double |


:::

:::group{name=deflate}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.deflate(x as double, y as double, z as double) as AABB
```

| Параметр | Тип    |
| -------- | ------ |
| x        | double |
| y        | double |
| z        | double |


:::

:::group{name=expandTowards}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.expandTowards(vec as Vec3) as AABB
```

| Параметр | Тип                                 |
| -------- | ----------------------------------- |
| vec      | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=expandTowards}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.expandTowards(x as double, y as double, z as double) as AABB
```

| Параметр | Тип    |
| -------- | ------ |
| x        | double |
| y        | double |
| z        | double |


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

| Параметр | Тип    |
| -------- | ------ |
| scalar   | double |


:::

:::group{name=inflate}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.inflate(x as double, y as double, z as double) as AABB
```

| Параметр | Тип    |
| -------- | ------ |
| x        | double |
| y        | double |
| z        | double |


:::

:::group{name=intersect}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.intersect(other as AABB) as AABB
```

| Параметр | Тип                                 |
| -------- | ----------------------------------- |
| other    | [AABB](/vanilla/api/util/math/AABB) |


:::

:::group{name=intersects}

Return Type: boolean

```zenscript
AABB.intersects(other as AABB) as boolean
```

| Параметр | Тип                                 |
| -------- | ----------------------------------- |
| other    | [AABB](/vanilla/api/util/math/AABB) |


:::

:::group{name=intersects}

Return Type: boolean

```zenscript
AABB.intersects(minVec as Vec3, maxVec as Vec3) as boolean
```

| Параметр | Тип                                 |
| -------- | ----------------------------------- |
| minVec   | [Vec3](/vanilla/api/util/math/Vec3) |
| maxVec   | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=intersects}

Return Type: boolean

```zenscript
AABB.intersects(minX as double, minY as double, minZ as double, maxX as double, maxY as double, maxZ as double) as boolean
```

| Параметр | Тип    |
| -------- | ------ |
| minX     | double |
| minY     | double |
| minZ     | double |
| maxX     | double |
| maxY     | double |
| maxZ     | double |


:::

:::group{name=max}

Return Type: double

```zenscript
AABB.max(direction as Axis) as double
```

| Параметр  | Тип                                      |
| --------- | ---------------------------------------- |
| direction | [Axis](/vanilla/api/util/direction/Axis) |


:::

:::group{name=min}

Return Type: double

```zenscript
AABB.min(direction as Axis) as double
```

| Параметр  | Тип                                      |
| --------- | ---------------------------------------- |
| direction | [Axis](/vanilla/api/util/direction/Axis) |


:::

:::group{name=minmax}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.minmax(other as AABB) as AABB
```

| Параметр | Тип                                 |
| -------- | ----------------------------------- |
| other    | [AABB](/vanilla/api/util/math/AABB) |


:::

:::group{name=move}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.move(pos as BlockPos) as AABB
```

| Параметр | Тип                                         |
| -------- | ------------------------------------------- |
| pos      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=move}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.move(vec as Vec3) as AABB
```

| Параметр | Тип                                 |
| -------- | ----------------------------------- |
| vec      | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=move}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.move(x as double, y as double, z as double) as AABB
```

| Параметр | Тип    |
| -------- | ------ |
| x        | double |
| y        | double |
| z        | double |


:::

:::group{name=setMaxX}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.setMaxX(maxX as double) as AABB
```

| Параметр | Тип    |
| -------- | ------ |
| maxX     | double |


:::

:::group{name=setMaxY}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.setMaxY(maxY as double) as AABB
```

| Параметр | Тип    |
| -------- | ------ |
| maxY     | double |


:::

:::group{name=setMaxZ}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.setMaxZ(maxZ as double) as AABB
```

| Параметр | Тип    |
| -------- | ------ |
| maxZ     | double |


:::

:::group{name=setMinX}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.setMinX(minX as double) as AABB
```

| Параметр | Тип    |
| -------- | ------ |
| minX     | double |


:::

:::group{name=setMinY}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.setMinY(minY as double) as AABB
```

| Параметр | Тип    |
| -------- | ------ |
| minY     | double |


:::

:::group{name=setMinZ}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
AABB.setMinZ(minZ as double) as AABB
```

| Параметр | Тип    |
| -------- | ------ |
| minZ     | double |


:::


## Свойства

| Название | Тип                                 | Имеет Getter | Имеет Setter |
| -------- | ----------------------------------- | ------------ | ------------ |
| center   | [Vec3](/vanilla/api/util/math/Vec3) | true         | false        |
| hasNaN   | boolean                             | true         | false        |
| size     | double                              | true         | false        |
| xSize    | double                              | true         | false        |
| ySize    | double                              | true         | false        |
| zSize    | double                              | true         | false        |

