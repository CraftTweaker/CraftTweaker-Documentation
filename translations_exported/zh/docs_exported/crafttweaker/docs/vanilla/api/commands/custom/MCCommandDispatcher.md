# MCCommandDispatcher

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandDispatcher;
```


## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

### equals #等于

Return Type: boolean

```zenscript
MCCommandDispatcher.equals(o as Object) as boolean
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |

### 执行

Return Type: int

```zenscript
MCCommandDispatcher.execute(parse as MCParseResults) as int
```
| 参数    | 类型                                                            | 描述                      |
| ----- | ------------------------------------------------------------- | ----------------------- |
| parse | [MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |

Return Type: int

```zenscript
MCCommandDispatcher.execute(input as string, source as MCCommandSource) as int
```
| 参数        | 类型                                                    | 描述                      |
| --------- | ----------------------------------------------------- | ----------------------- |
| input（输入） | string                                                | No Description Provided |
| 来源        | [MC命令源](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |

### 查找模糊性

Return Type: void

```zenscript
MCCommandDispatcher.findAmbiguities(consumer as MCAmbiguityConsumer) as void
```
| 参数  | 类型                                                                      | 描述                      |
| --- | ----------------------------------------------------------------------- | ----------------------- |
| 消费者 | [MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No Description Provided |

### 查找节点

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandDispatcher.findNode(path as Collection<string>) as MCCommandNode
```
| 参数   | 类型                                   | 描述                      |
| ---- | ------------------------------------ | ----------------------- |
| path | Collection&lt;string&gt; | No Description Provided |

### getAllUsage

Return Type: string[]

```zenscript
MCCommandDispatcher.getAllUsage(node as MCCommandNode, source as MCCommandSource, restricted as boolean) as string[]
```
| 参数         | 类型                                                        | 描述                      |
| ---------- | --------------------------------------------------------- | ----------------------- |
| 节点         | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |
| 来源         | [MC命令源](/vanilla/api/commands/custom/MCCommandSource)     | No Description Provided |
| restricted | boolean                                                   | No Description Provided |

### getCompltion建议

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandDispatcher.getCompletionSuggestions(parse as MCParseResults) as MCSuggestions
```
| 参数    | 类型                                                            | 描述                      |
| ----- | ------------------------------------------------------------- | ----------------------- |
| parse | [MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCCommandDispatcher.getCompletionSuggestions(parse as MCParseResults, cursor as int) as MCSuggestions
```
| 参数     | 类型                                                            | 描述                      |
| ------ | ------------------------------------------------------------- | ----------------------- |
| parse  | [MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No Description Provided |
| cursor | int                                                           | No Description Provided |

### getPath

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandDispatcher.getPath(target as MCCommandNode) as Collection<string>
```
| 参数     | 类型                                                        | 描述                      |
| ------ | --------------------------------------------------------- | ----------------------- |
| target | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |

### getRoot

Return Type: [MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
MCCommandDispatcher.getRoot() as MCRootCommandNode
myMCCommandDispatcher.getRoot();
```
### getSmartUsage

Return Type: string[[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
MCCommandDispatcher.getSmartUsage(node as MCCommandNode, source as MCCommandSource) as string[MCCommandNode]
```
| 参数 | 类型                                                        | 描述                      |
| -- | --------------------------------------------------------- | ----------------------- |
| 节点 | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode) | No Description Provided |
| 来源 | [MC命令源](/vanilla/api/commands/custom/MCCommandSource)     | No Description Provided |

### hashCode

Return Type: int

```zenscript
MCCommandDispatcher.hashCode() as int
myMCCommandDispatcher.hashCode();
```
### parse

Return Type: [MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
MCCommandDispatcher.parse(command as string, source as MCCommandSource) as MCParseResults
```
| 参数      | 类型                                                    | 描述                      |
| ------- | ----------------------------------------------------- | ----------------------- |
| command | string                                                | No Description Provided |
| 来源      | [MC命令源](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |

### 注册

Return Type: [MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
MCCommandDispatcher.register(command as MCLiteralArgumentBuilder) as MCLiteralCommandNode
```
| 参数      | 类型                                                                                | 描述                      |
| ------- | --------------------------------------------------------------------------------- | ----------------------- |
| command | [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No Description Provided |

### 用户设置

Return Type: void

```zenscript
MCCommandDispatcher.setConsumer(consumer as MCResultConsumer) as void
```
| 参数  | 类型                                                                | 描述                      |
| --- | ----------------------------------------------------------------- | ----------------------- |
| 消费者 | [MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | No Description Provided |

### toString

Return Type: string

```zenscript
MCCommandDispatcher.toString() as string
myMCCommandDispatcher.toString();
```

## 运算符

### EQUALS

```zenscript
myMCCommandDispatcher == o as Object
```



