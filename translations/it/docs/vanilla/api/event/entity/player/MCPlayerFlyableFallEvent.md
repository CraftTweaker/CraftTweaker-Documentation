# MCPlayerFlyableFallEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent
```

## Costruttori
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent>);
```
| Parametro | Tipo                                                                                                                                          | Descrizione                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent](/vanilla/api/event/entity/player/MCPlayerFlyableFallEvent)> | Nessuna descrizione fornita |



## Metodi
### getDistance

Restituisce fluttuante

```zenscript
myMCPlayerFlyableFallEvent.getDistance();
```

### getEntityPlayer

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerFlyableFallEvent.getEntityPlayer();
```

### getMultiplier

Restituisce fluttuante

```zenscript
myMCPlayerFlyableFallEvent.getMultiplier();
```

### getPlayer

Restituisce: `Giocatore`

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerFlyableFallEvent.getPlayer();
```

### hasRisultato

Determina se questo evento prevede un valore significativo del risultato. Nota: Gli eventi con l'annotazione HasResult avranno questo metodo automaticamente aggiunto per restituire true.

Restituisce un booleano

```zenscript
myMCPlayerFlyableFallEvent.hasResult();
```

### isAnnullabile

Determina se questa funzione è annullabile. Restituisce: `Se l'accesso a setAnnullato dovrebbe essere consentito
 Nota:
 Gli eventi con l'annotazione annullabile avranno questo metodo automaticamente aggiunto per restituire true.`

Restituisce un booleano

```zenscript
myMCPlayerFlyableFallEvent.isCancelable();
```

### isAnnullato

Determina se questo evento è stato annullato e dovrebbe interrompere l'esecuzione. Restituisce: `L'attuale stato annullato`

Restituisce un booleano

```zenscript
myMCPlayerFlyableFallEvent.isCanceled();
```

### setAnnullato

```zenscript
myMCPlayerFlyableFallEvent.setCanceled(cancel as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| annulla   | boolean | Nessuna descrizione fornita |


### setDistanza

```zenscript
myMCPlayerFlyableFallEvent.setDistanze(distanza come float);
```

| Parametro | Tipo         | Descrizione                 |
| --------- | ------------ | --------------------------- |
| distanza  | galleggiante | Nessuna descrizione fornita |


### setMultiplier

```zenscript
myMCPlayerFlyableFallEvent.setMultiplier(moltiplicatore come float);
```

| Parametro      | Tipo         | Descrizione                 |
| -------------- | ------------ | --------------------------- |
| moltiplicatore | galleggiante | Nessuna descrizione fornita |



