# MC命令

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.commands.custom.MCCommand
```

## Constructor #构造函数
```zenscript
新 craftminstrer.api.commands.custom.MCCommand(有趣的函数.Function<crafttweaker.api.commands.custom.MCCommandContext, Integer>);
```
| 参数  | 类型                                                                                                                           | 描述                      |
| --- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 有趣的 | 函数&lt;[craftmiliter.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), 整数&gt; | No description provided |



## 方法
### equals #等于

返回类型：布尔值

```zenscript
myMCCommand.equals(o as Object);
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |


### hashCode

返回类型：int

```zenscript
myMCCommand.hashCode();
```

### 运行

返回类型：int

```zenscript
myMCCommand.run(context as craftbiner.api.commands.custom.MCCommandContext);
```

| 参数   | 类型                                                                                                  | 描述                      |
| ---- | --------------------------------------------------------------------------------------------------- | ----------------------- |
| 上下文： | [craftminstrer.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No description provided |


### toString

返回类型：字符串

```zenscript
myMCCommand.toString();
```


## 运算符
### EQUALS

```zenscript
myMCCommand == o 为对象
```

| 参数 | 类型 | 描述                      |
| -- | -- | ----------------------- |
| o  | 对象 | No description provided |

## 卡斯特尔

| 结果类型        | 是否隐藏 |
| ----------- | ---- |
| 字符串[string] | true |

