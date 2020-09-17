# MCArrowLooseEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.MCArrowLooseEvent
```

## Costruttori
```zenscript
new crafttweaker.api.event.entity.player.MCArrowLooseEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCArrowLooseEvent>);
```
| Parametro | Tipo                                                                                                                            | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCArrowLooseEvent](/vanilla/api/event/entity/player/MCArrowLooseEvent)> | Nessuna descrizione fornita |



## Metodi
### getBow

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCArrowLooseEvent.getBow();
```

### getCharge

Restituisce un intero

```zenscript
myMCArrowLooseEvent.getCharge();
```

### getEntityPlayer

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCArrowLooseEvent.getEntityPlayer();
```

### getPlayer

Restituisce: `Giocatore`

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCArrowLooseEvent.getPlayer();
```

### hasAmmo

Restituisce un booleano

```zenscript
myMCArrowLooseEvent.hasAmmo();
```

### hasRisultato

Determina se questo evento prevede un valore significativo del risultato. Nota: Gli eventi con l'annotazione HasResult avranno questo metodo automaticamente aggiunto per restituire true.

Restituisce un booleano

```zenscript
myMCArrowLooseEvent.hasRisultato();
```

### isAnnullabile

Determina se questa funzione è annullabile. Restituisce: `Se l'accesso a setAnnullato dovrebbe essere consentito
 Nota:
 Gli eventi con l'annotazione annullabile avranno questo metodo automaticamente aggiunto per restituire true.`

Restituisce un booleano

```zenscript
myMCArrowLooseEvent.isCancelable();
```

### isAnnullato

Determina se questo evento è stato annullato e dovrebbe interrompere l'esecuzione. Restituisce: `L'attuale stato annullato`

Restituisce un booleano

```zenscript
myMCArrowLooseEvent.isCanceled();
```

### setAnnullato

```zenscript
myMCArrowLooseEvent.setCanceled(cancel as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| annulla   | boolean | Nessuna descrizione fornita |


### setCharge

```zenscript
myMCArrowLooseEvent.setCharge(carica come int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| carica    | int  | Nessuna descrizione fornita |



