# MCPParsedArgument

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCParsedArgument
```

## メソッド
### 等しい

戻り値の型: boolean

```zenscript
myMCParsedArgument.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### getRange

戻り値の型: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCParsedArgument.getRange();
```

### hashCode

戻り値の種類: int

```zenscript
myMCParsedArgument.hashCode();
```

### toString

戻り値の型: String

```zenscript
myMCParsedArgument.toString();
```


## 演算子
### EQUALS

```zenscript
myMCParsedArgument == o as Object
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

