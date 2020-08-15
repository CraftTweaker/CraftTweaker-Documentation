# MCBiomeSpawnEntry

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.world.MCBiomeSpawnEntry
```

## Constructors
```zenscript
new crafttweaker.api.world.MCBiomeSpawnEntry(entityType as crafttweaker.api.entity.MCEntityType, weight as int, minGroupCount as int, maxGroupCount as int);
```
| パラメータ         | タイプ                                                                        | 説明                      |
| ------------- | -------------------------------------------------------------------------- | ----------------------- |
| entityType    | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType) | No description provided |
| weight        | int                                                                        | No description provided |
| minGroupCount | int                                                                        | No description provided |
| maxGroupCount | int                                                                        | No description provided |



## プロパティー

| 名称            | タイプ                                                                        | Has Getter | Has Setter |
| ------------- | -------------------------------------------------------------------------- | ---------- | ---------- |
| entityType    | [crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType) | true       | false      |
| maxGroupCount | int                                                                        | true       | false      |
| minGroupCount | int                                                                        | true       | false      |
| weight        | int                                                                        | true       | false      |

