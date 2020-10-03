# MCCommandDispatcher

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommandDispatch
```

## Methods
### equals

Return type: boolean

```zenscript
myMCCommandDispatcher.equals(o as Object);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### 実行

Return type: int

```zenscript
myMCCommandDispatcher.execute(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| Parameter | Type                                                                                           | Description             |
| --------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |



Return type: int

```zenscript
myMCCommandDispatcher.execute(input as String, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| input     | String                                                                                           | No description provided |
| ソース       | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



Return type: int

```zenscript
myMCCommandDispatcher.execute(input as com.mojang.brigadier.StringReader, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| input     | com.mojang.brigadier.StringReader                                                                | No description provided |
| ソース       | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### findAmbiguities

```zenscript
myMCCommandDispatcher.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parameter | Type                                                                                                     | Description             |
| --------- | -------------------------------------------------------------------------------------------------------- | ----------------------- |
| コンシューマー   | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No description provided |


### findNode

戻り値の型: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(path as Collection<String>);
```

| Parameter | Type                             | Description             |
| --------- | -------------------------------- | ----------------------- |
| path      | コレクション&lt;String&gt; | No description provided |


### getAllUsage

戻り値の型: String[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource, restricted as boolean);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| ノード       | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No description provided |
| ソース       | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |
| 制限あり      | boolean型                                                                                         | No description provided |


### getCompletionSuggestions

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(crafttweaker.api.commands.custom.MCParseResults);
```

| Parameter | Type                                                                                           | Description             |
| --------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |



戻り値の型: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(crafttweaker.api.commands.custom.MCParseResults, cursor as int);
```

| Parameter | Type                                                                                           | Description             |
| --------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |
| cursor    | int                                                                                            | No description provided |


### getPath

戻り値の型: コレクション&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


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

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| ノード       | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No description provided |
| ソース       | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### hashCode

Return type: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

戻り値の型: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(command as String, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | String                                                                                           | No description provided |
| ソース       | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



戻り値の型: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(com.mojang.brigadier.StringReader, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | com.mojang.brigadier.StringReader                                                                | No description provided |
| ソース       | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### 登録

戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(command as crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder);
```

| Parameter | Type                                                                                                                | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| command   | [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No description provided |


### セットコンシューマー

```zenscript
myMCCommandDispatcher.setConsumer(crafttweaker.api.commands.custom.MCResultConsumer);
```

| Parameter | Type                                                                                               | Description             |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| コンシューマー   | [crafttweaker.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | No description provided |


### toString

Return type: String

```zenscript
myMCCommandDispatcher.toString();
```


## 演算子
### EQUALS

```zenscript
myMCCommandDispatcher == o をオブジェクトとして
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

