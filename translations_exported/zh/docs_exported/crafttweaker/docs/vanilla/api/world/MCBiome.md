# MCBiome

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.world.MCBiome
```

## 方法
### getTemperature

返回类型：浮点数

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| 参数 | 类型                                                           | 描述                      |
| -- | ------------------------------------------------------------ | ----------------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |



## 参数

| 名称             | 类型      | 可获得  | 可设置   |
| -------------- | ------- | ---- | ----- |
| category       | String  | true | false |
| depth          | float   | true | false |
| doesRain       | boolean | true | false |
| doesSnow       | boolean | true | false |
| downfall       | float   | true | false |
| isHighHumidity | boolean | true | false |
| rainType       | String  | true | false |
| scale          | float   | true | false |
| waterColor     | int     | true | false |
| waterFogColor  | int     | true | false |

