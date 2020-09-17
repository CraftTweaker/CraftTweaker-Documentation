# MCSuggestion

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCSuggestion
```

## メソッド
### 適用する

戻り値の型: String

```zenscript
myMCSuggestion.apply(input as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| input | 文字列型 | 説明が提供されていません |


### compareTo

戻り値の種類: int

```zenscript
myMCSuggestion.compareTo(o as crafttweaker.api.commands.custom.MCSuggestion);
```

| パラメータ | タイプ                                                                                        | 説明           |
| ----- | ------------------------------------------------------------------------------------------ | ------------ |
| o     | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | 説明が提供されていません |


### compareToIgnoreCase

戻り値の種類: int

```zenscript
myMCSuggestion.compareToIgnoreCase(b as crafttweaker.api.commands.custom.MCSuggestion);
```

| パラメータ | タイプ                                                                                        | 説明           |
| ----- | ------------------------------------------------------------------------------------------ | ------------ |
| b     | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | 説明が提供されていません |


### 等しい

戻り値の型: boolean

```zenscript
myMCSuggestion.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### 展開

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
myMCSuggestion.expand(command as String, range as crafttweaker.api.commands.custom.MCStringRange);
```

| パラメータ     | タイプ                                                                                          | 説明           |
| --------- | -------------------------------------------------------------------------------------------- | ------------ |
| (Command) | 文字列型                                                                                         | 説明が提供されていません |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | 説明が提供されていません |


### getRange

戻り値の型: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestion.getRange();
```

### getText

戻り値の型: String

```zenscript
myMCSuggestion.getText();
```

### getTooltip

戻り値の型: String

```zenscript
myMCSuggestion.getTooltip();
```

### hashCode

戻り値の種類: int

```zenscript
myMCSuggestion.hashCode();
```

### toString

戻り値の型: String

```zenscript
myMCSuggestion.toString();
```


## 演算子
### EQUALS

```zenscript
myMCSuggestion == o as Object
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

