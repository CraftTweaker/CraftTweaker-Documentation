# MCCommandContext

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommandContext
```

## Methods
### copyFor

戻り値の型: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.copyFor(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| ソース       | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### equals

Return type: boolean

```zenscript
myMCCommandContext.equals(o as Object);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getArgument

Return type: String

```zenscript
myMCCommandContext.getArgument(name as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### getChild

戻り値の型: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getChild();
```

### getCommand

戻り値の型: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContext.getCommand();
```

### getInput

Return type: String

```zenscript
myMCCommandContext.getInput();
```

### getLastChild

戻り値の型: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getLastChild();
```

### getNodes

Return type: List&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContext.getNodes();
```

### getRange

戻り値の型: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContext.getRange();
```

### getRedirectModifier

戻り値の型: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCCommandContext.getRedirectModifier();
```

### getRootNode

戻り値の型: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContext.getRootNode();
```

### getSource

戻り値の型: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContext.getSource();
```

### hasNodes

Return type: boolean

```zenscript
myMCCommandContext.hasNodes();
```

### hashCode

Return type: int

```zenscript
myMCCommandContext.hashCode();
```

### isForked

Return type: boolean

```zenscript
myMCCommandContext.isForked();
```

### toString

Return type: String

```zenscript
myMCCommandContext.toString();
```


## 演算子
### EQUALS

```zenscript
myMCCommandContext == o をオブジェクトとして
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

