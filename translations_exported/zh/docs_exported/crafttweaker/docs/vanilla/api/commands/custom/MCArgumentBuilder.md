# MCArgumentBuilder

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttbower.api.commands.custom.MCArgumentBuilder
```

## 方法
### 构建中

返回类型： [crafttweeper.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.build();
```

### equals #等于

返回类型：布尔值

```zenscript
myMCArgumentBuilder.equals(o as Object);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |


### 执行

返回类型： [craftbiner.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.executes(命令 craftweeper.api.commands.custom.MCCommand);
```

| 参数 | 类型                                                                                    | 描述                      |
| -- | ------------------------------------------------------------------------------------- | ----------------------- |
| 命令 | [craftminstrer.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No description provided |


### fork

返回类型： [craftbiner.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.fork(目标 as craftweeper.api.commands.custom.MCCommandNode，modifier as craftweer.api.commands.custom.MCredirectModifier);
```

| 参数       | 类型                                                                                                      | 描述                      |
| -------- | ------------------------------------------------------------------------------------------------------- | ----------------------- |
| target   | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No description provided |
| modifier | [craftminstrer.api.commands.custom.MCRediret Modifier](/vanilla/api/commands/custom/MCRedirectModifier) | No description provided |


### 向前

返回类型： [craftbiner.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.forward(目标为 craftweeper.api.commands.custom.MCCommandNode, modifier as craftweer.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| 参数       | 类型                                                                                                      | 描述                      |
| -------- | ------------------------------------------------------------------------------------------------------- | ----------------------- |
| target   | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No description provided |
| modifier | [craftminstrer.api.commands.custom.MCRediret Modifier](/vanilla/api/commands/custom/MCRedirectModifier) | No description provided |
| fork     | boolean                                                                                                 | No description provided |


### 获取参数

返回类型：集合&lt;[craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCArgumentBuilder.getArguments();
```

### getCommand

返回类型： [craftmiliter.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCArgumentBuilder.getCommand();
```

### 获取重定向

返回类型： [crafttweeper.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.getRedirect();
```

### 获取重定向修改器

返回类型： [craftmilower.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCArgumentBuilder.getRedirectModifier();
```

### getRequirement

返回类型：函数。预测&lt;[craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCArgumentBuilder.getRequirement();
```

### hashCode

返回类型：int

```zenscript
myMCArgumentBuilder.hashCode();
```

### isFork

返回类型：布尔值

```zenscript
myMCArgumentBuilder.isFork();
```

### 重定向

返回类型： [craftbiner.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(targets as craftweeper.api.commands.custom.MCCommandNode)；
```

| 参数     | 类型                                                                                            | 描述                      |
| ------ | --------------------------------------------------------------------------------------------- | ----------------------- |
| target | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |



返回类型： [craftbiner.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(targets as craftweeper.api.commands.custom.MCCommands,modifier as craftbiner.api.commands.custom.MCSingleRiredirectModifier);
```

| 参数       | 类型                                                                                                                   | 描述                      |
| -------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| target   | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                        | No description provided |
| modifier | [craftminstruer.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No description provided |


### 要求

返回类型： [craftbiner.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.requireres(requirement as function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| 参数 | 类型                                                                                                                      | 描述                      |
| -- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 要求 | 预测&lt;[craftminstrer.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No description provided |


### 然后，

返回类型： [craftbiner.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(参数为 craftbiner.api.commands.custom.MCArgumentBuilder);
```

| 参数 | 类型                                                                                                  | 描述                      |
| -- | --------------------------------------------------------------------------------------------------- | ----------------------- |
| 参数 | [crafttbower.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No description provided |



返回类型： [craftbiner.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(参数为 craftbiner.api.commands.custom.MCCommandNode);
```

| 参数 | 类型                                                                                            | 描述                      |
| -- | --------------------------------------------------------------------------------------------- | ----------------------- |
| 参数 | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### toString

返回类型：字符串

```zenscript
myMCArgumentBuilder.toString();
```


## 运算符
### EQUALS

```zenscript
myMCArgumentBuilder == o 为对象
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |

## 卡斯特尔

| 结果类型        | 是否隐藏 |
| ----------- | ---- |
| 字符串[string] | true |

