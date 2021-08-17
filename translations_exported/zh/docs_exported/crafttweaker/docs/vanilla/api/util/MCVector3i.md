# MCVector3i

A 3-dimensional vector, in a 3-dimensional vector space.

 This class is immutable, meaning its values cannot change, so it is safe to be stored as a key in maps or in collections.

 No, it's not an arrow.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.MCVector3i;
```


## 已实现的接口
MCVector3i implements the following interfaces. That means all methods defined in these interfaces are also available in MCVector3i

- Comparable&lt;[MCVector3i](/vanilla/api/util/MCVector3i)&gt;

## Constructor #构造函数


```zenscript
new MCVector3i(x as int, y as int, z as int) as MCVector3i
```
| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | int | No description provided |
| y  | int | No description provided |
| z  | int | No description provided |



## Casters

| 结果类型                                       | 是否隐藏  |
| ------------------------------------------ | ----- |
| [MCVector3d](/vanilla/api/util/MCVector3d) | false |

## 方法

:::group{name=asVector3i}

Return Type: [MCVector3d](/vanilla/api/util/MCVector3d)

```zenscript
// MCVector3i.asVector3i() as MCVector3d

myMCVector3i.asVector3i();
```

:::

:::group{name=crossProduct}

Creates a new Vector3i based on the cross product of this position, and the given position

Returns: a new Vector3i based on the cross product of this Vector3i and the given Vector3i  
Return Type: [MCVector3i](/vanilla/api/util/MCVector3i)

```zenscript
MCVector3i.crossProduct(vec as MCVector3i) as MCVector3i
```

| 参数  | 类型                                         | 描述                        |
| --- | ------------------------------------------ | ------------------------- |
| vec | [MCVector3i](/vanilla/api/util/MCVector3i) | Vector3i to cross product |


:::

:::group{name=distanceSq}

Gets the squared distance of this position to the specified Vector3i, using the center of the Vector3i

Returns: the squared distance of this current position and the given Vector3i.  
Return Type: double

```zenscript
// MCVector3i.distanceSq(to as MCVector3i) as double

myMCVector3i.distanceSq(new Vector3i(256, 128, 10););
```

| 参数 | 类型                                         | 描述                        |
| -- | ------------------------------------------ | ------------------------- |
| to | [MCVector3i](/vanilla/api/util/MCVector3i) | Vector3i to check against |


:::

:::group{name=distanceSq}

Gets the squared distance of this position to the specified Vector3i

Returns: the squared distance of this current position and the given Vector3i.  
Return Type: double

```zenscript
MCVector3i.distanceSq(position as IPosition, useCenter as boolean) as double
```

| 参数        | 类型                                            | 描述                                                                    |
| --------- | --------------------------------------------- | --------------------------------------------------------------------- |
| position  | [IPosition](/vanilla/api/dispenser/IPosition) | Vector3i to check against                                             |
| useCenter | boolean                                       | should the center of the coordinate be used? (adds 0.5 to each value) |


:::

:::group{name=distanceSq}

Gets the squared distance of this position to the specified coordinates

Returns: the squared distance of this current position and the given coordinates.  
Return Type: double

```zenscript
// MCVector3i.distanceSq(x as double, y as double, z as double, useCenter as boolean) as double

myMCVector3i.distanceSq(500.25, 250.75, 100.20, false);
```

| 参数        | 类型      | 描述                                                                    |
| --------- | ------- | --------------------------------------------------------------------- |
| x         | double  | x position to check against                                           |
| y         | double  | y position to check against                                           |
| z         | double  | z position to check against                                           |
| useCenter | boolean | should the center of the coordinate be used? (adds 0.5 to each value) |


:::

:::group{name=down}

Creates a new Vector3i based on this Vector3i that is one block lower than this Vector3i

Returns: a new Vector3i that is one block lower than this Vector3i  
Return Type: [MCVector3i](/vanilla/api/util/MCVector3i)

```zenscript
// MCVector3i.down() as MCVector3i

