# MCBiome

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.world.MCBiome
```

## メソッド
### getSpawns

Returns List<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(classification as crafttweaker.api.entity.MCEntityClassification);
```

| パラメータ          | タイプ                                                                                            | 説明                      |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| classification | [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) | No description provided |


### getTempCategory

Returns String

```zenscript
myMCBiome.getTempCategory();
```

### getTemperature

Returns float

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| パラメータ | タイプ                                                          | 説明                      |
| ----- | ------------------------------------------------------------ | ----------------------- |
| pos   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |



## プロパティー

| 名称                 | タイプ      | Has Getter | Has Setter |
| ------------------ | -------- | ---------- | ---------- |
| category           | 文字列型     | true       | false      |
| defaultTemperature | float型   | true       | false      |
| depth              | float型   | true       | false      |
| doesRain           | boolean型 | true       | false      |
| doesSnow           | boolean型 | true       | false      |
| downfall           | float型   | true       | false      |
| isHighHumidity     | boolean型 | true       | false      |
| isMutation         | boolean型 | true       | false      |
| isTempCold         | boolean型 | true       | false      |
| isTempMedium       | boolean型 | true       | false      |
| isTempOcean        | boolean型 | true       | false      |
| isTempWarm         | boolean型 | true       | false      |
| 親                  | 文字列型     | true       | false      |
| rainType           | 文字列型     | true       | false      |
| scale              | float型   | true       | false      |
| spawningChange     | float型   | true       | false      |
| translationKey     | 文字列型     | true       | false      |
| waterColor         | int      | true       | false      |
| waterFogColor      | int      | true       | false      |

