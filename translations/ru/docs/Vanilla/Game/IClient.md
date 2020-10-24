# IClient

Интерфейс клиента предоставляет общую информацию о клиенте игры.  
Это работает только на клиентах, не на сервере!

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.api.IClient;`

## Где найти класс клиента?

Класс IClient является глобально зарегистрированным значением, поэтому вам не нужно ничего импортировать, вы можете просто применить `client`.

## Что с ним делать?

`client.player` returns the player running the client as an [IPlayer](/Vanilla/Players/IPlayer/) Object.  
`client.language` returns the language the client runs on as string.