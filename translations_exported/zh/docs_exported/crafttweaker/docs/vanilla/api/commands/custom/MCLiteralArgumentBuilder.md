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

### build

Return Type: [MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
MCLiteralArgumentBuilder.build() as MCLiteralCommandNode
myMCLiteralArgumentBuilder.build();
```

### equals #等于

Return Type: boolean

```zenscript
MCLiteralArgumentBuilder.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


### 执行

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.executes(command as MCCommand) as MCLiteralArgumentBuilder
```

| 参数      | 类型                                             | 描述                      |
| ------- | ---------------------------------------------- | ----------------------- |
| command | [MC命令](/vanilla/api/commands/custom/MCCommand) | No Description Provided |


### fork

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.fork(target as MCCommandNode, modifier as MCRedirectModifier) as MCLiteralArgumentBuilder
```

| 参数       | 类型                                                          | 描述                      |
| -------- | ----------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)   | No Description Provided |
| modifier | [MC重定向修改器](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |


### 向前

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.forward(target as MCCommandNode, modifier as MCRedirectModifier, fork as boolean) as MCLiteralArgumentBuilder
```

| 参数       | 类型                                                          | 描述                      |
| -------- | ----------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)   | No Description Provided |
| modifier | [MC重定向修改器](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |
| fork     | boolean                                                     | No Description Provided |


### getLiteral

Return Type: string

```zenscript
MCLiteralArgumentBuilder.getLiteral() as string
myMCLiteralArgumentBuilder.getLiteral();
```

### getRequirement

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCLiteralArgumentBuilder.getRequirement() as Predicate<MCCommandSource>
myMCLiteralArgumentBuilder.getRequirement();
```

### hashCode

Return Type: int

```zenscript
MCLiteralArgumentBuilder.hashCode() as int
myMCLiteralArgumentBuilder.hashCode();
```

### 重定向

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.redirect(target as MCCommandNode) as MCLiteralArgumentBuilder
```

| 参数     | 类型                                                        | 描述                      |
| ------ | --------------------------------------------------------- | ----------------------- |
| target | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.redirect(target as MCCommandNode, modifier as MCSingleRedirectModifier) as MCLiteralArgumentBuilder
```

| 参数       | 类型                                                                              | 描述                      |
| -------- | ------------------------------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)                       | No Description Provided |
| modifier | [MCSingleRirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No Description Provided |


### 要求

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.requires(requirement as Predicate<MCCommandSource>) as MCLiteralArgumentBuilder
```

| 参数 | 类型                                                                                           | 描述                      |
| -- | -------------------------------------------------------------------------------------------- | ----------------------- |
| 要求 | Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |


### 然后，

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.then(argument as MCArgumentBuilder) as MCLiteralArgumentBuilder
```

| 参数 | 类型                                                                  | 描述                      |
| -- | ------------------------------------------------------------------- | ----------------------- |
| 参数 | [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No Description Provided |


Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralArgumentBuilder.then(argument as MCCommandNode) as MCLiteralArgumentBuilder
```

| 参数 | 类型                                                        | 描述                      |
| -- | --------------------------------------------------------- | ----------------------- |
| 参数 | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |


### toString

Return Type: string

```zenscript
MCLiteralArgumentBuilder.toString() as string
myMCLiteralArgumentBuilder.toString();
```


## 运算符

### EQUALS

```zenscript
myMCLiteralArgumentBuilder == o as Object
```




