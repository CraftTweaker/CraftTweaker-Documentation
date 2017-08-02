# IServer
The Server interface is for interaction with a server.

## Where to find the Server class?
The Server class is a globally registered Symbol, so you won't need to import anything, you can just use the keyword `server`

## What to do with it?

### Commands

#### Add Commands
Check the Commands entry in the AdvancedFunctions section for further information on how to add commands.
These also only work on CraftTweaker versions prior to Minecraft 1.12 due to a change of code.

```
//normal command (/name or /alias)
addCommand(String name, String usage, String[] aliases, ICommandFunction function, @Optional ICommandValidator validator, @Optional ICommandTabCompletion completion);

//minetweaker command (/mt name)
addMineTweakerCommand(String name, String[] usage, ICommandFunction function);
```

#### Check if a Command is added
`server.isCommandAdded(name)` returns if the given commans is added or not as bool. Name is a string.

### Check if a player is OP
`server.isOP(player)` returns if the given player has OP permissions or not as bool.

### Handle Login/Logout Events
Check the events entry in the AdvancedFunctions section  for further information on how to use Event handlers.
These also only work on CraftTweaker versions prior to Minecraft 1.12 due to a change of code.

```
//player logs in
server.onPlayerLoggedIn(function(player){
	doSomething();
});


//player logs out
server.onPlayerLoggedOut(function(player){
	doSomething();
});
```