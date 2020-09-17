# MCXpChange

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange
```

## Costruttori
```zenscript
new crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange>);
```
| Parametro | Tipo                                                                                                                                          | Descrizione                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange](/vanilla/api/event/entity/player/PlayerXpEvent/MCXpChange)> | Nessuna descrizione fornita |



## Metodi
### getAmount

Restituisce un intero

```zenscript
myMCXpChange.getAmount();
```

### getEntityPlayer

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCXpChange.getEntityPlayer();
```

### getPlayer

Restituisce: `Giocatore`

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCXpChange.getPlayer();
```

### hasRisultato

Determina se questo evento prevede un valore significativo del risultato. Nota: Gli eventi con l'annotazione HasResult avranno questo metodo automaticamente aggiunto per restituire true.

Restituisce un booleano

```zenscript
myMCXpChange.hasRisultato();
```

### isAnnullabile

Determina se questa funzione è annullabile. Restituisce: `Se l'accesso a setAnnullato dovrebbe essere consentito
 Nota:
 Gli eventi con l'annotazione annullabile avranno questo metodo automaticamente aggiunto per restituire true.`

Restituisce un booleano

```zenscript
myMCXpChange.isCancelable();
```

### isAnnullato

Determina se questo evento è stato annullato e dovrebbe interrompere l'esecuzione. Restituisce: `L'attuale stato annullato`

Restituisce un booleano

```zenscript
myMCXpChange.isCanceled();
```

### setAmount

```zenscript
myMCXpChange.setAmount(amount as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| importo   | int  | Nessuna descrizione fornita |


### setAnnullato

```zenscript
myMCXpChange.setCanceled(cancel as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| annulla   | boolean | Nessuna descrizione fornita |



