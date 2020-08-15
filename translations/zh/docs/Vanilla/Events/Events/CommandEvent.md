# 命令事件

每当执行命令时都会触发命令事件。 您可以通过提供一个命令处理器来对该命令作出反应。 请参阅 [Crafttbelown 示例](https://github.com/CraftTweaker/CraftTweaker-Examples/blob/master/crafttweaker/events/commandEvent/SendMessageOnSyntaxCommand/SendMessageOnSyntaxCommand.zs)。

## 事件类

你需要将事件投射到函数头中作为这个类: `craftminstruer.event.CommandEvent` 建议 [导入类](/AdvancedFunctions/Import/)

    导入 craftweeker.event.CommandEvent;
    

## 事件界面扩展

命令事件实现了以下接口：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

在事件中获取/设置以下信息：

| ZenGetter | ZenSetter | 类型                                              |
| --------- | --------- | ----------------------------------------------- |
| `命令发送者`   | 否         | [ICommander](/Vanilla/Commands/ICommandSender/) |
| `命令`      | 否         | [ICommand](/Vanilla/Commands/ICommand/)         |
| `参数`      | `参数`      | 字符串数组                                           |