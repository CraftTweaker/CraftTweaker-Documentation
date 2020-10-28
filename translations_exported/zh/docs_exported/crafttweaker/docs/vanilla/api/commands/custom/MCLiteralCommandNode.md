# MCLiteralCommand节点

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.commands.custom.MCLiteralCommandNode
```

## 已实现的接口
MCLiteralCommandNode 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## 方法
### addChild

```zenscript
myMCLiteralCommandNode.addChild(node as crafttweaker.api.commands.custom.MCCommandNode);
```

| 参数 | 类型                                                                                            | 描述                      |
| -- | --------------------------------------------------------------------------------------------- | ----------------------- |
| 节点 | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### canUse

Return type: boolean

```zenscript
myMCLiteralCommandNode.canUse(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| 参数 | 类型                                                                                                | 描述                      |
| -- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| 来源 | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### createBuilder

返回类型： [craftbiner.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralCommandNode.createBuilder();
```

### equals #等于

Return type: boolean

```zenscript
myMCLiteralCommandNode.equals(o as Object);
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |


### 查找模糊性

```zenscript
myMCLiteralCommandNode.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| 参数  | 类型                                                                                                        | 描述                      |
| --- | --------------------------------------------------------------------------------------------------------- | ----------------------- |
| 消费者 | [craftminstrer.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No description provided |


### getChild

返回类型： [crafttweeper.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCLiteralCommandNode.getChild(name as String);
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | String | No description provided |


### getChildren

返回类型：集合&lt;[craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCLiteralCommandNode.getChildren();
```

### getCommand

返回类型： [craftmiliter.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCLiteralCommandNode.getCommand();
```

### getExamples

返回类型：收藏&lt;String&gt;

```zenscript
myMCLiteralCommandNode.getExamples();
```

### getLiteral

Return type: String

```zenscript
myMCLiteralCommandNode.getLiteral();
```

### getName

Return type: String

```zenscript
myMCLiteralCommandNode.getName();
```

### 获取重定向

返回类型： [crafttweeper.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCLiteralCommandNode.getRedirect();
```

### 获取重定向修改器

返回类型： [craftmilower.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCLiteralCommandNode.getRedirectModifier();
```

### getRelevantNodes

返回类型：集合&lt;[craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCLiteralCommandNode.getRelevantNodes(input as String);
```

| 参数        | 类型     | 描述                      |
| --------- | ------ | ----------------------- |
| input（输入） | String | No description provided |


### getRequirement

返回类型：函数。预测&lt;[craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCLiteralCommandNode.getRequirement();
```

### getUsageText

Return type: String

```zenscript
myMCLiteralCommandNode.getUsageText();
```

### hashCode

Return type: int

```zenscript
myMCLiteralCommandNode.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCLiteralCommandNode.isFork();
```

### isValidInput

Return type: boolean

```zenscript
myMCLiteralCommandNode.isValidInput(input as String);
```

| 参数        | 类型     | 描述                      |
| --------- | ------ | ----------------------- |
| input（输入） | String | No description provided |


### listSuggestions

返回类型： [craftbiner.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCLiteralCommandNode.listSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| 参数   | 类型                                                                                                         | 描述                      |
| ---- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| 上下文： | [craftminstrer.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)        | No description provided |
| 生成器  | [crafttweeper.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


### parse

```zenscript
myMCLiteralCommandNode.parse(input as String, contextBuilder as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| 参数             | 类型                                                                                                              | 描述                      |
| -------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------- |
| input（输入）      | String                                                                                                          | No description provided |
| contextBuilder | [crafttbower.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No description provided |


### toString

Return type: String

```zenscript
myMCLiteralCommandNode.toString();
```


## 运算符
### COMPARE

```zenscript
myMCCommandNode compare o as crafttweaker.api.commands.custom.MCCommandNode
```

| 参数 | 类型                                                                                            | 描述                      |
| -- | --------------------------------------------------------------------------------------------- | ----------------------- |
| o  | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
### EQUALS

```zenscript
myMCLiteralCommandNode == o as Object
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| String | true |

