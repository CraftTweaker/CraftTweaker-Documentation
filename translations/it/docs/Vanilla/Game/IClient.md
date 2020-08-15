# IClient

L'interfaccia client è per fornire informazioni generali su un client.  
Questo è disponibile solo per i clienti, questi non funzioneranno su un severo!

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.api.IClient;`

## Dove trovare la classe client?

La classe Client è un Simbolo registrato globalmente, quindi non è necessario importare nulla, è possibile utilizzare la parola chiave `client`

## Cosa fare con esso?

`client.player` restituisce il giocatore che esegue il client come oggetto [IPlayer](/Vanilla/Players/IPlayer/) .  
`client.language` restituisce la lingua su cui il client esegue come stringa.