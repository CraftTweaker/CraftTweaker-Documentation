# MCRequireedArgumentBuilder

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCRequiredArgumentBuilder;
```


## Extending MCArgumentBuilder

MCRequiredArgumentBuilder extends [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder). That means all methods available in [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) are also available in MCRequiredArgumentBuilder

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

:::group{name=build}

Return Type: [MCArgumentCommandNode](/vanilla/api/commands/custom/MCArgumentCommandNode)

```zenscript
MCRequiredArgumentBuilder.build() as MCArgumentCommandNode
myMCRequiredArgumentBuilder.build();
```

:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCRequiredArgumentBuilder.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


:::

:::group{name=executes}

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.executes(command as MCCommand) as MCRequiredArgumentBuilder
```

| 参数      | 类型                                             | 描述                      |
| ------- | ---------------------------------------------- | ----------------------- |
| command | [MC命令](/vanilla/api/commands/custom/MCCommand) | No Description Provided |


:::

:::group{name=fork}

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.fork(target as MCCommandNode, modifier as MCRedirectModifier) as MCRequiredArgumentBuilder
```

| 参数       | 类型                                                          | 描述                      |
| -------- | ----------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)   | No Description Provided |
| modifier | [MC重定向修改器](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |


:::

:::group{name=forward}

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.forward(target as MCCommandNode, modifier as MCRedirectModifier, fork as boolean) as MCRequiredArgumentBuilder
```

| 参数       | 类型                                                          | 描述                      |
| -------- | ----------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)   | No Description Provided |
| modifier | [MC重定向修改器](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |
| fork     | boolean                                                     | No Description Provided |


:::

:::group{name=getArguments}

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCRequiredArgumentBuilder.getArguments() as Collection<MCCommandNode>
myMCRequiredArgumentBuilder.getArguments();
```

:::

:::group{name=getCommand}

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCRequiredArgumentBuilder.getCommand() as MCCommand
myMCRequiredArgumentBuilder.getCommand();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
MCRequiredArgumentBuilder.getName() as string
myMCRequiredArgumentBuilder.getName();
```

:::

:::group{name=getRedirect}

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCRequiredArgumentBuilder.getRedirect() as MCCommandNode
myMCRequiredArgumentBuilder.getRedirect();
```

:::

:::group{name=getRedirectModifier}

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCRequiredArgumentBuilder.getRedirectModifier() as MCRedirectModifier
myMCRequiredArgumentBuilder.getRedirectModifier();
```

:::

:::group{name=getRequirement}

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCRequiredArgumentBuilder.getRequirement() as Predicate<MCCommandSource>
myMCRequiredArgumentBuilder.getRequirement();
```

:::

:::group{name=getSuggestionsProvider}

Return Type: [MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
MCRequiredArgumentBuilder.getSuggestionsProvider() as MCSuggestionProvider
myMCRequiredArgumentBuilder.getSuggestionsProvider();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCRequiredArgumentBuilder.hashCode() as int
myMCRequiredArgumentBuilder.hashCode();
```

:::

:::group{name=isFork}

Return Type: boolean

```zenscript
MCRequiredArgumentBuilder.isFork() as boolean
myMCRequiredArgumentBuilder.isFork();
```

:::

:::group{name=redirect}

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.redirect(target as MCCommandNode) as MCRequiredArgumentBuilder
```

| 参数     | 类型                                                        | 描述                      |
| ------ | --------------------------------------------------------- | ----------------------- |
| target | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


:::

:::group{name=redirect}

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.redirect(target as MCCommandNode, modifier as MCSingleRedirectModifier) as MCRequiredArgumentBuilder
```

| 参数       | 类型                                                                              | 描述                      |
| -------- | ------------------------------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)                       | No Description Provided |
| modifier | [MCSingleRirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No Description Provided |


:::

:::group{name=requires}

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.requires(requirement as Predicate<MCCommandSource>) as MCRequiredArgumentBuilder
```

| 参数 | 类型                                                                                           | 描述                      |
| -- | -------------------------------------------------------------------------------------------- | ----------------------- |
| 要求 | Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |


:::

:::group{name=suggests}

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.suggests(provider as MCSuggestionProvider) as MCRequiredArgumentBuilder
```

| 参数       | 类型                                                                        | 描述                      |
| -------- | ------------------------------------------------------------------------- | ----------------------- |
| provider | [MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | No Description Provided |


:::

:::group{name=then}

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.then(argument as MCArgumentBuilder) as MCArgumentBuilder
```

| 参数 | 类型                                                                  | 描述                      |
| -- | ------------------------------------------------------------------- | ----------------------- |
| 参数 | [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No Description Provided |


:::

:::group{name=then}

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.then(argument as MCCommandNode) as MCRequiredArgumentBuilder
```

| 参数 | 类型                                                        | 描述                      |
| -- | --------------------------------------------------------- | ----------------------- |
| 参数 | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


:::

:::group{name=then}

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.then(argument as MCRequiredArgumentBuilder) as MCRequiredArgumentBuilder
```

| 参数 | 类型                                                                                   | 描述                      |
| -- | ------------------------------------------------------------------------------------ | ----------------------- |
| 参数 | [MCRequireedArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | No Description Provided |


:::

:::group{name=toString}

Return Type: string

```zenscript
MCRequiredArgumentBuilder.toString() as string
myMCRequiredArgumentBuilder.toString();
```

:::


## 运算符

:::group{name=EQUALS}

```zenscript
myMCRequiredArgumentBuilder == o as Object
```

:::


