# DirectionAxis

Represents a direction axis (X, Y, Z)

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.DirectionAxis;
```


## Extending Enum&lt;DirectionAxis&gt;

DirectionAxis extends Enum&lt;[DirectionAxis](/vanilla/api/util/DirectionAxis)&gt;. That means all methods available in Enum&lt;[DirectionAxis](/vanilla/api/util/DirectionAxis)&gt; are also available in DirectionAxis

## 已实现的接口
DirectionAxis implements the following interfaces. That means all methods defined in these interfaces are also available in DirectionAxis

- Predicate

## Static Properties

| 名称 | 类型                                               | 可获得  | 可设置   | 描述                      |
| -- | ------------------------------------------------ | ---- | ----- | ----------------------- |
| X  | [DirectionAxis](/vanilla/api/util/DirectionAxis) | true | false | No Description Provided |
| Y  | [DirectionAxis](/vanilla/api/util/DirectionAxis) | true | false | No Description Provided |
| Z  | [DirectionAxis](/vanilla/api/util/DirectionAxis) | true | false | No Description Provided |

## 方法

:::group{name=equals}

Return Type: boolean

```zenscript
DirectionAxis.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


:::

:::group{name=getCoordinate}

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Returns: value of the coordinate  
Return Type: double

```zenscript
// DirectionAxis.getCoordinate(x as double, y as double, z as double) as double

<directionaxis:x>.getCoordinate(1.2, 2.5, 3.87);
```

| 参数 | 类型     | 描述                        |
| -- | ------ | ------------------------- |
| x  | double | x value of the coordinate |
| y  | double | y value of the coordinate |
| z  | double | z value of the coordinate |


:::

:::group{name=getCoordinate}

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Returns: value of the coordinate  
Return Type: int

```zenscript
// DirectionAxis.getCoordinate(x as int, y as int, z as int) as int

<directionaxis:x>.getCoordinate(1, 2, 3);
```

| 参数 | 类型  | 描述                        |
| -- | --- | ------------------------- |
| x  | int | x value of the coordinate |
| y  | int | y value of the coordinate |
| z  | int | z value of the coordinate |


:::

:::group{name=hashCode}

Return Type: int

```zenscript
// DirectionAxis.hashCode() as int

<directionaxis:x>.hashCode();
```

:::


## 参数

| 名称            | 类型      | 可获得  | 可设置   | 描述                                          |
| ------------- | ------- | ---- | ----- | ------------------------------------------- |
| commandString | string  | true | false | No Description Provided                     |
| hashCode      | int     | true | false | No Description Provided                     |
| horizontal    | boolean | true | false | No Description Provided                     |
| name          | string  | true | false | Get the name of this Axis ("X", "Y" or "Z") |
| ordinal       | int     | true | false | Gets the enum ordinal of this axis          |
| vertical      | boolean | true | false | No Description Provided                     |

