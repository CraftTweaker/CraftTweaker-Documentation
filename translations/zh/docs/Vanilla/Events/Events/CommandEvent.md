# CommandEvent

The Command Event is fired whenever a command is executed. You can react to the command by providing a command handler. See [Crafttweaker examples](https://github.com/CraftTweaker/CraftTweaker-Examples/blob/master/crafttweaker/events/commandEvent/SendMessageOnSyntaxCommand/SendMessageOnSyntaxCommand.zs) for an example.

## Event Class

You will need to cast the event in the function header as this class: `crafttweaker.event.CommandEvent`. It is advised to [import](/AdvancedFunctions/Import/) the class

    import crafttweaker.event.CommandEvent;
    

## Event interface extensions

Command event implements the following interfaces:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

The following information ca be retrieved/set during the event:

| ZenGetter       | ZenSetter    | Type                                                |
| --------------- | ------------ | --------------------------------------------------- |
| `commandSender` | no           | [ICommandSender](/Vanilla/Commands/ICommandSender/) |
| `command`       | no           | [ICommand](/Vanilla/Commands/ICommand/)             |
| `parameters`    | `parameters` | string array                                        |