# MCEntityType

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.entity.MCEntityType
```

## 実装されたインターフェース
MCEntityType は以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## プロパティー

| 名称             | タイプ                                                                                | ゲッターあり | セッターあり |
| -------------- | ---------------------------------------------------------------------------------- | ------ | ------ |
| 分類             | [crafttweaker.api.entity.MCEntity分類](/vanilla/api/entities/MCEntityClassification) | true   | false  |
| commandString  | 文字列型                                                                               | true   | false  |
| 高さ             | float型                                                                             | true   | false  |
| immuneToFire   | boolean型                                                                           | true   | false  |
| lootTable      | 文字列型                                                                               | true   | false  |
| 名前             | 文字列型                                                                               | true   | false  |
| serializable   | boolean型                                                                           | true   | false  |
| 召喚可能           | boolean型                                                                           | true   | false  |
| translationKey | 文字列型                                                                               | true   | false  |
| width          | float型                                                                             | true   | false  |

