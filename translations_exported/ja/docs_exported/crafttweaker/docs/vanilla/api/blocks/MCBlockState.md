# MCBlockState

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.block.MCBlockState
```

## 実装されたインターフェース
MCBlockState は以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### getAllowedValuesForProperty

戻り値の種類: リスト&lt;String&gt;

```zenscript
myMCBlockState.getAllowedValuesForProperty(name as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 名前    | 文字列型 | 説明が提供されていません |


### getProperties

戻り値の型: String[String]

```zenscript
myMCBlockState.getProperties();
```

### getPropertyNames

戻り値の種類: リスト&lt;String&gt;

```zenscript
myMCBlockState.getPropertyNames();
```

### getPropertyValue

戻り値の型: String

```zenscript
myMCBlockState.getPropertyValue(name as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 名前    | 文字列型 | 説明が提供されていません |


### hasProperty

戻り値の型: boolean

```zenscript
myMCBlockState.hasProperty(name as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 名前    | 文字列型 | 説明が提供されていません |


### withProperty

戻り値の型: [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(name as String, value as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 名前    | 文字列型 | 説明が提供されていません |
| 値     | 文字列型 | 説明が提供されていません |



## プロパティー

| 名称              | タイプ                                                           | ゲッターあり | セッターあり |
| --------------- | ------------------------------------------------------------- | ------ | ------ |
| ブロック            | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true   | false  |
| canProvidePower | boolean型                                                      | true   | false  |
| commandString   | 文字列型                                                          | true   | false  |
| hasTileEntity   | boolean型                                                      | true   | false  |
| isSolid         | boolean型                                                      | true   | false  |
| isSticky        | boolean型                                                      | true   | false  |
| lightLevel      | int                                                           | true   | false  |
| ticsRandomly    | boolean型                                                      | true   | false  |

## キャスト

| 結果の種類                                                         | 暗黙的   |
| ------------------------------------------------------------- | ----- |
| 文字列型                                                          | false |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true  |

