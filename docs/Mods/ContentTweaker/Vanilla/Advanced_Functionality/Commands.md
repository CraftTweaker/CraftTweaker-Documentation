# Commands

You can use this class to send a command, you cannot use this class to create new commands!

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Commands;` 

## Calling a command
This is the only thing you can do with the Commands package.

```JAVA
call(String command, IPlayer player, IWorld world)
```
Parameters:

- String command → The command to be executed
- [IPlayer](/Vanilla/Game/IPlayer) player → The Player executing the command
- [IWorld](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Commands) world → The world the command is executed in
