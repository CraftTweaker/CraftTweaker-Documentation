# IServer

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.server.IServer;`

## Access the Server Handler
You can access the Brewing Handler using the `server` [global keyword](/Vanilla/Global_Functions).

## Check if a [player](/Vanilla/Game/IPlayer) is OP
You can use this to check if an [IPlayer](/Vanilla/Game/IPlayer) has the OP permission:

```
server.isOP(player);
```

## Events (NYI)

For the sake of a complete wiki, here are two accessible methods for player login/logout handling. They don't work however!

- IEventHandle onPlayerLoggedIn(IEventHandler<PlayerLoggedInEvent> ev);
- IEventHandle onPlayerLoggedOut(IEventHandler<PlayerLoggedOutEvent> ev);