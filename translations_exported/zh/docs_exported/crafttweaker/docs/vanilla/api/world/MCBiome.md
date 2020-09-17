# MCBiome

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstruer.api.world.MCBiome
```

## 方法
### getTemperature

返回类型：浮点数

```zenscript
myMCBiome.getTemperature(pos as craftweeper.api.util.BlockPos)；
```

| 参数 | 类型                                                           | 描述                      |
| -- | ------------------------------------------------------------ | ----------------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |



## 参数

| 名称   | 类型          | 可获得  | 可设置   |
| ---- | ----------- | ---- | ----- |
| 类别   | 字符串[string] | true | false |
| 深度：  | 浮点数         | true | false |
| 无雨   | boolean     | true | false |
| 无雪   | boolean     | true | false |
| 下落时  | 浮点数         | true | false |
| 异高湿度 | boolean     | true | false |
| 雨类型  | 字符串[string] | true | false |
| 缩放   | 浮点数         | true | false |
| 水颜色  | 整数          | true | false |
| 水彩色  | 整数          | true | false |

