# MCLiteralArgumentBuilder

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCLiteralArgumentBuilder;
```


## Extending MCArgumentBuilder

MCLiteralArgumentBuilder extends [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder). That means all methods available in [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) are also available in MCLiteralArgumentBuilder

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

:::group{name=build}

Return Type: [MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
MCLiteralArgumentBuilder.build() as MCLiteralCommandNode
myMCLiteralArgumentBuilder.build();
```

:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCLiteralArgumentBuilder.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


:::

:::group{name=executes}

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.executes(command as MCCommand) as MCLiteralArgumentBuilder
```

| 参数      | 类型                                             | 描述                      |
| ------- | ---------------------------------------------- | ----------------------- |
| command | [MC命令](/vanilla/api/commands/custom/MCCommand) | No Description Provided |


:::

:::group{name=fork}

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.fork(target as MCCommandNode, modifier as MCRedirectModifier) as MCLiteralArgumentBuilder
```

| 参数       | 类型                                                          | 描述                      |
| -------- | ----------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)   | No Description Provided |
| modifier | [MC重定向修改器](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |


:::

:::group{name=forward}

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.forward(target as MCCommandNode, modifier as MCRedirectModifier, fork as boolean) as MCLiteralArgumentBuilder
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
MCLiteralArgumentBuilder.getArguments() as Collection<MCCommandNode>
myMCLiteralArgumentBuilder.getArguments();
```

:::

:::group{name=getCommand}

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCLiteralArgumentBuilder.getCommand() as MCCommand
myMCLiteralArgumentBuilder.getCommand();
```

:::

:::group{name=getLiteral}

Return Type: string

```zenscript
MCLiteralArgumentBuilder.getLiteral() as string
myMCLiteralArgumentBuilder.getLiteral();
```

:::

:::group{name=getRedirect}

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCLiteralArgumentBuilder.getRedirect() as MCCommandNode
myMCLiteralArgumentBuilder.getRedirect();
```

:::

:::group{name=getRedirectModifier}

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCLiteralArgumentBuilder.getRedirectModifier() as MCRedirectModifier
myMCLiteralArgumentBuilder.getRedirectModifier();
```

:::

:::group{name=getRequirement}

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCLiteralArgumentBuilder.getRequirement() as Predicate<MCCommandSource>
myMCLiteralArgumentBuilder.getRequirement();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCLiteralArgumentBuilder.hashCode() as int
myMCLiteralArgumentBuilder.hashCode();
```

:::

:::group{name=isFork}

Return Type: boolean

```zenscript
MCLiteralArgumentBuilder.isFork() as boolean
myMCLiteralArgumentBuilder.isFork();
```

:::

:::group{name=redirect}

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.redirect(target as MCCommandNode) as MCLiteralArgumentBuilder
```

| 参数     | 类型                                                        | 描述                      |
| ------ | --------------------------------------------------------- | ----------------------- |
| target | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


:::

:::group{name=redirect}

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.redirect(target as MCCommandNode, modifier as MCSingleRedirectModifier) as MCLiteralArgumentBuilder
```

| 参数       | 类型                                                                              | 描述                      |
| -------- | ------------------------------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)                       | No Description Provided |
| modifier | [MCSingleRirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No Description Provided |


:::

:::group{name=requires}

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.requires(requirement as Predicate<MCCommandSource>) as MCLiteralArgumentBuilder
```

| 参数 | 类型                                                                                           | 描述                      |
| -- | -------------------------------------------------------------------------------------------- | ----------------------- |
| 要求 | Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |


:::

:::group{name=then}

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.then(argument as MCArgumentBuilder) as MCLiteralArgumentBuilder
```

| 参数 | 类型                                                                  | 描述                      |
| -- | ------------------------------------------------------------------- | ----------------------- |
| 参数 | [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No Description Provided |


:::

:::group{name=then}

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.then(argument as MCCommandNode) as MCLiteralArgumentBuilder
```

| 参数 | 类型                                                        | 描述                      |
| -- | --------------------------------------------------------- | ----------------------- |
| 参数 | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


:::

:::group{name=toString}

Return Type: string

```zenscript
MCLiteralArgumentBuilder.toString() as string
myMCLiteralArgumentBuilder.toString();
```

:::


## 运算符

:::group{name=EQUALS}

```zenscript
myMCLiteralArgumentBuilder == o as Object
```

:::


