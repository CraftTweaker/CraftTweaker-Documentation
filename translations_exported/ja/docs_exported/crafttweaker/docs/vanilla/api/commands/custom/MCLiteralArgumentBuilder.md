# MCLIiteralArgumentBuilder

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder
```

## 実装されたインターフェース
MCLIiteralArgumentBuilder は、次のインターフェイスを実装します。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## メソッド
### ビルド

戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCLIiteralArgumentBuilder.build();
```

### 等しい

戻り値の型: boolean

```zenscript
myMCLIiteralArgumentBuilder.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### executes

戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLIiteralArgumentBuilder.executes(command as crafttweaker.api.commands.custom.MCCommand);
```

| パラメータ     | タイプ                                                                                  | 説明           |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| (Command) | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | 説明が提供されていません |


### fork

戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLIiteralArgumentBuilder.fork(crafttweaker.api.commands.custom.MCCommandNode, crafttweaker.api.commands.custom.MCRedirectModifier);
```

| パラメータ    | タイプ                                                                                                    | 説明           |
| -------- | ------------------------------------------------------------------------------------------------------ | ------------ |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | 説明が提供されていません |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | 説明が提供されていません |


### 前方へ

戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLIteralArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| パラメータ    | タイプ                                                                                                    | 説明           |
| -------- | ------------------------------------------------------------------------------------------------------ | ------------ |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | 説明が提供されていません |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | 説明が提供されていません |
| fork     | boolean型                                                                                               | 説明が提供されていません |


### getArguments

Return type: Collection&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCLIiteralArgumentBuilder.getArguments();
```

### getCommand

戻り値の型: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCLIiteralArgumentBuilder.getCommand();
```

### getLiteral

戻り値の型: String

```zenscript
myMCLiteralArgumentBuilder.getLiteral();
```

### getRedirect

戻り値の型: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCLIiteralArgumentBuilder.getRedirect();
```

### getRedirectModifier

戻り値の型: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCLIiteralArgumentBuilder.getRedirectModifier();
```

### getRequirement

戻り値の型: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCLIiteralArgumentBuilder.getRequirement();
```

### hashCode

戻り値の種類: int

```zenscript
myMCLIiteralArgumentBuilder.hashCode();
```

### isFork

戻り値の型: boolean

```zenscript
myMCLIiteralArgumentBuilder.isFork();
```

### リダイレクト

戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLIiteralArgumentBuilder.redirect(crafttweaker.api.commands.custom.MCCommandNode);
```

| パラメータ  | タイプ                                                                                          | 説明           |
| ------ | -------------------------------------------------------------------------------------------- | ------------ |
| target | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | 説明が提供されていません |



戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLIiteralArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| パラメータ    | タイプ                                                                                                                | 説明           |
| -------- | ------------------------------------------------------------------------------------------------------------------ | ------------ |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | 説明が提供されていません |
| modifier | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | 説明が提供されていません |


### 必須

戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLIiteralArgumentBuilder.requires(requirements as function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| パラメータ | タイプ                                                                                                                                    | 説明           |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 要件    | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | 説明が提供されていません |


### そしたら...

戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLIiteralArgumentBuilder.then(argument as crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| パラメータ | タイプ                                                                                                  | 説明           |
| ----- | ---------------------------------------------------------------------------------------------------- | ------------ |
| 引数    | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | 説明が提供されていません |



戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLIiteralArgumentBuilder.then(argument as crafttweaker.api.commands.custom.MCCommandNode);
```

| パラメータ | タイプ                                                                                          | 説明           |
| ----- | -------------------------------------------------------------------------------------------- | ------------ |
| 引数    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | 説明が提供されていません |


### toString

戻り値の型: String

```zenscript
myMCLIiteralArgumentBuilder.toString();
```


## 演算子
### EQUALS

```zenscript
myMCLIiteralArgumentBuilder == o as Object
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

