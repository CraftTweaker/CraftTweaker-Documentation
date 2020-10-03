# MCBiome

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.world.MCBiome
```

## 方法
### getSpawns

Returns List<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(classification as crafttweaker.api.entity.MCEntityClassification);
```

| 参数                 | 类型                                                                                             | 描述                      |
| ------------------ | ---------------------------------------------------------------------------------------------- | ----------------------- |
| classification #类别 | [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) | No description provided |


### getTempCategory

返回字符串[String]

```zenscript
myMCBiome.getTempCategory();
```

### getTemperature

Returns float

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| 参数 | 类型                                                           | 说明                      |
| -- | ------------------------------------------------------------ | ----------------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |



## 参数

| 名称                 | 类型      | 可获得  | 可设置   |
| ------------------ | ------- | ---- | ----- |
| category           | String  | true | false |
| defaultTemperature | float   | true | false |
| depth              | float   | true | false |
| doesRain           | boolean | true | false |
| doesSnow           | boolean | true | false |
| downfall           | float   | true | false |
| isHighHumidity     | boolean | true | false |
| isMutation         | boolean | true | false |
| isTempCold         | boolean | true | false |
| isTempMedium       | boolean | true | false |
| isTempOcean        | boolean | true | false |
| isTempWarm         | boolean | true | false |
| parent             | String  | true | false |
| rainType           | String  | true | false |
| scale              | float   | true | false |
| spawningChange     | float   | true | false |
| translationKey     | String  | true | false |
| waterColor         | int     | true | false |
| waterFogColor      | int     | true | false |

