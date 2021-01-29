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
## 方法

### equals #等于

Return Type: boolean

```zenscript
DirectionAxis.equals(o as Object) as boolean
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |

### getCoordinate

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Return Type: double

```zenscript
DirectionAxis.getCoordinate(x as double, y as double, z as double) as double
<directionaxis:x>.getCoordinate(1.2, 2.5, 3.87);
```
| 参数 | 类型     | 描述                        |
| -- | ------ | ------------------------- |
| x  | double | x value of the coordinate |
| y  | double | y value of the coordinate |
| z  | double | z value of the coordinate |

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Return Type: int

```zenscript
DirectionAxis.getCoordinate(x as int, y as int, z as int) as int
<directionaxis:x>.getCoordinate(1, 2, 3);
```
| 参数 | 类型  | 描述                        |
| -- | --- | ------------------------- |
| x  | int | x value of the coordinate |
| y  | int | y value of the coordinate |
| z  | int | z value of the coordinate |

### hashCode

Return Type: int

```zenscript
DirectionAxis.hashCode() as int
<directionaxis:x>.hashCode();
```

## 参数

| 名称            | 类型      | 可获得  | 可设置   |
| ------------- | ------- | ---- | ----- |
| commandString | string  | true | false |
| hashCode      | int     | true | false |
| horizontal    | boolean | true | false |
| name          | string  | true | false |
| ordinal       | int     | true | false |
| vertical      | boolean | true | false |