myMCVector3i.down();
```

:::

:::group{name=down}

Creates a new Vector3i based on this Vector3i that is n block(s) lower than this Vector3i

Returns: a new Vector3i that is n block(s) lower than this Vector3i  
Return Type: [MCVector3i](/vanilla/api/util/MCVector3i)

```zenscript
MCVector3i.down(n as int) as MCVector3i
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| n  | int | No Description Provided |


:::

:::group{name=getCoordinatesAsString}

Return Type: string

```zenscript
// MCVector3i.getCoordinatesAsString() as string

myMCVector3i.getCoordinatesAsString();
```

:::

:::group{name=getX}

Gets the X coordinate of this vector.

Returns: The X coordinate.  
Return Type: int

```zenscript
// MCVector3i.getX() as int

myMCVector3i.getX();
```

:::

:::group{name=getY}

Gets the Y coordinate of this vector.

Returns: The Y coordinate.  
Return Type: int

```zenscript
// MCVector3i.getY() as int

myMCVector3i.getY();
```

:::

:::group{name=getZ}

Gets the Y coordinate of this vector.

Returns: The Y coordinate.  
Return Type: int

```zenscript
// MCVector3i.getZ() as int

myMCVector3i.getZ();
```

:::

:::group{name=manhattanDistance}

Gets the Manhattan Distance of this vector compared to a different vector

Returns: The manhattan distance of the vectors  
Return Type: int

```zenscript
MCVector3i.manhattanDistance(vector as MCVector3i) as int
```

| 参数     | 类型                                         | 描述                                  |
| ------ | ------------------------------------------ | ----------------------------------- |
| vector | [MCVector3i](/vanilla/api/util/MCVector3i) | other vector to get the distance to |


:::

:::group{name=offset}

Creates a new Vector3i based on this Vector3i that is one block offset of this Vector3i based on the given [Direction](/vanilla/api/util/Direction)

Returns: a new Vector3i that is 1 block offset of this Vector3i  
Return Type: [MCVector3i](/vanilla/api/util/MCVector3i)

```zenscript
MCVector3i.offset(facing as Direction, n as int) as MCVector3i
```

| 参数 | 类型                                       | 描述                      |
| -- | ---------------------------------------- | ----------------------- |
| 方向 | [Direction](/vanilla/api/util/Direction) | No Description Provided |
| n  | int                                      | No Description Provided |


:::

:::group{name=up}

Creates a new Vector3i based on this Vector3i that is one block higher than this Vector3i

Returns: a new Vector3i that is one block higher than this Vector3i  
Return Type: [MCVector3i](/vanilla/api/util/MCVector3i)

```zenscript
// MCVector3i.up() as MCVector3i

myMCVector3i.up();
```

:::

:::group{name=up}

Creates a new Vector3i based on this Vector3i that is n block(s) higher than this Vector3i

Returns: a new Vector3i that is n block(s) higher than this Vector3i  
Return Type: [MCVector3i](/vanilla/api/util/MCVector3i)

```zenscript
// MCVector3i.up(n as int) as MCVector3i

myMCVector3i.up(45);
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| n  | int | No Description Provided |


:::

:::group{name=withinDistance}

Checks if the given Vector3i is within the specified distance of this Vector3i (this uses the middle of the Vector3i)

Returns: true if the given Vector3i is within the given distance of this Vector3i  
Return Type: boolean

```zenscript
MCVector3i.withinDistance(vector as MCVector3i, distance as double) as boolean
```

| 参数       | 类型                                         | 描述                                             |
| -------- | ------------------------------------------ | ---------------------------------------------- |
| vector   | [MCVector3i](/vanilla/api/util/MCVector3i) | Vector3i to check if it is within the distance |
| distance | double                                     | distance to check within                       |


:::


## 参数

| 名称               | 类型     | 可获得  | 可设置   | 描述                                    |
| ---------------- | ------ | ---- | ----- | ------------------------------------- |
| coordinateString | string | true | false | No Description Provided               |
| x                | int    | true | false | Gets the X coordinate of this vector. |
| y                | int    | true | false | Gets the Y coordinate of this vector. |
| z                | int    | true | false | Gets the Y coordinate of this vector. |

