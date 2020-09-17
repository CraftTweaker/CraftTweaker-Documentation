# MCSuggestionsBuilder

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCSuggestionsBuilder
```

## メソッド
### 追加

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.add(crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| パラメータ | タイプ                                                                                                        | 説明           |
| ----- | ---------------------------------------------------------------------------------------------------------- | ------------ |
| その他   | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | 説明が提供されていません |


### ビルド

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionsBuilder.build();
```

### createOffset

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.createOffset(start as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| 開始    | int | 説明が提供されていません |


### 等しい

戻り値の型: boolean

```zenscript
myMCSuggestionsBuilder.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### getInput

戻り値の型: String

```zenscript
myMCSuggestionsBuilder.getInput();
```

### 残りの取得

戻り値の型: String

```zenscript
myMCSuggestionsBuilder.getRemaining();
```

### getStart

戻り値の種類: int

```zenscript
myMCSuggestionsBuilder.getStart();
```

### hashCode

戻り値の種類: int

```zenscript
myMCSuggestionsBuilder.hashCode();
```

### 再起動

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.restart();
```

### 提案する

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.sugg(text as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| テキスト  | 文字列型 | 説明が提供されていません |



戻り値の型: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(value as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| 値     | int | 説明が提供されていません |



戻り値の型: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.sugg(text as String, tooltip as String);
```

| パラメータ  | タイプ  | 説明           |
| ------ | ---- | ------------ |
| テキスト   | 文字列型 | 説明が提供されていません |
| ツールチップ | 文字列型 | 説明が提供されていません |



戻り値の型: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.sugg(value as int, tooltip as String);
```

| パラメータ  | タイプ  | 説明           |
| ------ | ---- | ------------ |
| 値      | int  | 説明が提供されていません |
| ツールチップ | 文字列型 | 説明が提供されていません |


### toString

戻り値の型: String

```zenscript
myMCSuggestionsBuilder.toString();
```


## 演算子
### EQUALS

```zenscript
myMCSuggestionsBuilder == o as Object
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

