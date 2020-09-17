# IServer

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.server.IServer;`

## Estensione Di ICommandSender

IServer extends [ICommandSender](/Vanilla/Commands/ICommandSender), so all methods that are available for an [ICommandSender](/Vanilla/Commands/ICommandSender) object are also available for an IServer object.

## Accedi al gestore del server

È possibile accedere al Server Handler utilizzando la parola chiave globale `server` [](/Vanilla/Global_Functions/).  
In alternativa è possibile ottenere il server da qualsiasi [ICommandSender](/Vanilla/Commands/ICommandSender/).

## Verifica se un [giocatore](/Vanilla/Players/IPlayer/) è OP

Puoi usarlo per controllare se un [IPlayer](/Vanilla/Players/IPlayer/) ha il permesso OP:

```zenscript
server.isOP(player);
```

## Ottieni il gestore dei comandi

È possibile utilizzare questo per ottenere il [ICommandManager](/Vanilla/Commands/ICommandManager/)

```zenscript
server.commandManager;
```