# MCPlayerWakeUpEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent
```

## Costruttori
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent>);
```
| Parametro | Tipo                                                                                                                                | Descrizione                 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent](/vanilla/api/event/entity/player/MCPlayerWakeUpEvent)> | Nessuna descrizione fornita |



## Metodi
### getEntityPlayer

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getEntityPlayer();
```

### getPlayer

Restituisce: `Giocatore`

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getPlayer();
```

### hasRisultato

Determina se questo evento prevede un valore significativo del risultato. Nota: Gli eventi con l'annotazione HasResult avranno questo metodo automaticamente aggiunto per restituire true.

Restituisce un booleano

```zenscript
myMCPlayerWakeUpEvent.hasRisultato();
```

### isAnnullabile

Determina se questa funzione è annullabile. Restituisce: `Se l'accesso a setAnnullato dovrebbe essere consentito
 Nota:
 Gli eventi con l'annotazione annullabile avranno questo metodo automaticamente aggiunto per restituire true.`

Restituisce un booleano

```zenscript
myMCPlayerWakeUpEvent.isCancelable();
```

### isAnnullato

Determina se questo evento è stato annullato e dovrebbe interrompere l'esecuzione. Restituisce: `L'attuale stato annullato`

Restituisce un booleano

```zenscript
myMCPlayerWakeUpEvent.isCanceled();
```

### setAnnullato

```zenscript
myMCPlayerWakeUpEvent.setAnnullato (cancella come boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| annulla   | boolean | Nessuna descrizione fornita |


### shouldSetSpawn

Indica se il sonno del giocatore è stato considerato riuscito. In vaniglia, questo viene utilizzato per determinare se il pezzo di spawn deve essere impostato alla posizione del letto.

Restituisce un booleano

```zenscript
myMCPlayerWakeUpEvent.shouldSetSpawn();
```

### updateWorld

Indica se il server deve essere informato dei cambiamenti di sospensione. Questo sarà falso solo se il server è già considerato 'aggiornato', perché, per esempio, ha avviato la chiamata.

Restituisce un booleano

```zenscript
myMCPlayerWakeUpEvent.updateWorld();
```

### wakeImmediatamente

Usato per l''animazione di risveglio'. Questo è falso se il giocatore è considerato 'sonno' e la sovrapposizione dovrebbe lentamente svanire.

Restituisce un booleano

```zenscript
myMCPlayerWakeUpEvent.wakeImmediatamente();
```


