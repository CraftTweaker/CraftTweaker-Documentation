# Plane

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.direction.Plane;
```


## 已实现的接口
Plane implements the following interfaces. That means all methods defined in these interfaces are also available in Plane

- stdlib.Iterable&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;
- Predicate&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;

## Enum Constants

Plane is an enum. It has 2 enum constants. They are accessible using the code below.

```zenscript
Plane.HORIZONTAL
Plane.VERTICAL
```
## 使用方式

:::group{name=getRandomAxis}

Return Type: [Axis](/vanilla/api/util/direction/Axis)

```zenscript
Plane.getRandomAxis(random as Random) as Axis
```

| 参数     | 类型                                      | 描述                      |
| ------ | --------------------------------------- | ----------------------- |
| random | [Random](/vanilla/api/util/math/Random) | No Description Provided |


:::

:::group{name=getRandomDirection}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
Plane.getRandomDirection(random as Random) as Direction
```

| 参数     | 类型                                      | 描述                      |
| ------ | --------------------------------------- | ----------------------- |
| random | [Random](/vanilla/api/util/math/Random) | No Description Provided |


:::

:::group{name=iterator}

Return Type: stdlib.Iterator&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;

```zenscript
// Plane.iterator() as stdlib.Iterator<Direction>

myPlane.iterator();
```

:::

:::group{name=test}

Return Type: boolean

```zenscript
Plane.test(direction as Direction) as boolean
```

| 参数        | 类型                                                 | 描述                      |
| --------- | -------------------------------------------------- | ----------------------- |
| direction | [Direction](/vanilla/api/util/direction/Direction) | No Description Provided |


:::


## 参数

| 名称       | 类型                                                                                    | 可获得  | 可设置   | 描述                      |
| -------- | ------------------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| iterator | stdlib.Iterator&lt;[Direction](/vanilla/api/util/direction/Direction)&gt; | true | false | No Description Provided |

