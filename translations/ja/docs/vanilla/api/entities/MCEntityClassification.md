# MCEntityClassification

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.entity.MCEntity分類
```

## 実装されたインターフェース
MCEntityClassification は以下のインターフェイスを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## プロパティー

| 名称                | タイプ      | ゲッターあり | セッターあり |
| ----------------- | -------- | ------ | ------ |
| commandString     | 文字列型     | true   | false  |
| isAnimal          | boolean型 | true   | false  |
| isPeaceful        | boolean型 | true   | false  |
| maxNumberOfEntity | int      | true   | false  |
| 名前                | 文字列型     | true   | false  |

