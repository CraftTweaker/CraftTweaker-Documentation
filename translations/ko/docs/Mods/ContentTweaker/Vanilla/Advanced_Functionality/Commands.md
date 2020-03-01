# Commands

You can use this class to send a command, you cannot use this class to create new commands! Look at [CommandEvent](/Vanilla/Events/Events/CommandEvent/) to add new commands. You can also use a [ICommandManager](/Vanilla/Commands/ICommandManager/).

## 패키지 임포트하기

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Commands;`

## Calling a command

This is the only thing you can do with the Commands package.

```zenscript
call(String command, IPlayer player, IWorld world)
call(String command, IPlayer player, IWorld world, boolean logToChat, boolean overridePermissions)
```

Parameters:

- String command → The command to be executed
- [IPlayer](/Vanilla/Players/IPlayer/) player → The Player executing the command
- [IWorld](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Commands/) world → The world the command is executed in
- boolean logToChat → Should the command output appear in the MC chat?
- boolean overridePermissions should the command be executed regardless of the required permission level?

The two booleans either both need to be added or omitted. If you call the command without them, they will be true.