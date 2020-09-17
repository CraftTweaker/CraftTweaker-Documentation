# 方向

表示主要方向（北部、南部、东部、西部）和（上下）。

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.util.Direction
```

## 方法
### rotateY

在 Y 轴上旋转此方向

 返回： `此方向的 Y 轴旋转的方向`

返回类型： [craftbiner.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### 旋转YCCW

在 Y 轴上顺时针旋转反时钟

 返回： `在 Y 轴上逆时针的方向`

返回类型： [craftbiner.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.旋转YCCW();
```


## 参数

| 名称         | 类型                                                                     | 可获得  | 可设置   |
| ---------- | ---------------------------------------------------------------------- | ---- | ----- |
| 轴          | [craftbinvest.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | true | false |
| axisOffset | 整数                                                                     | true | false |
| 向下         | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true | true  |
| 东部地区       | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true | true  |
| 水平角度       | 浮点数                                                                    | true | false |
| 水平索引       | 整数                                                                     | true | false |
| index      | 整数                                                                     | true | false |
| 名称         | 字符串[string]                                                            | true | false |
| 北区         | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true | true  |
| 相反的        | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true | false |
| 边          | [craftbinstruer.api.util.Direction](/vanilla/api/util/Direction)[]     | true | true  |
| 南方         | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true | true  |
| 上          | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true | true  |
| 西部地区       | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true | true  |
| xOffset    | 整数                                                                     | true | false |
| yOffset    | 整数                                                                     | true | false |
| zOffset    | 整数                                                                     | true | false |

