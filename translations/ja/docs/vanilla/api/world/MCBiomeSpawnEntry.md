# MCBiomeSpawnEntry

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.world.MCBiomeSpawnEntry
```

## Constructors
```zenscript
new crafttweaker.api.world.MCBiomeSpawnEntry(entityType as crafttweaker.api.entity.MCEntityType, weight as int, maxGroupCount as int);
```
| パラメータ         | タイプ                                                                        | 説明           |
| ------------- | -------------------------------------------------------------------------- | ------------ |
| entityType    | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType) | 説明が提供されていません |
| 重量            | int                                                                        | 説明が提供されていません |
| minGroupCount | int                                                                        | 説明が提供されていません |
| maxGroupCount | int                                                                        | 説明が提供されていません |



## プロパティー

| 名称            | タイプ                                                                        | ゲッターあり | セッターあり |
| ------------- | -------------------------------------------------------------------------- | ------ | ------ |
| entityType    | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType) | true   | false  |
| maxGroupCount | int                                                                        | true   | false  |
| minGroupCount | int                                                                        | true   | false  |
| 重量            | int                                                                        | true   | false  |

