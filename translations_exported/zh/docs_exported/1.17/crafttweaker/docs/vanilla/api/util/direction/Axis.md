# Axis

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.direction.Axis;
```


## 已实现的接口
Axis implements the following interfaces. That means all methods defined in these interfaces are also available in Axis

- [StringRepresentable](/vanilla/api/util/StringRepresentable)
- Predicate&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;

## Enum Constants

Axis is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
Axis.X
Axis.Y
Axis.Z
```
## 使用方式

:::group{name=choose}

Return Type: double

```zenscript
Axis.choose(x as double, y as double, z as double) as double
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| x  | double | No Description Provided |
| y  | double | No Description Provided |
| z  | double | No Description Provided |


:::

:::group{name=choose}

Return Type: int

```zenscript
Axis.choose(x as int, y as int, z as int) as int
```

| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| x  | int | No Description Provided |
| y  | int | No Description Provided |
| z  | int | No Description Provided |


:::

:::group{name=getName}

Return Type: string

```zenscript
// Axis.getName() as string

myAxis.getName();
```

:::

:::group{name=getPlane}

Return Type: [Plane](/vanilla/api/util/direction/Plane)

```zenscript
// Axis.getPlane() as Plane

myAxis.getPlane();
```

:::

:::group{name=isHorizontal}

Return Type: boolean

```zenscript
// Axis.isHorizontal() as boolean

myAxis.isHorizontal();
```

:::

:::group{name=isVertical}

Return Type: boolean

```zenscript
// Axis.isVertical() as boolean

myAxis.isVertical();
```

:::

:::group{name=test}

Return Type: boolean

```zenscript
Axis.test(direction as Direction) as boolean
```

| 参数        | 类型                                                 | 描述                      |
| --------- | -------------------------------------------------- | ----------------------- |
| direction | [Direction](/vanilla/api/util/direction/Direction) | No Description Provided |


:::


## 参数

| 名称         | 类型                                         | 可获得  | 可设置   | 描述                      |
| ---------- | ------------------------------------------ | ---- | ----- | ----------------------- |
| horizontal | 布尔值                                        | true | false | No Description Provided |
| name（名称）   | string                                     | true | false | No Description Provided |
| plane      | [Plane](/vanilla/api/util/direction/Plane) | true | false | No Description Provided |
| vertical   | 布尔值                                        | true | false | No Description Provided |

