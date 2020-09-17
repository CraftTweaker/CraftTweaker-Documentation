# MCArgumentCommandNode

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCArgumentCommandNode
```

## 実装されたインターフェース
MCArgumentCommandNode は以下のインターフェイスを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## メソッド
### createBuilder

戻り値の型: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCArgumentCommandNode.createBuilder();
```

### 等しい

戻り値の型: boolean

```zenscript
myMCArgumentCommandNode.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### getCustomSuggestions

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCArgumentCommandNode.getCustomSuggestions();
```

### hashCode

戻り値の種類: int

```zenscript
myMCArgumentCommandNode.hashCode();
```

### toString

戻り値の型: String

```zenscript
myMCArgumentCommandNode.toString();
```


## 演算子
### EQUALS

```zenscript
myMCArgumentCommandNode == o as Object
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

