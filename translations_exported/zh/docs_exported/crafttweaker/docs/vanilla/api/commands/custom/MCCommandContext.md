# MCCommandContext

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandContext;
```


## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

### copyFor

Return Type: [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
MCCommandContext.copyFor(source as MCCommandSource) as MCCommandContext
```

| 参数 | 类型                                                    | 描述                      |
| -- | ----------------------------------------------------- | ----------------------- |
| 来源 | [MC命令源](/vanilla/api/commands/custom/MCCommandSource) | No Description Provided |


### equals #等于

Return Type: boolean

```zenscript
MCCommandContext.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


### 获取参数

Return Type: string

```zenscript
MCCommandContext.getArgument(name as string) as string
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


### getChild

Return Type: [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
MCCommandContext.getChild() as MCCommandContext
myMCCommandContext.getChild();
```

### getCommand

Return Type: [MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
MCCommandContext.getCommand() as MCCommand
myMCCommandContext.getCommand();
```

### getInput

Return Type: string

```zenscript
MCCommandContext.getInput() as string
myMCCommandContext.getInput();
```

### getLastChild

Return Type: [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
MCCommandContext.getLastChild() as MCCommandContext
myMCCommandContext.getLastChild();
```

### getNodes

Return Type: stdlib.List&lt;[MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
MCCommandContext.getNodes() as stdlib.List<MCParsedCommandNode>
myMCCommandContext.getNodes();
```

### getRange

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCCommandContext.getRange() as MCStringRange
myMCCommandContext.getRange();
```

### 获取重定向修改器

Return Type: [MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
MCCommandContext.getRedirectModifier() as MCRedirectModifier
myMCCommandContext.getRedirectModifier();
```

### getRootNode

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCCommandContext.getRootNode() as MCCommandNode
myMCCommandContext.getRootNode();
```

### getSource

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandContext.getSource() as MCCommandSource
myMCCommandContext.getSource();
```

### hasNodes

Return Type: boolean

```zenscript
MCCommandContext.hasNodes() as boolean
myMCCommandContext.hasNodes();
```

### hashCode

Return Type: int

```zenscript
MCCommandContext.hashCode() as int
myMCCommandContext.hashCode();
```

### isForked

Return Type: boolean

```zenscript
MCCommandContext.isForked() as boolean
myMCCommandContext.isForked();
```

### toString

Return Type: string

```zenscript
MCCommandContext.toString() as string
myMCCommandContext.toString();
```


## 运算符

### EQUALS

```zenscript
myMCCommandContext == o 为对象
```




