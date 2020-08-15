# MCFillBucketEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.MCFillBucketEvent
```

## Costruttori
```zenscript
new crafttweaker.api.event.entity.player.MCFillBucketEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCFillBucketEvent>);
```
| Parametro | Tipo                                                                                                                            | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCFillBucketEvent](/vanilla/api/event/entity/player/MCFillBucketEvent)> | Nessuna descrizione fornita |



## Metodi
### getEmptyBucket

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCFillBucketEvent.getEmptyBucket();
```

### getEntityPlayer

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCFillBucketEvent.getEntityPlayer();
```

### getFilledBucket

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCFillBucketEvent.getFilledBucket();
```

### getPlayer

Restituisce: `Giocatore`

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCFillBucketEvent.getPlayer();
```

### hasRisultato

Determina se questo evento prevede un valore significativo del risultato. Nota: Gli eventi con l'annotazione HasResult avranno questo metodo automaticamente aggiunto per restituire true.

Restituisce un booleano

```zenscript
myMCFillBucketEvent.hasRisultato();
```

### isAnnullabile

Determina se questa funzione è annullabile. Restituisce: `Se l'accesso a setAnnullato dovrebbe essere consentito
 Nota:
 Gli eventi con l'annotazione annullabile avranno questo metodo automaticamente aggiunto per restituire true.`

Restituisce un booleano

```zenscript
myMCFillBucketEvent.isCancelable();
```

### isAnnullato

Determina se questo evento è stato annullato e dovrebbe interrompere l'esecuzione. Restituisce: `L'attuale stato annullato`

Restituisce un booleano

```zenscript
myMCFillBucketEvent.isCanceled();
```

### setAnnullato

```zenscript
myMCFillBucketEvent.setCanceled(cancel as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| annulla   | boolean | Nessuna descrizione fornita |


### setFilledBucket

```zenscript
myMCFillBucketEvent.setFilledBucket(arg0 come crafttweaker.api.item.IItemStack);
```

| Parametro | Tipo                                                              | Descrizione                 |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| arg0      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |



