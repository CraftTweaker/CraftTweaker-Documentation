# MCSuggestionProvider

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCSuggestionProvider
```

## Constructors
```zenscript
new crafttweaker.api.commands.custom.MCSuggestionProvider(function.BiFunction<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCSuggestionsBuilder, crafttweaker.api.commands.custom.MCSuggestions>);
```
| パラメータ | タイプ                                                                                                                                                                                                                                                                                                                                                 | 説明           |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 楽しい   | function.BiFunction&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder), [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | 説明が提供されていません |



## メソッド
### 等しい

戻り値の型: boolean

```zenscript
myMCSuggestionProvider.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### getSuggestions

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionProvider.getSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| パラメータ   | タイプ                                                                                                        | 説明           |
| ------- | ---------------------------------------------------------------------------------------------------------- | ------------ |
| context | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | 説明が提供されていません |
| ビルダー:   | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | 説明が提供されていません |


### hashCode

戻り値の種類: int

```zenscript
myMCSuggestionProvider.hashCode();
```

### toString

戻り値の型: String

```zenscript
myMCSuggestionProvider.toString();
```


## 演算子
### EQUALS

```zenscript
myMCSuggestionProvider == o as Object
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

