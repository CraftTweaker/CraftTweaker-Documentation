# MCRequiredArgumentBuilder

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCRequiredArgumentBuilder
```

## 実装されたインターフェース
MCRequiredArgumentBuilder は、以下のインターフェースを実装します。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## メソッド
### ビルド

戻り値の型: [crafttweaker.api.commands.custom.MCArgumentCommandNode](/vanilla/api/commands/custom/MCArgumentCommandNode)

```zenscript
myMCRequiredArgumentBuilder.build();
```

### 等しい

戻り値の型: boolean

```zenscript
myMCRequiredArgumentBuilder.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### executes

戻り値の型: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.executes(command as crafttweaker.api.commands.custom.MCCommand);
```

| パラメータ     | タイプ                                                                                  | 説明           |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| (Command) | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | 説明が提供されていません |


### fork

戻り値の型: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.fork(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier);
```

| パラメータ    | タイプ                                                                                                    | 説明           |
| -------- | ------------------------------------------------------------------------------------------------------ | ------------ |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | 説明が提供されていません |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | 説明が提供されていません |


### 前方へ

戻り値の型: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| パラメータ    | タイプ                                                                                                    | 説明           |
| -------- | ------------------------------------------------------------------------------------------------------ | ------------ |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | 説明が提供されていません |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | 説明が提供されていません |
| fork     | boolean型                                                                                               | 説明が提供されていません |


### getArguments

Return type: Collection&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCRequiredArgumentBuilder.getArguments();
```

### getCommand

戻り値の型: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCRequiredArgumentBuilder.getCommand();
```

### getName

戻り値の型: String

```zenscript
myMCRequiredArgumentBuilder.getName();
```

### getRedirect

戻り値の型: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCRequiredArgumentBuilder.getRedirect();
```

### getRedirectModifier

戻り値の型: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCRequiredArgumentBuilder.getRedirectModifier();
```

### getRequirement

戻り値の型: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRequiredArgumentBuilder.getRequirement();
```

### getSuggestionsProvider

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCRequiredArgumentBuilder.getSuggestionsProvider();
```

### hashCode

戻り値の種類: int

```zenscript
myMCRequiredArgumentBuilder.hashCode();
```

### isFork

戻り値の型: boolean

```zenscript
myMCRequiredArgumentBuilder.isFork();
```

### リダイレクト

戻り値の型: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| パラメータ  | タイプ                                                                                          | 説明           |
| ------ | -------------------------------------------------------------------------------------------- | ------------ |
| target | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | 説明が提供されていません |



戻り値の型: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| パラメータ    | タイプ                                                                                                                | 説明           |
| -------- | ------------------------------------------------------------------------------------------------------------------ | ------------ |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | 説明が提供されていません |
| modifier | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | 説明が提供されていません |


### 必須

戻り値の型: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.requires(requirements as function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| パラメータ | タイプ                                                                                                                                    | 説明           |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 要件    | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | 説明が提供されていません |


### 示唆する

戻り値の型: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.suggest(provider as crafttweaker.api.commands.custom.MCSuggestionProvider);
```

| パラメータ  | タイプ                                                                                                        | 説明           |
| ------ | ---------------------------------------------------------------------------------------------------------- | ------------ |
| プロバイダー | [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | 説明が提供されていません |


### そしたら...

戻り値の型: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| パラメータ | タイプ                                                                                                  | 説明           |
| ----- | ---------------------------------------------------------------------------------------------------- | ------------ |
| 引数    | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | 説明が提供されていません |



戻り値の型: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(crafttweaker.api.commands.custom.MCCommandNode);
```

| パラメータ | タイプ                                                                                          | 説明           |
| ----- | -------------------------------------------------------------------------------------------- | ------------ |
| 引数    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | 説明が提供されていません |



戻り値の型: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(crafttweaker.api.commands.custom.MCRequiredArgumentBuilder);
```

| パラメータ | タイプ                                                                                                                  | 説明           |
| ----- | -------------------------------------------------------------------------------------------------------------------- | ------------ |
| 引数    | [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | 説明が提供されていません |


### toString

戻り値の型: String

```zenscript
myMCRequiredArgumentBuilder.toString();
```


## 演算子
### EQUALS

```zenscript
myMCRequiredArgumentBuilder == o as Object
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

