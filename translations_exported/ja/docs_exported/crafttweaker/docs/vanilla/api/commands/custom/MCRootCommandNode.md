# MCRootCommandNode

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCRootCommandNode
```

## 実装されたインターフェース
MCRootCommandNode は以下のインターフェイスを実装します。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## メソッド
### 等しい

戻り値の型: boolean

```zenscript
myMCRootCommandNode.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### hashCode

戻り値の種類: int

```zenscript
myMCRootCommandNode.hashCode();
```

### isValidInput

戻り値の型: boolean

```zenscript
myMCRootCommandNode.isValidInput(input as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| input | 文字列型 | 説明が提供されていません |


### toString

戻り値の型: String

```zenscript
myMCRootCommandNode.toString();
```


## 演算子
### EQUALS

```zenscript
myMCRootCommandNode == o as Object
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

