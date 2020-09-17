# MCCommandDispatcher

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.commands.custom.MCCommandDispater
```

## 方法
### equals #等于

返回类型：布尔值

```zenscript
myMCCommandDispatcher.equals(ao as Object);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |


### 执行

返回类型：int

```zenscript
myMCCommandDispatcher.execute(解析为craftbiner.api.commands.custom.MCParseResults);
```

| 参数    | 类型                                                                                              | 描述                      |
| ----- | ----------------------------------------------------------------------------------------------- | ----------------------- |
| parse | [craftminstrer.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |



返回类型：int

```zenscript
myMCCommandDispatcher.execute(输入 String, source as craftbiner.api.commands.custom.MCCommandSource);
```

| 参数        | 类型                                                                                                | 描述                      |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| input（输入） | 字符串[string]                                                                                       | No description provided |
| 来源        | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



返回类型：int

```zenscript
myMCCommandDispatcher.execute(input as com.mojang.brigadier.StringReader, source as craftweeper.api.commands.custom.MCCommandSource);
```

| 参数        | 类型                                                                                                | 描述                      |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| input（输入） | com.mojang.brigadier.StringReader                                                                 | No description provided |
| 来源        | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### 查找模糊性

```zenscript
myMCCommandDispatcher.findAmbiguities(消费者为craftweeper.api.commands.custom.MCAmbiguityConsumer)；
```

| 参数  | 类型                                                                                                        | 描述                      |
| --- | --------------------------------------------------------------------------------------------------------- | ----------------------- |
| 消费者 | [craftminstrer.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No description provided |


### 查找节点

返回类型： [crafttweeper.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(路径作为收藏集<String>)；
```

| 参数 | 类型                           | 描述                      |
| -- | ---------------------------- | ----------------------- |
| 路径 | 收藏&lt;String&gt; | No description provided |


### getAllUsage

返回类型：字符串 []

```zenscript
myMCCommandDispatcher.getAllUsage(节点为 craftmilever.api.commands.custom.MCCommandNode, 源为 craftmilever.api.commands.custom.MCCommandSource, 被限制为 boolean);
```

| 参数  | 类型                                                                                                | 描述                      |
| --- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| 节点  | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No description provided |
| 来源  | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |
| 已限制 | boolean                                                                                           | No description provided |


### getCompltion建议

返回类型： [craftbiner.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getComplitionProcommendations(parse as craftbiner.api.commands.custom.MCParseResults)；
```

| 参数    | 类型                                                                                              | 描述                      |
| ----- | ----------------------------------------------------------------------------------------------- | ----------------------- |
| parse | [craftminstrer.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |



返回类型： [craftbiner.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getComplitionPropositions(parse as craftmilever.api.commands.custom.MCParsetResults, cursor as int)；
```

| 参数     | 类型                                                                                              | 描述                      |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------- |
| parse  | [craftminstrer.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |
| cursor | 整数                                                                                              | No description provided |


### getPath

返回类型：收藏&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(目标 as craftweeper.api.commands.custom.MCCommandNode)；
```

| 参数     | 类型                                                                                            | 描述                      |
| ------ | --------------------------------------------------------------------------------------------- | ----------------------- |
| target | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### getRoot

返回类型： [craftbiner.api.commands.custom.MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
myMCCommandDispatcher.getRoot();
```

### getSmartUsage

返回类型：字符串 [[craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCCommandDispatcher.getSmartUsage(节点为 craftmilever.api.commands.custom.MCCommandNode, 源为 craftweeper.api.commands.custom.MCCommandSource);
```

| 参数 | 类型                                                                                                | 描述                      |
| -- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| 节点 | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No description provided |
| 来源 | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### hashCode

返回类型：int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

返回类型： [craftmilower.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(命令 String, source as craftwiner.api.commands.custom.MCCommandSource);
```

| 参数 | 类型                                                                                                | 描述                      |
| -- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| 命令 | 字符串[string]                                                                                       | No description provided |
| 来源 | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



返回类型： [craftmilower.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(command as com.mojang.brigadier.StringReader, source as craftweeper.api.commands.custom.MCCommandSource);
```

| 参数 | 类型                                                                                                | 描述                      |
| -- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| 命令 | com.mojang.brigadier.StringReader                                                                 | No description provided |
| 来源 | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### 注册

返回类型： [craftbiner.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(命令作为craftmilever.api.commands.custom.MCLiteralArgumentBuilder);
```

| 参数 | 类型                                                                                                                | 描述                      |
| -- | ----------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 命令 | [crafttbower.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No description provided |


### 用户设置

```zenscript
myMCCommandDispatcher.setConsumer(消费者为craftweeper.api.commands.custom.MCResultConsumer)；
```

| 参数  | 类型                                                                                                  | 描述                      |
| --- | --------------------------------------------------------------------------------------------------- | ----------------------- |
| 消费者 | [craftminstrer.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | No description provided |


### toString

返回类型：字符串

```zenscript
myMCCommandDispatcher.toString();
```


## 运算符
### EQUALS

```zenscript
myMCCommandDispatcher == o 为对象
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |

## 卡斯特尔

| 结果类型        | 是否隐藏 |
| ----------- | ---- |
| 字符串[string] | true |

