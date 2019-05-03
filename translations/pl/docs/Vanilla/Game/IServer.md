# IServer

## Importing the package

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.server.IServer;`

## Extending ICommandSender

IServer extends [ICommandSender](/Vanilla/Commands/ICommandSender), so all methods that are available for an [ICommandSender](/Vanilla/Commands/ICommandSender) object are also available for an IServer object.

## Access the Server Handler

You can access the Server Handler using the `server` [global keyword](/Vanilla/Global_Functions/).  
Alternatively you can get the server from any [ICommandSender](/Vanilla/Commands/ICommandSender/).

## Check if a [player](/Vanilla/Players/IPlayer/) is OP

You can use this to check if an [IPlayer](/Vanilla/Players/IPlayer/) has the OP permission:

    server.isOP(player);
    

## Get the command manager

You can use this to get the [ICommandManager](/Vanilla/Commands/ICommandManager/)

    server.commandManager;