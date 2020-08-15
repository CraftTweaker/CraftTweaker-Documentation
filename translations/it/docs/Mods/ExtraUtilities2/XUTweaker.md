# XUTweaker

Il pacchetto XUTweaker aggiunge diversi metodi di utilità statica.

## Importazione del pacchetto

Se vuoi abbreviare le chiamate di metodo o riscontrare problemi che potrebbero essere necessari per importare il pacchetto.  
Puoi farlo usando

```zenscript
importazione extrautilities2.Tweaker.XUTweaker;
```

## Metodi

### Permetti volo di sopravvivenza

Consente il volo per tutti i giocatori, in modo permanente.

```zenscript
extrautilities2.Tweaker.XUTweaker.allowSurvivalFlight();
```

### Disabilita Portale Del Nether

Impedisce che i portali del Nether (e tutti i portali che utilizzano il PortalSpawnEvent) vengano generati, in modo permanente.

```zenscript
extrautilities2.Tweaker.XUTweaker.disableNetherlandPortals();
```

### Controlla se un giocatore è un giocatore falso

Restituisce un booleano che indica se il giocatore è un giocatore falso.

Richiede un argomento [IPlayer](/Vanilla/Players/IPlayer).

```zenscript
extrautilities2.Tweaker.XUTweaker.isPlayerFake(giocatore);
```

### Apri una schermata di libri per il giocatore

Cerca di aprire la schermata del libro scritto al giocatore dato.

Restituisce un booleano che indica se il comando è stato eseguito correttamente.  
Richiede un argomento [IPlayer](/Vanilla/Players/IPlayer) .  
Richiede anche un argomento stringa[] che sarà le pagine.

```zenscript
extrautilities2.Tweaker.XUTweaker.openBookScreen(player, pages);
extrautilities2.Tweaker.XUTweaker.openBookScreen(player, ["Page 1", "Page 2"]);
```