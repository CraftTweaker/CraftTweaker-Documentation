# MCCommandContextBuilder

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandContextBuilder;
```


## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| string         | true             |

## Methods

### build

Return Type: [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
MCCommandContextBuilder.build(input as string) as MCCommandContext
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| input    | string | No Description Provided |


### copy

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.copy() as MCCommandContextBuilder
myMCCommandContextBuilder.copy();
```

### equals

Return Type: boolean

```zenscript
MCCommandContextBuilder.equals(o as Object) as boolean
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| o        | Object | No Description Provided |


### найти предложенный контекст

Return Type: [MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
MCCommandContextBuilder.findSuggestionContext(cursor as int) as MCSuggestionContext
```

| Параметр | Тип | Description             |
| -------- | --- | ----------------------- |
| cursor   | int | No Description Provided |


### getАргументы

Return Type: [MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[string]

```zenscript
MCCommandContextBuilder.getArguments() as MCParsedArgument[string]
myMCCommandContextBuilder.getArguments();
```

### getChild

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.getChild() as MCCommandContextBuilder
myMCCommandContextBuilder.getChild();
```

### getCommand

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCCommandContextBuilder.getCommand() as MCCommand
myMCCommandContextBuilder.getCommand();
```

### getДиспетчер

Return Type: [MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
MCCommandContextBuilder.getDispatcher() as MCCommandDispatcher
myMCCommandContextBuilder.getDispatcher();
```

### getLastChild

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.getLastChild() as MCCommandContextBuilder
myMCCommandContextBuilder.getLastChild();
```

### getNodes

Return Type: stdlib.List&lt;[MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
MCCommandContextBuilder.getNodes() as stdlib.List<MCParsedCommandNode>
myMCCommandContextBuilder.getNodes();
```

### getRange

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCCommandContextBuilder.getRange() as MCStringRange
myMCCommandContextBuilder.getRange();
```

### getRootNode

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandContextBuilder.getRootNode() as MCCommandNode
myMCCommandContextBuilder.getRootNode();
```

### getSource

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandContextBuilder.getSource() as MCCommandSource
myMCCommandContextBuilder.getSource();
```

### hashCode

Return Type: int

```zenscript
MCCommandContextBuilder.hashCode() as int
myMCCommandContextBuilder.hashCode();
```

### toString

Return Type: string

```zenscript
MCCommandContextBuilder.toString() as string
myMCCommandContextBuilder.toString();
```

### без аргумента

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withArgument(name as string, argument as MCParsedArgument) as MCCommandContextBuilder
```

| Параметр | Тип                                                                        | Description             |
| -------- | -------------------------------------------------------------------------- | ----------------------- |
| name     | string                                                                     | No Description Provided |
| аргумент | [Аргумент MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | No Description Provided |


### безребенок

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withChild(child as MCCommandContextBuilder) as MCCommandContextBuilder
```

| Параметр | Тип                                                                             | Description             |
| -------- | ------------------------------------------------------------------------------- | ----------------------- |
| ребенок  | [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No Description Provided |


### с командой

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withCommand(command as MCCommand) as MCCommandContextBuilder
```

| Параметр | Тип                                                 | Description             |
| -------- | --------------------------------------------------- | ----------------------- |
| command  | [MCCommand](/vanilla/api/commands/custom/MCCommand) | No Description Provided |


### withNode

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withNode(node as MCCommandNode, range as MCStringRange) as MCCommandContextBuilder
```

| Параметр | Тип                                                         | Description             |
| -------- | ----------------------------------------------------------- | ----------------------- |
| узел     | [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |
| range    | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |


### с исходным кодом

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withSource(source as MCCommandSource) as MCCommandContextBuilder
```

| Параметр | Тип                                                                      | Description             |
| -------- | ------------------------------------------------------------------------ | ----------------------- |
| источник | [Источник MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |



## Операторы

### EQUALS

```zenscript
myMCCommandContextBuilder == o как объект
```




