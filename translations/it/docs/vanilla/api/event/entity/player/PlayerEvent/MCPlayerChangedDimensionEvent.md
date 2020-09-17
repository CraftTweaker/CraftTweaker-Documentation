# MCPlayerChangedDimensionEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.PlayerEvent.MCPlayerChangedDimensionEvent
```

## Costruttori
```zenscript
new crafttweaker.api.event.entity.player.PlayerEvent.MCPlayerChangedDimensionEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerEvent.MCPlayerChangedDimensionEvent>);
```
| Parametro | Tipo                                                                                                                                                                            | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerEvent.MCPlayerChangedDimensionEvent](/vanilla/api/event/entity/player/PlayerEvent/MCPlayerChangedDimensionEvent)> | Nessuna descrizione fornita |



## Metodi
### getEntityPlayer

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerChangedDimensionEvent.getEntityPlayer();
```

### getPlayer

Restituisce: `Giocatore`

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerChangedDimensionEvent.getPlayer();
```

### hasRisultato

Determina se questo evento prevede un valore significativo del risultato. Nota: Gli eventi con l'annotazione HasResult avranno questo metodo automaticamente aggiunto per restituire true.

Restituisce un booleano

```zenscript
myMCPlayerChangedDimensionEvent.hasRisultato();
```

### isAnnullabile

Determina se questa funzione è annullabile. Restituisce: `Se l'accesso a setAnnullato dovrebbe essere consentito
 Nota:
 Gli eventi con l'annotazione annullabile avranno questo metodo automaticamente aggiunto per restituire true.`

Restituisce un booleano

```zenscript
myMCPlayerChangedDimensionEvent.isCancelable();
```

### isAnnullato

Determina se questo evento è stato annullato e dovrebbe interrompere l'esecuzione. Restituisce: `L'attuale stato annullato`

Restituisce un booleano

```zenscript
myMCPlayerChangedDimensionEvent.isCanceled();
```

### setAnnullato

```zenscript
myMCPlayerChangedDimensionEvent.setCanceled(cancel as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| annulla   | boolean | Nessuna descrizione fornita |



