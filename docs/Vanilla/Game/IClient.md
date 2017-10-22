# IClient

The Client Interface is for providing general information on a Client.  
This is only available for clients, these won't work on a sever!

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.api.IClient;`

## Where to find the client class?
The Client class is a globally registered Symbol, so you won't need to import anything, you can just use the keyword `client`

## What to do with it?
`client.player` returns the player running the client as an [IPlayer](/Vanilla/Game/IPlayer) Object.  
`client.language` returns the language the client runs on as string.