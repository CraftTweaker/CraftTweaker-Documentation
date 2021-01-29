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

### build

Return Type: [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
MCCommandContextBuilder.build(input as string) as MCCommandContext
```
| 参数        | 类型     | 描述                      |
| --------- | ------ | ----------------------- |
| input（输入） | string | No Description Provided |

### copy #复制

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.copy() as MCCommandContextBuilder
myMCCommandContextBuilder.copy();
```
### equals #等于

Return Type: boolean

```zenscript
MCCommandContextBuilder.equals(o as Object) as boolean
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |

### 查找建议内容

Return Type: [MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
MCCommandContextBuilder.findSuggestionContext(cursor as int) as MCSuggestionContext
```
| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| cursor | int | No Description Provided |

### 获取参数

Return Type: [MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[string]

```zenscript
MCCommandContextBuilder.getArguments() as MCParsedArgument[string]
myMCCommandContextBuilder.getArguments();
```
### getChild

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.getChild() as MCCommandContextBuilder
myMCCommandContextBuilder.getChild();
```
### getCommand

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCCommandContextBuilder.getCommand() as MCCommand
myMCCommandContextBuilder.getCommand();
```
### 获取调度器

Return Type: [MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
MCCommandContextBuilder.getDispatcher() as MCCommandDispatcher
myMCCommandContextBuilder.getDispatcher();
```
### getLastChild

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.getLastChild() as MCCommandContextBuilder
myMCCommandContextBuilder.getLastChild();
```
### getNodes

Return Type: stdlib.List&lt;[MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
MCCommandContextBuilder.getNodes() as stdlib.List<MCParsedCommandNode>
myMCCommandContextBuilder.getNodes();
```
### getRange

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCCommandContextBuilder.getRange() as MCStringRange
myMCCommandContextBuilder.getRange();
```
### getRootNode

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandContextBuilder.getRootNode() as MCCommandNode
myMCCommandContextBuilder.getRootNode();
```
### getSource

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandContextBuilder.getSource() as MCCommandSource
myMCCommandContextBuilder.getSource();
```
### hashCode

Return Type: int

```zenscript
MCCommandContextBuilder.hashCode() as int
myMCCommandContextBuilder.hashCode();
```
### toString

Return Type: string

```zenscript
MCCommandContextBuilder.toString() as string
myMCCommandContextBuilder.toString();
```
### 有参数

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withArgument(name as string, argument as MCParsedArgument) as MCCommandContextBuilder
```
| 参数   | 类型                                                                | 描述                      |
| ---- | ----------------------------------------------------------------- | ----------------------- |
| name | string                                                            | No Description Provided |
| 参数   | [MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | No Description Provided |

### 与子节点

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withChild(child as MCCommandContextBuilder) as MCCommandContextBuilder
```
| 参数  | 类型                                                                              | 描述                      |
| --- | ------------------------------------------------------------------------------- | ----------------------- |
| 子节点 | [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No Description Provided |

### 使用命令

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withCommand(command as MCCommand) as MCCommandContextBuilder
```
| 参数      | 类型                                             | 描述                      |
| ------- | ---------------------------------------------- | ----------------------- |
| command | [MC命令](/vanilla/api/commands/custom/MCCommand) | No Description Provided |

### withNode

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withNode(node as MCCommandNode, range as MCStringRange) as MCCommandContextBuilder
```
| 参数    | 类型                                                          | 描述                      |
| ----- | ----------------------------------------------------------- | ----------------------- |
| 节点    | [MCCommand节点](/vanilla/api/commands/custom/MCCommandNode)   | No Description Provided |
| range | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |

### 与源代码

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCCommandContextBuilder.withSource(source as MCCommandSource) as MCCommandContextBuilder
```
| 参数 | 类型                                                    | 描述                      |
| -- | ----------------------------------------------------- | ----------------------- |
| 来源 | [MC命令源](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


## 运算符

### EQUALS

```zenscript
myMCCommandContextBuilder == o 为对象
```



