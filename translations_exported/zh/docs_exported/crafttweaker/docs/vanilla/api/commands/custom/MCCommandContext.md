# MCCommandContext

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.commands.custom.MCCommandContext
```

## 方法
### copyFor

返回类型： [craftbiner.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.copyFor(source as craftwiner.api.commands.custom.MCCommandSource);
```

| 参数 | 类型                                                                                                | 描述                      |
| -- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| 来源 | [craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### equals #等于

返回类型：布尔值

```zenscript
myMCCommandContext.equals(o as Object);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |


### 获取参数

返回类型：字符串

```zenscript
myMCCommandContext.getArgument(名称为字符串)；
```

| 参数 | 类型          | 描述                      |
| -- | ----------- | ----------------------- |
| 名称 | 字符串[string] | No description provided |


### getChild

返回类型： [craftbiner.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getChild();
```

### getCommand

返回类型： [craftmiliter.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContext.getCommand();
```

### getInput

返回类型：字符串

```zenscript
myMCCommandContext.getInput();
```

### getLastChild

返回类型： [craftbiner.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getLastChild();
```

### getNodes

返回类型：邮件列表&lt;[craftminstrer.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContext.getNodes();
```

### getRange

返回类型： [craftbiner.api.commands.custom.MCStringrange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContext.getRange();
```

### 获取重定向修改器

返回类型： [craftmilower.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCCommandContext.getrediret Modifier();
```

### getRootNode

返回类型： [crafttweeper.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContext.getRootNode();
```

### getSource

返回类型： [craftbiner.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContext.getSource();
```

### hasNodes

返回类型：布尔值

```zenscript
myMCCommandContext.hasNodes();
```

### hashCode

返回类型：int

```zenscript
myMCCommandContext.hashCode();
```

### isForked

返回类型：布尔值

```zenscript
myMCCommandContext.isForked();
```

### toString

返回类型：字符串

```zenscript
myMCCommandContext.toString();
```


## 运算符
### EQUALS

```zenscript
myMCCommandContext == o 为对象
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |

## 卡斯特尔

| 结果类型        | 是否隐藏 |
| ----------- | ---- |
| 字符串[string] | true |

