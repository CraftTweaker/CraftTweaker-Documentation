# 自定义命令

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
CustomCommands
```

## 方法
### 参数

返回类型： [crafttweeper.api.commands.custom.MCRequireedArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
crafttbiner.api.commands.custom.CustomCommands.argument(name as String);
```

| 参数 | 类型          | 描述                      |
| -- | ----------- | ----------------------- |
| 名称 | 字符串[string] | No description provided |


### 纯文本

返回类型： [craftbiner.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
crafttbiner.api.commands.customCommands.literal(name as String);
```

| 参数 | 类型          | 描述                      |
| -- | ----------- | ----------------------- |
| 名称 | 字符串[string] | No description provided |


### 注册命令

```zenscript
crafttmilower.api.commands.customCommands.registerCommand(生成器为 craftbiner.api.commands.custom.MCLiteralArgumentBuilder);
```

| 参数  | 类型                                                                                                                | 描述                      |
| --- | ----------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 生成器 | [crafttbower.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No description provided |



