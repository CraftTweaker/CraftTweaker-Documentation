# MCCommandContext

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandContext;
```


## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methoden

### copyFor

Return Type: [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
MCCommandContext.copyFor(source as MCCommandSource) as MCCommandContext
```
| Parameter | Type                                                            | Beschreibung            |
| --------- | --------------------------------------------------------------- | ----------------------- |
| quell     | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |

### equals

Return Type: boolean

```zenscript
MCCommandContext.equals(o as Object) as boolean
```
| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |

### getArgument

Return Type: string

```zenscript
MCCommandContext.getArgument(name as string) as string
```
| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |

### getChild

Return Type: [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
MCCommandContext.getChild() as MCCommandContext
myMCCommandContext.getChild();
```
### getCommand

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCCommandContext.getCommand() as MCCommand
myMCCommandContext.getCommand();
```
### getInput

Return Type: string

```zenscript
MCCommandContext.getInput() as string
myMCCommandContext.getInput();
```
### getLastChild

Return Type: [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
MCCommandContext.getLastChild() as MCCommandContext
myMCCommandContext.getLastChild();
```
### getNodes

Return Type: stdlib.List&lt;[MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
MCCommandContext.getNodes() as stdlib.List<MCParsedCommandNode>
myMCCommandContext.getNodes();
```
### getBereich

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCCommandContext.getRange() as MCStringRange
myMCCommandContext.getRange();
```
### getRedirectModifizierer

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCCommandContext.getRedirectModifier() as MCRedirectModifier
myMCCommandContext.getRedirectModifier();
```
### getRootNode

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandContext.getRootNode() as MCCommandNode
myMCCommandContext.getRootNode();
```
### getSource

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandContext.getSource() as MCCommandSource
myMCCommandContext.getSource();
```
### hasNodes

Return Type: boolean

```zenscript
MCCommandContext.hasNodes() as boolean
myMCCommandContext.hasNodes();
```
### hashCode

Return Type: int

```zenscript
MCCommandContext.hashCode() as int
myMCCommandContext.hashCode();
```
### isForked

Return Type: boolean

```zenscript
MCCommandContext.isForked() as boolean
myMCCommandContext.isForked();
```
### toString

Return Type: string

```zenscript
MCCommandContext.toString() as string
myMCCommandContext.toString();
```

## Operatoren

### EQUALS

```zenscript
myMCCommandContext == o als Objekt
```



