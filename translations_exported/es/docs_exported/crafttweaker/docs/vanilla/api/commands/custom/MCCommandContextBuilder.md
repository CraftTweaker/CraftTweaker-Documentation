# Contexto MCCommandContextBuilder

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommandContextBuilder
```

## Methods
### build

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContextBuilder.build(input as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| input     | String | No description provided |


### copy

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.copy();
```

### equals

Return type: boolean

```zenscript
myMCCommandContextBuilder.equals(o como objeto);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### findSugerenciónContexto

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
myMCCommandContextBuilder.findSuggestionContext(cursor as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| cursor    | int  | No description provided |


### getArguments

Tipo de retorno: [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[String]

```zenscript
myMCCommandContextBuilder.getArguments();
```

### getChild

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getChild();
```

### getCommand

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContextBuilder.getCommand();
```

### getDispatcher

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
myMCCommandContextBuilder.getDispatcher();
```

### getLastChild

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getLastChild();
```

### getNodes

Tipo de retorno: Lista&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContextBuilder.getNodes();
```

### getRange

Tipo de retorno: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContextBuilder.getRange();
```

### getRootNode

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContextBuilder.getRootNode();
```

### getSource

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContextBuilder.getSource();
```

### hashCode

Return type: int

```zenscript
myMCCommandContextBuilder.hashCode();
```

### toString

Return type: String

```zenscript
myMCCommandContextBuilder.toString();
```

### con argumento

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withArgument(nombre como String, argumento como crafttweaker.api.commands.custom.MCParsedArgument);
```

| Parameter | Type                                                                                               | Description             |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| name      | String                                                                                             | No description provided |
| argumento | [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | No description provided |


### conhijoHijo

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withChild(hijo como crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parameter | Type                                                                                                             | Description             |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------- |
| niño      | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No description provided |


### conComando

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withCommand(comando como crafttweaker.api.commands.custom.MCCommand);
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| command   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No description provided |


### withNode

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withNode(nodo como crafttweaker.api.commands.custom.MCCommandNode, rango como crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No description provided |


### sin fuente

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withSource(fuente como crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



## Operators
### EQUALS

```zenscript
myMCCommandContextBuilder == o como objeto
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

