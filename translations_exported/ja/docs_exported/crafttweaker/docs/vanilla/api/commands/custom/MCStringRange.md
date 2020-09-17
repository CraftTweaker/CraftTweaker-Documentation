# MCStringRange

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCStringRange
```

## メソッド
### に

戻り値の型: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.at(pos as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| pos   | int | 説明が提供されていません |


### の間

戻り値の型: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.between(int, end as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| 開始    | int | 説明が提供されていません |
| 終了    | int | 説明が提供されていません |


### 包含すること

戻り値の型: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.compassing(crafttweaker.api.commands.custom.MCStringRange, b as crafttweaker.api.commands.custom.MCStringRange);
```

| パラメータ | タイプ                                                                                          | 説明           |
| ----- | -------------------------------------------------------------------------------------------- | ------------ |
| a     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | 説明が提供されていません |
| b     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | 説明が提供されていません |


### 等しい

戻り値の型: boolean

```zenscript
myMCStringRange.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### 取得する

戻り値の型: String

```zenscript
myMCStringRange.get(string as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 文字列   | 文字列型 | 説明が提供されていません |



戻り値の型: String

```zenscript
myMCStringRange.get(reader as crafttweaker.api.commands.custom.MCImmutableStringReader);
```

| パラメータ | タイプ                                                                                                              | 説明           |
| ----- | ---------------------------------------------------------------------------------------------------------------- | ------------ |
| リーダー  | [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | 説明が提供されていません |


### getEnd

戻り値の種類: int

```zenscript
myMCStringRange.getEnd();
```

### getLength

戻り値の種類: int

```zenscript
myMCStringRange.getLength();
```

### getStart

戻り値の種類: int

```zenscript
myMCStringRange.getStart();
```

### hashCode

戻り値の種類: int

```zenscript
myMCStringRange.hashCode();
```

### isEmpty

戻り値の型: boolean

```zenscript
myMCStringRange.isEmpty();
```

### toString

戻り値の型: String

```zenscript
myMCStringRange.toString();
```


