# MCCommandContextBuilder

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCCommandContextBuilder
```

## メソッド
### ビルド

戻り値の型: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContextBuilder.build(input as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| input | 文字列型 | 説明が提供されていません |


### コピー

戻り値の型: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.copy();
```

### 等しい

戻り値の型: boolean

```zenscript
myMCCommandContextBuilder.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### findSuggestionContext

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
myMCCommandContextBuilder.findSuggestionContext(intとしてカーソル);
```

| パラメータ  | タイプ | 説明           |
| ------ | --- | ------------ |
| cursor | int | 説明が提供されていません |


### getArguments

戻り値の型: [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[String]

```zenscript
myMCCommandContextBuilder.getArguments();
```

### getChild

戻り値の型: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getChild();
```

### getCommand

戻り値の型: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContextBuilder.getCommand();
```

### getDispatcher

戻り値の型: [crafttweaker.api.commands.custom.MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
myMCCommandContextBuilder.getDispatcher();
```

### getLastChild

戻り値の型: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getLastChild();
```

### getNodes

Return type: List&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContextBuilder.getNodes();
```

### getRange

戻り値の型: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContextBuilder.getRange();
```

### getRootNode

戻り値の型: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContextBuilder.getRootNode();
```

### getSource

戻り値の型: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContextBuilder.getSource();
```

### hashCode

戻り値の種類: int

```zenscript
myMCCommandContextBuilder.hashCode();
```

### toString

戻り値の型: String

```zenscript
myMCCommandContextBuilder.toString();
```

### withArgument

戻り値の型: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withArgument(name as String, argumentas crafttweaker.api.commands.custom.MCParsedArgument);
```

| パラメータ | タイプ                                                                                                | 説明           |
| ----- | -------------------------------------------------------------------------------------------------- | ------------ |
| 名前    | 文字列型                                                                                               | 説明が提供されていません |
| 引数    | [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | 説明が提供されていません |


### withChild

戻り値の型: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withChild(child as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| パラメータ | タイプ                                                                                                              | 説明           |
| ----- | ---------------------------------------------------------------------------------------------------------------- | ------------ |
| 子供    | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | 説明が提供されていません |


### withCommand

戻り値の型: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withCommand(command as crafttweaker.api.commands.custom.MCCommand);
```

| パラメータ     | タイプ                                                                                  | 説明           |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| (Command) | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | 説明が提供されていません |


### withNode

戻り値の型: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withNode(node as crafttweaker.api.commands.custom.MCCommandNode, range as crafttweaker.api.commands.custom.MCStringRange);
```

| パラメータ | タイプ                                                                                          | 説明           |
| ----- | -------------------------------------------------------------------------------------------- | ------------ |
| ノード   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | 説明が提供されていません |
| range | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | 説明が提供されていません |


### withSource

戻り値の型: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withSource(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| パラメータ | タイプ                                                                                              | 説明           |
| ----- | ------------------------------------------------------------------------------------------------ | ------------ |
| ソース   | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | 説明が提供されていません |



## 演算子
### EQUALS

```zenscript
myMCCommandContextBuilder == o をオブジェクトとして
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

