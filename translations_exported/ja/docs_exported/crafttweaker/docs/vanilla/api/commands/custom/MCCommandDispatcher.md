# MCCommandDispatcher

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCCommandDispatch
```

## メソッド
### 等しい

戻り値の型: boolean

```zenscript
myMCCommandDispatcher.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### 実行

戻り値の種類: int

```zenscript
myMCCommandDispatcher.execute(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| パラメータ | タイプ                                                                                            | 説明           |
| ----- | ---------------------------------------------------------------------------------------------- | ------------ |
| parse | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | 説明が提供されていません |



戻り値の種類: int

```zenscript
myMCCommandDispatcher.execute(input as String, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| パラメータ | タイプ                                                                                              | 説明           |
| ----- | ------------------------------------------------------------------------------------------------ | ------------ |
| input | 文字列型                                                                                             | 説明が提供されていません |
| ソース   | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | 説明が提供されていません |



戻り値の種類: int

```zenscript
myMCCommandDispatcher.execute(input as com.mojang.brigadier.StringReader, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| パラメータ | タイプ                                                                                              | 説明           |
| ----- | ------------------------------------------------------------------------------------------------ | ------------ |
| input | com.mojang.brigadier.StringReader                                                                | 説明が提供されていません |
| ソース   | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | 説明が提供されていません |


### findAmbiguities

```zenscript
myMCCommandDispatcher.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| パラメータ   | タイプ                                                                                                      | 説明           |
| ------- | -------------------------------------------------------------------------------------------------------- | ------------ |
| コンシューマー | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | 説明が提供されていません |


### findNode

戻り値の型: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(path as Collection<String>);
```

| パラメータ | タイプ                              | 説明           |
| ----- | -------------------------------- | ------------ |
| 小道    | コレクション&lt;String&gt; | 説明が提供されていません |


### getAllUsage

戻り値の型: String[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource, restricted as boolean);
```

| パラメータ | タイプ                                                                                              | 説明           |
| ----- | ------------------------------------------------------------------------------------------------ | ------------ |
| ノード   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | 説明が提供されていません |
| ソース   | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | 説明が提供されていません |
| 制限あり  | boolean型                                                                                         | 説明が提供されていません |


### getCompletionSuggestions

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(crafttweaker.api.commands.custom.MCParseResults);
```

| パラメータ | タイプ                                                                                            | 説明           |
| ----- | ---------------------------------------------------------------------------------------------- | ------------ |
| parse | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | 説明が提供されていません |



戻り値の型: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(crafttweaker.api.commands.custom.MCParseResults, cursor as int);
```

| パラメータ  | タイプ                                                                                            | 説明           |
| ------ | ---------------------------------------------------------------------------------------------- | ------------ |
| parse  | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | 説明が提供されていません |
| cursor | int                                                                                            | 説明が提供されていません |


### getPath

戻り値の型: コレクション&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| パラメータ  | タイプ                                                                                          | 説明           |
| ------ | -------------------------------------------------------------------------------------------- | ------------ |
| target | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | 説明が提供されていません |


### getRoot

戻り値の型: [crafttweaker.api.commands.custom.MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
myMCCommandDispatcher.getRoot();
```

### getSmartUsage

戻り値の型: String[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCCommandDispatcher.getSmartUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| パラメータ | タイプ                                                                                              | 説明           |
| ----- | ------------------------------------------------------------------------------------------------ | ------------ |
| ノード   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | 説明が提供されていません |
| ソース   | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | 説明が提供されていません |


### hashCode

戻り値の種類: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

戻り値の型: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(command as String, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| パラメータ     | タイプ                                                                                              | 説明           |
| --------- | ------------------------------------------------------------------------------------------------ | ------------ |
| (Command) | 文字列型                                                                                             | 説明が提供されていません |
| ソース       | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | 説明が提供されていません |



戻り値の型: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(com.mojang.brigadier.StringReader, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| パラメータ     | タイプ                                                                                              | 説明           |
| --------- | ------------------------------------------------------------------------------------------------ | ------------ |
| (Command) | com.mojang.brigadier.StringReader                                                                | 説明が提供されていません |
| ソース       | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | 説明が提供されていません |


### 登録

戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(command as crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder);
```

| パラメータ     | タイプ                                                                                                                 | 説明           |
| --------- | ------------------------------------------------------------------------------------------------------------------- | ------------ |
| (Command) | [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | 説明が提供されていません |


### セットコンシューマー

```zenscript
myMCCommandDispatcher.setConsumer(crafttweaker.api.commands.custom.MCResultConsumer);
```

| パラメータ   | タイプ                                                                                                | 説明           |
| ------- | -------------------------------------------------------------------------------------------------- | ------------ |
| コンシューマー | [crafttweaker.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | 説明が提供されていません |


### toString

戻り値の型: String

```zenscript
myMCCommandDispatcher.toString();
```


## 演算子
### EQUALS

```zenscript
myMCCommandDispatcher == o をオブジェクトとして
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

