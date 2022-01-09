# Direction

Represents a cardinal direction (north, south, east, west) and (up and down).

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.util.Direction
```

## 使用方式
### rotateAround

Rotates this direction around a given Axis

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(axis as crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| 参数   | 类型                                                                     | 描述                        |
| ---- | ---------------------------------------------------------------------- | ------------------------- |
| axis | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | the Axis to rotate around |


### rotateY

Rotates this direction on the Y axis

 Returns: `the direction that rotated on the Y axis of this direction`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotateYCCW

Rotates this direction counter-clock wise on the Y axis

 Returns: `the direction that is counter clockwise on the Y axis`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## 参数

| 名称              | 类型                                                                     | 可获得  | 可设置   |
| --------------- | ---------------------------------------------------------------------- | ---- | ----- |
| axis            | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | true | false |
| axisOffset      | int                                                                    | true | false |
| horizontalAngle | 浮点数                                                                    | true | false |
| horizontalIndex | int                                                                    | true | false |
| index           | int                                                                    | true | false |
| name（名称）        | 字符串[string]                                                            | true | false |
| opposite        | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true | false |
| xOffset         | int                                                                    | true | false |
| yOffset         | int                                                                    | true | false |
| zOffset         | int                                                                    | true | false |

