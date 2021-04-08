# MCCommandContext

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandContext;
```


## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methods

:::group{name=copyFor}

Return Type: [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
MCCommandContext.copyFor(source as MCCommandSource) as MCCommandContext
```

| Parameter | Type                                                            | Description             |
| --------- | --------------------------------------------------------------- | ----------------------- |
| source    | [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCCommandContext.equals(o as Object) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


:::

:::group{name=getArgument}

Return Type: string

```zenscript
MCCommandContext.getArgument(name as string) as string
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getChild}

Return Type: [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
MCCommandContext.getChild() as MCCommandContext
myMCCommandContext.getChild();
```

:::

:::group{name=getCommand}

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCCommandContext.getCommand() as MCCommand
myMCCommandContext.getCommand();
```

:::

:::group{name=getInput}

Return Type: string

```zenscript
MCCommandContext.getInput() as string
myMCCommandContext.getInput();
```

:::

:::group{name=getLastChild}

Return Type: [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
MCCommandContext.getLastChild() as MCCommandContext
myMCCommandContext.getLastChild();
```

:::

:::group{name=getNodes}

Return Type: stdlib.List&lt;[MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
MCCommandContext.getNodes() as stdlib.List<MCParsedCommandNode>
myMCCommandContext.getNodes();
```

:::

:::group{name=getRange}

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCCommandContext.getRange() as MCStringRange
myMCCommandContext.getRange();
```

:::

:::group{name=getRedirectModifier}

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCCommandContext.getRedirectModifier() as MCRedirectModifier
myMCCommandContext.getRedirectModifier();
```

:::

:::group{name=getRootNode}

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandContext.getRootNode() as MCCommandNode
myMCCommandContext.getRootNode();
```

:::

:::group{name=getSource}

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandContext.getSource() as MCCommandSource
myMCCommandContext.getSource();
```

:::

:::group{name=hasNodes}

Return Type: boolean

```zenscript
MCCommandContext.hasNodes() as boolean
myMCCommandContext.hasNodes();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCCommandContext.hashCode() as int
myMCCommandContext.hashCode();
```

:::

:::group{name=isForked}

Return Type: boolean

```zenscript
MCCommandContext.isForked() as boolean
myMCCommandContext.isForked();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
MCCommandContext.toString() as string
myMCCommandContext.toString();
```

:::


## Operators

:::group{name=EQUALS}

```zenscript
myMCCommandContext == o as Object
```

:::


