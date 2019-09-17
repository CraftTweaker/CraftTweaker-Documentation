# CommandEvent

The Command Event is fired whenever a command is executed.
You can react to the command by providing a command handler. See [Crafttweaker examples](https://github.com/CraftTweaker/CraftTweaker-Examples/blob/master/crafttweaker/events/commandEvent/SendMessageOnSyntaxCommand/SendMessageOnSyntaxCommand.zs) for an example.

## Event Class
You will need to cast the event in the function header as this class:
` crafttweaker.event.CommandEvent`. It is advised to [import](/AdvancedFunctions/Import/) the class
```
import crafttweaker.event.CommandEvent;
```

## Event interface extensions
Command event implements the following interfaces:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
The following information ca be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type       |
|-----------------|-----------------|------------|
| `commandSender` | no              | [ICommandSender](/Vanilla/Commands/ICommandSender/) |
| `command`       | no              | [ICommand](/Vanilla/Commands/ICommand/) |
| `parameters`    | `parameters`    | string array |

## Adding Custom Commands
Since this is an event handler, it ***cannot*** add commands that do not already exists. When a player enters a non-existing command, the chat will return `unknown command` and the event won't be fired. This means you cannot react to those commands.
 
As a workaround, you can use the `/me` command which has no restriction. `event.parameters` will contain the space-separated argument provided, and you can use a root command such as `pack` for your custom modpack.

### Example
```zenscript
import crafttweaker.command.ICommand;
import crafttweaker.events.IEventManager;
import crafttweaker.event.CommandEvent;
import crafttweaker.item.IItemStack;
import crafttweaker.player.IPlayer;

events.onCommand(function(event as CommandEvent) {
  val cmd = event.command;
  val params = event.parameters;
  //Do not react on invalid or empty commands
  if (isNull(cmd) || cmd.name != "me" || params.length == 0) {
    return;
  }
  if (params[0] == "pack" && event.commandSender instanceof IPlayer) {
    val player as IPlayer = event.commandSender;
    if (params.length < 2 || params[1] == "help") {
      player.sendChat("Custom command for the pack. Usage:\n- /me pack diamond\n  gives a diamond");
    }
    if (params.length > 1 && params[1] == "diamond") {
      player.give(<minecraft:diamond>); //gives a diamond
      event.cancel(); //cancel the command since we handled it
    }
  }
});

```
