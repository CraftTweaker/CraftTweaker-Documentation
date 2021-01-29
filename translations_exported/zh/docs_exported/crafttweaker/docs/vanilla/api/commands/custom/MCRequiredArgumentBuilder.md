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

### build

Return Type: [MCArgumentCommandNode](/vanilla/api/commands/custom/MCArgumentCommandNode)

```zenscript
MCRequiredArgumentBuilder.build() as MCArgumentCommandNode
myMCRequiredArgumentBuilder.build();
```
### equals #等于

Return Type: boolean

```zenscript
MCRequiredArgumentBuilder.equals(o as Object) as boolean
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |

### 执行

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.executes(command as MCCommand) as MCRequiredArgumentBuilder
```
| 参数      | 类型                                             | 描述                      |
| ------- | ---------------------------------------------- | ----------------------- |
| command | [MC命令](/vanilla/api/commands/custom/MCCommand) | No Description Provided |

### fork

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.fork(target as MCCommandNode, modifier as MCRedirectModifier) as MCRequiredArgumentBuilder
```
| 参数       | 类型                                                          | 描述                      |
| -------- | ----------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)   | No Description Provided |
| modifier | [MC重定向修改器](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |

### 向前

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.forward(target as MCCommandNode, modifier as MCRedirectModifier, fork as boolean) as MCRequiredArgumentBuilder
```
| 参数       | 类型                                                          | 描述                      |
| -------- | ----------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)   | No Description Provided |
| modifier | [MC重定向修改器](/vanilla/api/commands/custom/MCRedirectModifier) | No Description Provided |
| fork     | boolean                                                     | No Description Provided |

### 获取参数

Return Type: Collection&lt;[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
MCRequiredArgumentBuilder.getArguments() as Collection<MCCommandNode>
myMCRequiredArgumentBuilder.getArguments();
```
### getName

Return Type: string

```zenscript
MCRequiredArgumentBuilder.getName() as string
myMCRequiredArgumentBuilder.getName();
```
### getRequirement

Return Type: Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCRequiredArgumentBuilder.getRequirement() as Predicate<MCCommandSource>
myMCRequiredArgumentBuilder.getRequirement();
```
### getSuggestionsProvider

Return Type: [MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
MCRequiredArgumentBuilder.getSuggestionsProvider() as MCSuggestionProvider
myMCRequiredArgumentBuilder.getSuggestionsProvider();
```
### hashCode

Return Type: int

```zenscript
MCRequiredArgumentBuilder.hashCode() as int
myMCRequiredArgumentBuilder.hashCode();
```
### 重定向

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.redirect(target as MCCommandNode) as MCRequiredArgumentBuilder
```
| 参数     | 类型                                                        | 描述                      |
| ------ | --------------------------------------------------------- | ----------------------- |
| target | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.redirect(target as MCCommandNode, modifier as MCSingleRedirectModifier) as MCRequiredArgumentBuilder
```
| 参数       | 类型                                                                              | 描述                      |
| -------- | ------------------------------------------------------------------------------- | ----------------------- |
| target   | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)                       | No Description Provided |
| modifier | [MCSingleRirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No Description Provided |

### 要求

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.requires(requirement as Predicate<MCCommandSource>) as MCRequiredArgumentBuilder
```
| 参数 | 类型                                                                                           | 描述                      |
| -- | -------------------------------------------------------------------------------------------- | ----------------------- |
| 要求 | Predicate&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No Description Provided |

### suggests

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.suggests(provider as MCSuggestionProvider) as MCRequiredArgumentBuilder
```
| 参数       | 类型                                                                        | 描述                      |
| -------- | ------------------------------------------------------------------------- | ----------------------- |
| provider | [MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | No Description Provided |

### 然后，

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.then(argument as MCCommandNode) as MCRequiredArgumentBuilder
```
| 参数 | 类型                                                        | 描述                      |
| -- | --------------------------------------------------------- | ----------------------- |
| 参数 | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCRequiredArgumentBuilder.then(argument as MCRequiredArgumentBuilder) as MCRequiredArgumentBuilder
```
| 参数 | 类型                                                                                   | 描述                      |
| -- | ------------------------------------------------------------------------------------ | ----------------------- |
| 参数 | [MCRequireedArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | No Description Provided |

### toString

Return Type: string

```zenscript
MCRequiredArgumentBuilder.toString() as string
myMCRequiredArgumentBuilder.toString();
```

## 运算符

### EQUALS

```zenscript
myMCRequiredArgumentBuilder == o as Object
```



