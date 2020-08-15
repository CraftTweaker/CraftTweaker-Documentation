# MCItemFishedEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.MCItemFishedEvent
```

## Costruttori
```zenscript
new crafttweaker.api.event.entity.player.MCItemFishedEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCItemFishedEvent>);
```
| Parametro | Tipo                                                                                                                            | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCItemFishedEvent](/vanilla/api/event/entity/player/MCItemFishedEvent)> | Nessuna descrizione fornita |



## Metodi
### damageRodBy

```zenscript
myMCItemFishedEvent.damageRodBy(arg0 as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| arg0      | int  | Nessuna descrizione fornita |


### getEntityPlayer

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getEntityPlayer();
```

### getPlayer

Restituisce: `Giocatore`

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getPlayer();
```

### getRodDamage

Prendi il danno che la canna subirà. Restituisce: `Il danno che l'asta subirà`

Restituisce un intero

```zenscript
myMCItemFishedEvent.getRodDamage();
```

### hasRisultato

Determina se questo evento prevede un valore significativo del risultato. Nota: Gli eventi con l'annotazione HasResult avranno questo metodo automaticamente aggiunto per restituire true.

Restituisce un booleano

```zenscript
myMCItemFishedEvent.hasResult();
```

### isAnnullabile

Determina se questa funzione è annullabile. Restituisce: `Se l'accesso a setAnnullato dovrebbe essere consentito
 Nota:
 Gli eventi con l'annotazione annullabile avranno questo metodo automaticamente aggiunto per restituire true.`

Restituisce un booleano

```zenscript
myMCItemFishedEvent.isCancelable();
```

### isAnnullato

Determina se questo evento è stato annullato e dovrebbe interrompere l'esecuzione. Restituisce: `L'attuale stato annullato`

Restituisce un booleano

```zenscript
myMCItemFishedEvent.isCanceled();
```

### setAnnullato

```zenscript
myMCItemFishedEvent.setAnnullato (cancella come boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| annulla   | boolean | Nessuna descrizione fornita |



