# MCCommandDispatcher

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.commands.custom.MCCommandDispater
```

## 方法
### equals #等于

Return type: boolean

```zenscript
myMCCommandDispatcher.equals(ao as Object);
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |


### 执行

Return type: int

```zenscript
myMCCommandDispatcher.execute(解析为craftbiner.api.commands.custom.MCParseResults);
```

| 参数    | 类型                                                                                              | 描述                      |
| ----- | ----------------------------------------------------------------------------------------------- | ----------------------- |
| parse | [craftminstrer.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |



Return type: int

```zenscript
myMCCommandDispatcher.execute(输入 String, source as craftbiner.api.commands.custom.MCCommandSource);
```

| 参数        | 类型                                                                                                | 描述                      |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| input（输入） | String                                                                                            | No description provided |
| 来源        | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### 查找模糊性

```zenscript
myMCCommandDispatcher.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| 参数  | 类型                                                                                                        | 描述                      |
| --- | --------------------------------------------------------------------------------------------------------- | ----------------------- |
| 消费者 | [craftminstrer.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No description provided |


### 查找节点

返回类型： [crafttweeper.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(path as Collection<String>);
```

| 参数   | 类型                           | 描述                      |
| ---- | ---------------------------- | ----------------------- |
| path | 收藏&lt;String&gt; | No description provided |


### getAllUsage

Return type: String[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource, restricted as boolean);
```

| 参数         | 类型                                                                                                | 描述                      |
| ---------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| 节点         | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No description provided |
| 来源         | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |
| restricted | boolean                                                                                           | No description provided |


### getCompltion建议

返回类型： [craftbiner.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| 参数    | 类型                                                                                              | 描述                      |
| ----- | ----------------------------------------------------------------------------------------------- | ----------------------- |
| parse | [craftminstrer.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |



返回类型： [craftbiner.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse as crafttweaker.api.commands.custom.MCParseResults, cursor as int);
```

| 参数     | 类型                                                                                              | 描述                      |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------- |
| parse  | [craftminstrer.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |
| cursor | int                                                                                             | No description provided |


### getPath

返回类型：收藏&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| 参数     | 类型                                                                                            | 描述                      |
| ------ | --------------------------------------------------------------------------------------------- | ----------------------- |
| target | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### getRoot

Return type: [crafttweaker.api.commands.custom.MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
myMCCommandDispatcher.getRoot();
```

### getSmartUsage

Return type: String[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCCommandDispatcher.getSmartUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| 参数 | 类型                                                                                                | 描述                      |
| -- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| 节点 | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No description provided |
| 来源 | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### hashCode

Return type: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

Return type: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(command as String, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| 参数      | 类型                                                                                                | 描述                      |
| ------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| command | String                                                                                            | No description provided |
| 来源      | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### 注册

返回类型： [craftbiner.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(command as crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| 参数      | 类型                                                                                                                | 描述                      |
| ------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------- |
| command | [crafttbower.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No description provided |


### 用户设置

```zenscript
myMCCommandDispatcher.setConsumer(consumer as crafttweaker.api.commands.custom.MCResultConsumer);
```

| 参数  | 类型                                                                                                  | 描述                      |
| --- | --------------------------------------------------------------------------------------------------- | ----------------------- |
| 消费者 | [craftminstrer.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | No description provided |


### toString

Return type: String

```zenscript
myMCCommandDispatcher.toString();
```


## 运算符
### EQUALS

```zenscript
myMCCommandDispatcher == o as Object
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| String | true |

