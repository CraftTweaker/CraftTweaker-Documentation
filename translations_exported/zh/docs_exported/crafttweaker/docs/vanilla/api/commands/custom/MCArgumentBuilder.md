# MCArgumentBuilder

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCArgumentBuilder;
```


## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

### build

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCArgumentBuilder.build() as MCCommandNode
myMCArgumentBuilder.build();
```
### equals #等于

Return Type: boolean

```zenscript
MCArgumentBuilder.equals(o as Object) as boolean
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |

### 执行

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.executes(command as MCCommand) as MCArgumentBuilder
```
| 参数      | 类型                                             | 描述                      |
| ------- | ---------------------------------------------- | ----------------------- |
| command | [MC命令](/vanilla/api/commands/custom/MCCommand) | No Description Provided |

### fork

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.fork(target as MCCommandNode, modifier as MCRedirectModifier) as MCArgumentBuilder
```
| 参数       | 类型                                                          | 描述                      |
| -------- | ----------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)   | No Description Provided |
| modifier | [MC重定向修改器](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |

### 向前

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.forward(target as MCCommandNode, modifier as MCRedirectModifier, fork as boolean) as MCArgumentBuilder
```
| 参数       | 类型                                                          | 描述                      |
| -------- | ----------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)   | No Description Provided |
| modifier | [MC重定向修改器](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |
| fork     | boolean                                                     | No Description Provided |

### 获取参数

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCArgumentBuilder.getArguments() as Collection<MCCommandNode>
myMCArgumentBuilder.getArguments();
```
### getCommand

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCArgumentBuilder.getCommand() as MCCommand
myMCArgumentBuilder.getCommand();
```
### 获取重定向

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCArgumentBuilder.getRedirect() as MCCommandNode
myMCArgumentBuilder.getRedirect();
```
### 获取重定向修改器

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCArgumentBuilder.getRedirectModifier() as MCRedirectModifier
myMCArgumentBuilder.getRedirectModifier();
```
### getRequirement

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCArgumentBuilder.getRequirement() as Predicate<MCCommandSource>
myMCArgumentBuilder.getRequirement();
```
### hashCode

Return Type: int

```zenscript
MCArgumentBuilder.hashCode() as int
myMCArgumentBuilder.hashCode();
```
### isFork

Return Type: boolean

```zenscript
MCArgumentBuilder.isFork() as boolean
myMCArgumentBuilder.isFork();
```
### 重定向

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.redirect(target as MCCommandNode) as MCArgumentBuilder
```
| 参数     | 类型                                                        | 描述                      |
| ------ | --------------------------------------------------------- | ----------------------- |
| target | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.redirect(target as MCCommandNode, modifier as MCSingleRedirectModifier) as MCArgumentBuilder
```
| 参数       | 类型                                                                              | 描述                      |
| -------- | ------------------------------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)                       | No Description Provided |
| modifier | [MCSingleRirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No Description Provided |

### 要求

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.requires(requirement as Predicate<MCCommandSource>) as MCArgumentBuilder
```
| 参数 | 类型                                                                                           | 描述                      |
| -- | -------------------------------------------------------------------------------------------- | ----------------------- |
| 要求 | Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |

### 然后，

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.then(argument as MCArgumentBuilder) as MCArgumentBuilder
```
| 参数 | 类型                                                                  | 描述                      |
| -- | ------------------------------------------------------------------- | ----------------------- |
| 参数 | [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No Description Provided |

Return Type: [MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
MCArgumentBuilder.then(argument as MCCommandNode) as MCArgumentBuilder
```
| 参数 | 类型                                                        | 描述                      |
| -- | --------------------------------------------------------- | ----------------------- |
| 参数 | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |

### toString

Return Type: string

```zenscript
MCArgumentBuilder.toString() as string
myMCArgumentBuilder.toString();
```

## 运算符

### EQUALS

```zenscript
myMCArgumentBuilder == o 为对象
```



