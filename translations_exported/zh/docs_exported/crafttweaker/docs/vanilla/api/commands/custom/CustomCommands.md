# 自定义命令

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.CustomCommands;
```


## 方法

:::group{name=argument}

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
CustomCommands.argument(name as string) as MCRequiredArgumentBuilder
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


:::

:::group{name=literal}

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
CustomCommands.literal(name as string) as MCLiteralArgumentBuilder
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


:::

:::group{name=registerCommand}

Return Type: void

```zenscript
CustomCommands.registerCommand(builder as MCLiteralArgumentBuilder) as void
```

| 参数  | 类型                                                                                | 描述                      |
| --- | --------------------------------------------------------------------------------- | ----------------------- |
| 生成器 | [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No Description Provided |


:::

