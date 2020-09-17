# MCCommandContextBuilder

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttbower.api.commands.custom.MCCommandContextBuilder
```

## 方法
### 构建中

返回类型： [craftbiner.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContextBuilder.build(输入为字符串)；
```

| 参数        | 类型          | 描述                      |
| --------- | ----------- | ----------------------- |
| input（输入） | 字符串[string] | No description provided |


### copy #复制

返回类型： [craftbiner.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.copy();
```

### equals #等于

返回类型：布尔值

```zenscript
myMCCommandContextBuilder.equals(ao as Object);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |


### 查找建议内容

返回类型： [craftbiner.api.commands.custom.MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
myMCCommandContextBuilder.findRecommendtionContext(光标为int)；
```

| 参数     | 类型 | 描述                      |
| ------ | -- | ----------------------- |
| cursor | 整数 | No description provided |


### 获取参数

返回类型： [craftbiner.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[String]

```zenscript
myMCCommandContextBuilder.getArguments();
```

### getChild

返回类型： [craftbiner.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getChild();
```

### getCommand

返回类型： [craftmiliter.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContextBuilder.getCommand();
```

### 获取调度器

返回类型： [craftbiner.api.commands.custom.MCCommandDispater](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
myMCCommandContextBuilder.getDispatcher();
```

### getLastChild

返回类型： [craftbiner.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getLastChild();
```

### getNodes

返回类型：邮件列表&lt;[craftminstrer.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContextBuilder.getNodes();
```

### getRange

返回类型： [craftbiner.api.commands.custom.MCStringrange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContextBuilder.getRange();
```

### getRootNode

返回类型： [crafttweeper.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContextBuilder.getRootNode();
```

### getSource

返回类型： [craftbiner.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContextBuilder.getSource();
```

### hashCode

返回类型：int

```zenscript
myMCCommandContextBuilder.hashCode();
```

### toString

返回类型：字符串

```zenscript
myMCCommandContextBuilder.toString();
```

### 有参数

返回类型： [craftbiner.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withArgumentation(name as String, articles as craftbiner.api.commands.custom.MCParsedArgument);
```

| 参数 | 类型                                                                                                  | 描述                      |
| -- | --------------------------------------------------------------------------------------------------- | ----------------------- |
| 名称 | 字符串[string]                                                                                         | No description provided |
| 参数 | [craftminstrer.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | No description provided |


### 与子节点

返回类型： [craftbiner.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withChild(child as craftweeper.api.commands.custom.MCCommandContextBuilder);
```

| 参数  | 类型                                                                                                              | 描述                      |
| --- | --------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 子节点 | [crafttbower.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No description provided |


### 使用命令

返回类型： [craftbiner.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withCommand(command as craftbiner.api.commands.custom.MCCommand);
```

| 参数 | 类型                                                                                    | 描述                      |
| -- | ------------------------------------------------------------------------------------- | ----------------------- |
| 命令 | [craftminstrer.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No description provided |


### withNode

返回类型： [craftbiner.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withNode(节点作为craftmilever.api.commands.custom.MCCommandNode, range as craftmilever.api.commands.custom.MCStringRange);
```

| 参数    | 类型                                                                                            | 描述                      |
| ----- | --------------------------------------------------------------------------------------------- | ----------------------- |
| 节点    | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| range | [craftminstrer.api.commands.custom.MCStringrange](/vanilla/api/commands/custom/MCStringRange) | No description provided |


### 与源代码

返回类型： [craftbiner.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withSource(source as craftwiner.api.commands.custom.MCCommandSource);
```

| 参数 | 类型                                                                                                | 描述                      |
| -- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| 来源 | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



## 运算符
### EQUALS

```zenscript
myMCCommandContextBuilder == o 为对象
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |

## 卡斯特尔

| 结果类型        | 是否隐藏 |
| ----------- | ---- |
| 字符串[string] | true |

