# MCBiome

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.world.MCBiome
```

## メソッド
### getSpawns

戻り値 List<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(crafttweaker.api.entity.MCEntityClassification);
```

| パラメータ | タイプ                                                                                | 説明           |
| ----- | ---------------------------------------------------------------------------------- | ------------ |
| 分類    | [crafttweaker.api.entity.MCEntity分類](/vanilla/api/entities/MCEntityClassification) | 説明が提供されていません |


### getTempCategory

戻り値の文字列

```zenscript
myMCome.getTempCategory();
```

### getTemperature

float を返します。

```zenscript
myMCBiome.getTemperature(crafttweaker.api.util.BlockPos);
```

| パラメータ | タイプ                                                          | 説明           |
| ----- | ------------------------------------------------------------ | ------------ |
| pos   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 説明が提供されていません |



## プロパティー

| 名称             | タイプ      | ゲッターあり | セッターあり |
| -------------- | -------- | ------ | ------ |
| カテゴリ           | 文字列型     | true   | false  |
| デフォルト温度        | float型   | true   | false  |
| 深さ             | float型   | true   | false  |
| doesRain       | boolean型 | true   | false  |
| doesSnow       | boolean型 | true   | false  |
| <unk>          | float型   | true   | false  |
| isHighHumidity | boolean型 | true   | false  |
| isMutation     | boolean型 | true   | false  |
| isTempCold     | boolean型 | true   | false  |
| isTempMedium   | boolean型 | true   | false  |
| isTempOcean    | boolean型 | true   | false  |
| isTempWarm     | boolean型 | true   | false  |
| 親              | 文字列型     | true   | false  |
| rainType       | 文字列型     | true   | false  |
| スケール           | float型   | true   | false  |
| spawningChange | float型   | true   | false  |
| translationKey | 文字列型     | true   | false  |
| waterColor     | int      | true   | false  |
| waterFogColor  | int      | true   | false  |

