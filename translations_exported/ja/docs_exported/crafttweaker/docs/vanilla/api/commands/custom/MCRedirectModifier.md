# MCRedirectModifier

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCRedirectModifier
```

## Constructors
```zenscript
new crafttweaker.api.commands.custom.MCRedirectModifier(function.Function<crafttweaker.api.commands.custom.MCCommandContext, Collection<crafttweaker.api.commands.custom.MCCommandSource>>);
```
| パラメータ | タイプ                                                                                                                                                                                                                                                                     | 説明           |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 楽しい   | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Collection&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;&gt; | 説明が提供されていません |



## メソッド
### 適用する

Return type: Collection&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRedirectModifier.apply(context as crafttweaker.api.commands.custom.MCCommandContext);
```

| パラメータ   | タイプ                                                                                                | 説明           |
| ------- | -------------------------------------------------------------------------------------------------- | ------------ |
| context | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | 説明が提供されていません |


### 等しい

戻り値の型: boolean

```zenscript
myMCRedirectModifier.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### hashCode

戻り値の種類: int

```zenscript
myMCRedirectModifier.hashCode();
```

### toString

戻り値の型: String

```zenscript
myMCRedirectModifier.toString();
```


## 演算子
### EQUALS

```zenscript
myMCRedirectModifier == o をオブジェクトとして
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

