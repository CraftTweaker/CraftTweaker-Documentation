# IServer

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.server.IServer;`

## Rozszerzenie ICommandSender

IServer rozszerza [ICommandSender](/Vanilla/Commands/ICommandSender), więc wszystkie metody dostępne dla obiektu [ICommandSender](/Vanilla/Commands/ICommandSender) są również dostępne dla obiektu IServer.

## Dostęp do obsługi serwera

Możesz uzyskać dostęp do obsługi serwera używając `serwera` [globalnego słowa kluczowego](/Vanilla/Global_Functions/).  
Alternatywnie możesz pobrać serwer z dowolnego [ICommandSender](/Vanilla/Commands/ICommandSender/).

## Sprawdź, czy [gracz](/Vanilla/Players/IPlayer/) jest OP

Możesz użyć tego aby sprawdzić, czy [IPlayer](/Vanilla/Players/IPlayer/) ma uprawnienia OP:

```zenscript
serwer.isOP(gracz);
```

## Pobierz menedżera poleceń

Możesz użyć tego aby uzyskać [ICommandManager](/Vanilla/Commands/ICommandManager/)

```zenscript
server.commandManager;
```