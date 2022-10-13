# IClient

The Client Interface is for providing general information on a Client.  
This is only available for clients, these won't work on a sever!

## Импорт пакета
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.api.IClient;`

## Где найти класс клиента?
Класс IClient является глобально зарегистрированным значением, поэтому вам не нужно ничего импортировать, вы можете просто применить `client`.

## Что с ним делать?
`client.player` returns the player running the client as an [IPlayer](/Vanilla/Players/IPlayer/) Object.  
`client.language` returns the language the client runs on as string.