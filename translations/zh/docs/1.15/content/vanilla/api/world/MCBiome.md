# MCBiome

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.world.MCBiome
```

## 使用方式
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

| 参数 | 类型                                                           | 描述                      |
| -- | ------------------------------------------------------------ | ----------------------- |
| 点  | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |



## 参数

| 名称                 | 类型          | 可获得  | 可设置   |
| ------------------ | ----------- | ---- | ----- |
| category           | 字符串[string] | true | false |
| defaultTemperature | 浮点数         | true | false |
| depth              | 浮点数         | true | false |
| doesRain           | 布尔值         | true | false |
| doesSnow           | 布尔值         | true | false |
| downfall           | 浮点数         | true | false |
| isHighHumidity     | 布尔值         | true | false |
| isMutation         | 布尔值         | true | false |
| isTempCold         | 布尔值         | true | false |
| isTempMedium       | 布尔值         | true | false |
| isTempOcean        | 布尔值         | true | false |
| isTempWarm         | 布尔值         | true | false |
| parent             | 字符串[string] | true | false |
| rainType           | 字符串[string] | true | false |
| scale              | 浮点数         | true | false |
| spawningChange     | 浮点数         | true | false |
| translationKey     | 字符串[string] | true | false |
| waterColor         | int         | true | false |
| waterFogColor      | int         | true | false |

