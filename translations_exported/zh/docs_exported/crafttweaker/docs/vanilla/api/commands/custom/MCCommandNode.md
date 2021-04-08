# MCCommand节点

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandNode;
```


## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

:::group{name=addChild}

Return Type: void

```zenscript
MCCommandNode.addChild(node as MCCommandNode) as void
```

| 参数 | 类型                                                        | 描述                      |
| -- | --------------------------------------------------------- | ----------------------- |
| 节点 | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


:::

:::group{name=canUse}

Return Type: boolean

```zenscript
MCCommandNode.canUse(source as MCCommandSource) as boolean
```

| 参数 | 类型                                                    | 描述                      |
| -- | ----------------------------------------------------- | ----------------------- |
| 来源 | [MC命令源](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


:::

:::group{name=createBuilder}

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCCommandNode.createBuilder() as MCArgumentBuilder
myMCCommandNode.createBuilder();
```

:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCCommandNode.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


:::

:::group{name=findAmbiguities}

Return Type: void

```zenscript
MCCommandNode.findAmbiguities(consumer as MCAmbiguityConsumer) as void
```

| 参数  | 类型                                                                      | 描述                      |
| --- | ----------------------------------------------------------------------- | ----------------------- |
| 消费者 | [MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No Description Provided |


:::

:::group{name=getChild}

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandNode.getChild(name as string) as MCCommandNode
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


:::

:::group{name=getChildren}

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCCommandNode.getChildren() as Collection<MCCommandNode>
myMCCommandNode.getChildren();
```

:::

:::group{name=getCommand}

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCCommandNode.getCommand() as MCCommand
myMCCommandNode.getCommand();
```

:::

:::group{name=getExamples}

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandNode.getExamples() as Collection<string>
myMCCommandNode.getExamples();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
MCCommandNode.getName() as string
myMCCommandNode.getName();
```

:::

:::group{name=getRedirect}

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandNode.getRedirect() as MCCommandNode
myMCCommandNode.getRedirect();
```

:::

:::group{name=getRedirectModifier}

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCCommandNode.getRedirectModifier() as MCRedirectModifier
myMCCommandNode.getRedirectModifier();
```

:::

:::group{name=getRelevantNodes}

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCCommandNode.getRelevantNodes(input as string) as Collection<MCCommandNode>
```

| 参数        | 类型     | 描述                      |
| --------- | ------ | ----------------------- |
| input（输入） | string | No Description Provided |


:::

:::group{name=getRequirement}

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCCommandNode.getRequirement() as Predicate<MCCommandSource>
myMCCommandNode.getRequirement();
```

:::

:::group{name=getUsageText}

Return Type: string

```zenscript
MCCommandNode.getUsageText() as string
myMCCommandNode.getUsageText();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCCommandNode.hashCode() as int
myMCCommandNode.hashCode();
```

:::

:::group{name=isFork}

Return Type: boolean

```zenscript
MCCommandNode.isFork() as boolean
myMCCommandNode.isFork();
```

:::

:::group{name=listSuggestions}

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandNode.listSuggestions(context as MCCommandContext, builder as MCSuggestionsBuilder) as MCSuggestions
```

| 参数   | 类型                                                                        | 描述                      |
| ---- | ------------------------------------------------------------------------- | ----------------------- |
| 上下文： | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | No Description Provided |
| 生成器  | [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No Description Provided |


:::

:::group{name=parse}

Return Type: void

```zenscript
MCCommandNode.parse(input as string, contextBuilder as MCCommandContextBuilder) as void
```

| 参数             | 类型                                                                              | 描述                      |
| -------------- | ------------------------------------------------------------------------------- | ----------------------- |
| input（输入）      | string                                                                          | No Description Provided |
| contextBuilder | [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No Description Provided |


:::

:::group{name=toString}

Return Type: string

```zenscript
MCCommandNode.toString() as string
myMCCommandNode.toString();
```

:::


## 运算符

:::group{name=COMPARE}

```zenscript
myMCCommandNode < o as MCCommandNode
```

:::

:::group{name=EQUALS}

```zenscript
myMCCommandNode == o as Object
```

:::


