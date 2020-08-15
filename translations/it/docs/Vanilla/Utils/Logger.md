# Logger

Se la funzione di stampa non è sufficiente per te, puoi usare l'oggetto logger per registrare i comandi, gli avvisi di informazioni e altro ancora.

## Accesso al gestore di registrazione

È possibile accedere al gestore di formattazione utilizzando la parola chiave globale `logger` [](/Vanilla/Global_Functions/).

## Registrazione

- logCommand(String message);
- logInfo(messaggio stringa);
- logWarning(messaggio stringa);
- logError(messaggio stringa);

## Metodi accessibili, ma inutili

- logError(messaggio stringa, eccezione lanciabile);
- logPlayer([IPlayer](/Vanilla/Players/IPlayer/) player);

Non puoi usare i gettabili di Java, quindi il primo metodo è inutile.  
Il secondo metodo non fa assolutamente nulla. Letteralmente, l'attuazione è vuota!