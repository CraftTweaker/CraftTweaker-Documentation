# MC命令

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommand;
```


## Constructor #构造函数

No Description Provided
```zenscript
new MCCommand(fun as Function<MCCommandContext,Integer>) as MCCommand
```

| 参数  | 类型                                                                                                    | 描述                      |
| --- | ----------------------------------------------------------------------------------------------------- | ----------------------- |
| 有趣的 | Function&lt;[MCCommandContext](/vanilla/api/commands/custom/MCCommandContext),Integer&gt; | No Description Provided |



## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

:::group{name=equals}

Return Type: boolean

```zenscript
MCCommand.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCCommand.hashCode() as int
myMCCommand.hashCode();
```

:::

:::group{name=run}

Return Type: int

```zenscript
MCCommand.run(context as MCCommandContext) as int
```

| 参数   | 类型                                                                | 描述                      |
| ---- | ----------------------------------------------------------------- | ----------------------- |
| 上下文： | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |


:::

:::group{name=toString}

Return Type: string

```zenscript
MCCommand.toString() as string
myMCCommand.toString();
```

:::


## 运算符

:::group{name=EQUALS}

```zenscript
myMCCommand == o 为对象
```

:::


