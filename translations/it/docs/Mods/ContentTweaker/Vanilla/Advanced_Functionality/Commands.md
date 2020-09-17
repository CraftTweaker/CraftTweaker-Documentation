# Comandi

Puoi usare questa classe per inviare un comando, non puoi usare questa classe per creare nuovi comandi! Guarda [CommandEvent](/Vanilla/Events/Events/CommandEvent/) per aggiungere nuovi comandi. Puoi anche usare un [ICommandManager](/Vanilla/Commands/ICommandManager/).

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.Commands;`

## Chiamare un comando

Questa è l'unica cosa che puoi fare con il pacchetto Comandi.

```zenscript
call(comando String, giocatore IPlayer, mondo di IWorld)
call(comando String, giocatore IPlayer, mondo di IWorld, logToChat, overridePermessi booleani)
```

Parametri:

- Comando stringa → Il comando da eseguire
- [IPlayer](/Vanilla/Players/IPlayer/) player → Il Giocatore esegue il comando
- [mondo IWorld](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Commands/) → Il mondo in cui viene eseguito il comando
- logToChat booleana → L'output del comando dovrebbe apparire nella chat MC?
- overridePermessi booleano il comando deve essere eseguito indipendentemente dal livello di autorizzazione richiesto?

I due booleani o devono essere aggiunti o omessi. Se si chiama il comando senza di loro, sarà vero.