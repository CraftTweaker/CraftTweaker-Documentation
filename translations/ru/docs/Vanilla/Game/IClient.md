# IClient

Интерфейс клиента предоставляет общую информацию о клиенте игры.  
Это работает только на клиентах, не на сервере!

## Импорт пакета

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.api.IClient;`

## Где найти класс клиента?

The Client class is a globally registered Symbol, so you won't need to import anything, you can just use the keyword `client`

## Что с ним делать?

`client.player` returns the player running the client as an [IPlayer](/Vanilla/Players/IPlayer/) Object.  
`client.language` returns the language the client runs on as string.