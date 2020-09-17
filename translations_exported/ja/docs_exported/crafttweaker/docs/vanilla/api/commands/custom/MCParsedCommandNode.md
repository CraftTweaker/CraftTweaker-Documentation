# MCParsedCommandNode

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCParsedCommandNode
```

## メソッド
### 等しい

戻り値の型: boolean

```zenscript
myMCParsedCommandNode.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### getNode

戻り値の型: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCParsedCommandNode.getNode();
```

### getRange

戻り値の型: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCParsedCommandNode.getRange();
```

### hashCode

戻り値の種類: int

```zenscript
myMCParsedCommandNode.hashCode();
```

### toString

戻り値の型: String

```zenscript
myMCParsedCommandNode.toString();
```


## 演算子
### EQUALS

```zenscript
myMCParsedCommandNode == o as Object
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

