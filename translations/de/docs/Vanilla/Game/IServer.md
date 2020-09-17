# IServer

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.server.IServer;`

## ICommandSender erweitern

IServer erweitert [ICommandSender](/Vanilla/Commands/ICommandSender), so dass alle Methoden, die für ein [ICommandSender](/Vanilla/Commands/ICommandSender) Objekt verfügbar sind, auch für ein IServer Objekt verfügbar sind.

## Zugriff auf den Server-Handler

Sie können auf den Server-Handler mit dem `-Server` [globalen Schlüsselwort](/Vanilla/Global_Functions/)zugreifen.  
Alternativ können Sie den Server von jedem [ICommandSender](/Vanilla/Commands/ICommandSender/) herunterladen.

## Prüft, ob ein [Spieler](/Vanilla/Players/IPlayer/) OP ist

Sie können dies verwenden, um zu überprüfen, ob ein [IPlayer](/Vanilla/Players/IPlayer/) die OP Berechtigung hat:

```zenscript
server.isOP(Spieler);
```

## Den Befehlsmanager abrufen

Sie können dies verwenden, um den [ICommandManager](/Vanilla/Commands/ICommandManager/) zu erhalten

```zenscript
server.commandManager;
```