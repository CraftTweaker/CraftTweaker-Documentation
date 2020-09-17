# MCCommand

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCCommand
```

## Constructors
```zenscript
new crafttweaker.api.commands.custom.MCCommand(function.Function<crafttweaker.api.commands.custom.MCCommandContext, Integer>);
```
| パラメータ | タイプ                                                                                                                                              | 説明           |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| 楽しい   | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Integer&gt; | 説明が提供されていません |



## メソッド
### 等しい

戻り値の型: boolean

```zenscript
myMCCommand.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### hashCode

戻り値の種類: int

```zenscript
myMCCommand.hashCode();
```

### 実行する

戻り値の種類: int

```zenscript
myMCCommand.run(context as crafttweaker.api.commands.custom.MCCommandContext);
```

| パラメータ   | タイプ                                                                                                | 説明           |
| ------- | -------------------------------------------------------------------------------------------------- | ------------ |
| context | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | 説明が提供されていません |


### toString

戻り値の型: String

```zenscript
myMCCommand.toString();
```


## 演算子
### EQUALS

```zenscript
myMCCommand == o as Object
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

