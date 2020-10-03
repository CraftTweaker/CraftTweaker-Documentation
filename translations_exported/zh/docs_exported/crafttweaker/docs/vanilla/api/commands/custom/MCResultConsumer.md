# MCResultConsumer

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.commands.custom.MCResultConsumer
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(命令上下文，成功，结果) =>{}
```
## 方法
### onCommand完成

```zenscript
myMCResultConsumer.onCommandComplete(commandContext as craftweaker.api.commands.custom.MCCommandContext, successfully as boolean, result as int);
```

| 参数      | 类型                                                                                                  | 描述                      |
| ------- | --------------------------------------------------------------------------------------------------- | ----------------------- |
| 命令内容    | [craftminstrer.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No description provided |
| success | boolean                                                                                             | No description provided |
| result  | int                                                                                                 | No description provided |



