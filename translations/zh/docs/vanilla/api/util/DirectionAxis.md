# 方向轴

表示方向轴(X, Y, Z)

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftbinvest.api.util.DirectionAxis
```

## 已实现的接口
DirectionAxis 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 方法
### getCoordinate

根据给定的值获取此轴的坐标。 如果这个轴是"X"，它将返回"x"参数的值

返回为int值

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| 参数 | 类型 | 描述      |
| -- | -- | ------- |
| x  | 整数 | 坐标的 x 值 |
| 年  | 整数 | 坐标的 y 值 |
| z  | 整数 | 坐标的z值   |



## 参数

| 名称                   | 类型          | 可获得  | 可设置   |
| -------------------- | ----------- | ---- | ----- |
| commandString #命令字符串 | 字符串[string] | true | false |
| 水平的                  | boolean     | true | false |
| 名称                   | 字符串[string] | true | false |
| 普通的                  | 整数          | true | false |
| 垂直的                  | boolean     | true | false |

