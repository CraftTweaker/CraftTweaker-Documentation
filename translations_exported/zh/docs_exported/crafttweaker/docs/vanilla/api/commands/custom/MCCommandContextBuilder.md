# MCCommandContextBuilder

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandContextBuilder;
```


## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

:::group{name=build}

Return Type: [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
MCCommandContextBuilder.build(input as string) as MCCommandContext
```

| 参数        | 类型     | 描述                      |
| --------- | ------ | ----------------------- |
| input（输入） | string | No Description Provided |


:::

:::group{name=copy}

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.copy() as MCCommandContextBuilder
myMCCommandContextBuilder.copy();
```

:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCCommandContextBuilder.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


:::

:::group{name=findSuggestionContext}

Return Type: [MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
MCCommandContextBuilder.findSuggestionContext(cursor as int) as MCSuggestionContext
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| cursor | int | No Description Provided |


:::

:::group{name=getArguments}

Return Type: [MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[string]

```zenscript
MCCommandContextBuilder.getArguments() as MCParsedArgument[string]
myMCCommandContextBuilder.getArguments();
```

:::

:::group{name=getChild}

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.getChild() as MCCommandContextBuilder
myMCCommandContextBuilder.getChild();
```

:::

:::group{name=getCommand}

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCCommandContextBuilder.getCommand() as MCCommand
myMCCommandContextBuilder.getCommand();
```

:::

:::group{name=getDispatcher}

Return Type: [MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
MCCommandContextBuilder.getDispatcher() as MCCommandDispatcher
myMCCommandContextBuilder.getDispatcher();
```

:::

:::group{name=getLastChild}

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.getLastChild() as MCCommandContextBuilder
myMCCommandContextBuilder.getLastChild();
```

:::

:::group{name=getNodes}

Return Type: stdlib.List&lt;[MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
MCCommandContextBuilder.getNodes() as stdlib.List<MCParsedCommandNode>
myMCCommandContextBuilder.getNodes();
```

:::

:::group{name=getRange}

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCCommandContextBuilder.getRange() as MCStringRange
myMCCommandContextBuilder.getRange();
```

:::

:::group{name=getRootNode}

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandContextBuilder.getRootNode() as MCCommandNode
myMCCommandContextBuilder.getRootNode();
```

:::

:::group{name=getSource}

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandContextBuilder.getSource() as MCCommandSource
myMCCommandContextBuilder.getSource();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCCommandContextBuilder.hashCode() as int
myMCCommandContextBuilder.hashCode();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
MCCommandContextBuilder.toString() as string
myMCCommandContextBuilder.toString();
```

:::

:::group{name=withArgument}

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withArgument(name as string, argument as MCParsedArgument) as MCCommandContextBuilder
```

| 参数   | 类型                                                                | 描述                      |
| ---- | ----------------------------------------------------------------- | ----------------------- |
| name | string                                                            | No Description Provided |
| 参数   | [MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | No Description Provided |


:::

:::group{name=withChild}

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withChild(child as MCCommandContextBuilder) as MCCommandContextBuilder
```

| 参数  | 类型                                                                              | 描述                      |
| --- | ------------------------------------------------------------------------------- | ----------------------- |
| 子节点 | [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No Description Provided |


:::

:::group{name=withCommand}

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withCommand(command as MCCommand) as MCCommandContextBuilder
```

| 参数      | 类型                                             | 描述                      |
| ------- | ---------------------------------------------- | ----------------------- |
| command | [MC命令](/vanilla/api/commands/custom/MCCommand) | No Description Provided |


:::

:::group{name=withNode}

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withNode(node as MCCommandNode, range as MCStringRange) as MCCommandContextBuilder
```

| 参数    | 类型                                                          | 描述                      |
| ----- | ----------------------------------------------------------- | ----------------------- |
| 节点    | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)   | No Description Provided |
| range | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |


:::

:::group{name=withSource}

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withSource(source as MCCommandSource) as MCCommandContextBuilder
```

| 参数 | 类型                                                    | 描述                      |
| -- | ----------------------------------------------------- | ----------------------- |
| 来源 | [MC命令源](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


:::


## 运算符

:::group{name=EQUALS}

```zenscript
myMCCommandContextBuilder == o 为对象
```

:::


