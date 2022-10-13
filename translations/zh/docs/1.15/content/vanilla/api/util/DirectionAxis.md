# DirectionAxis

Represents a direction axis (X, Y, Z)

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.util.DirectionAxis
```

## 已实现的接口
DirectionAxis implements the following interfaces. 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 使用方式
### getCoordinate

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

返回为int值

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| 参数 | 类型  | 描述                        |
| -- | --- | ------------------------- |
| x  | int | x value of the coordinate |
| y  | int | y value of the coordinate |
| z  | int | z value of the coordinate |



## 参数

| 名称                   | 类型          | 可获得  | 可设置   |
| -------------------- | ----------- | ---- | ----- |
| commandString #命令字符串 | 字符串[string] | true | false |
| horizontal           | 布尔值         | true | false |
| name（名称）             | 字符串[string] | true | false |
| ordinal              | int         | true | false |
| vertical             | 布尔值         | true | false |

