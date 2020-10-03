# Contexto MCCommand

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommandContext
```

## Methods
### copyFor

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.copyFor(fuente como crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### equals

Return type: boolean

```zenscript
myMCCommandContext.equals(o como objeto);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getArgumento

Return type: String

```zenscript
myMCCommandContext.getArgument(nombre como cadena);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### getChild

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getChild();
```

### getCommand

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContext.getCommand();
```

### getInput

Return type: String

```zenscript
myMCCommandContext.getInput();
```

### getLastChild

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getLastChild();
```

### getNodes

Tipo de retorno: Lista&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContext.getNodes();
```

### getRange

Tipo de retorno: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContext.getRange();
```

### getRedirectModifier

Tipo de retorno: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCCommandContext.getRedirectModifier();
```

### getRootNode

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContext.getRootNode();
```

### getSource

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

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

### es bifurcado

Return type: boolean

```zenscript
myMCCommandContext.isForked();
```

### toString

Return type: String

```zenscript
myMCCommandContext.toString();
```


## Operators
### EQUALS

```zenscript
myMCCommandContext == o como objeto
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

