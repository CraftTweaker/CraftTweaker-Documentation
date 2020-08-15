# CommandEvent

The Command Event is fired whenever a command is executed. You can react to the command by providing a command handler. See [Crafttweaker examples](https://github.com/CraftTweaker/CraftTweaker-Examples/blob/master/crafttweaker/events/commandEvent/SendMessageOnSyntaxCommand/SendMessageOnSyntaxCommand.zs) for an example.

## 事件类

You will need to cast the event in the function header as this class: `crafttweaker.event.CommandEvent`. It is advised to [import](/AdvancedFunctions/Import/) the class

    import crafttweaker.event.CommandEvent;
    

## 事件界面扩展

Command event implements the following interfaces:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

The following information ca be retrieved/set during the event:

| ZenGetter       | ZenSetter | 类型                                              |
| --------------- | --------- | ----------------------------------------------- |
| `commandSender` | no        | [ICommander](/Vanilla/Commands/ICommandSender/) |
| `command`       | no        | [ICommand](/Vanilla/Commands/ICommand/)         |
| `参数`            | `参数`      | string array                                    |