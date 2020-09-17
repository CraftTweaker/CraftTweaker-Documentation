# MCAnvilRepairEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.MCAnvilRepairEvent
```

## Costruttori
```zenscript
new crafttweaker.api.event.entity.player.MCAnvilRepairEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCAnvilRepairEvent>);
```
| Parametro | Tipo                                                                                                                              | Descrizione                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCAnvilRepairEvent](/vanilla/api/event/entity/player/MCAnvilRepairEvent)> | Nessuna descrizione fornita |



## Metodi
### getBreakChance

Restituisce fluttuante

```zenscript
myMCAnvilRepairEvent.getBreakChance();
```

### getEntityPlayer

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAnvilRepairEvent.getEntityPlayer();
```

### getIngredientInput

Ottieni il secondo input nell'incudine Restituisce: `il secondo slot di input`

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getIngredientInput();
```

### getItemInput

Ottieni il primo input dell'oggetto nell'incudine Restituisce: `il primo slot di input`

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getItemInput();
```

### getItemResult

Ottieni il risultato dell'uscita dall'incudine Restituisce: `l'output`

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getItemResult();
```

### getPlayer

Restituisce: `Giocatore`

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAnvilRepairEvent.getPlayer();
```

### hasRisultato

Determina se questo evento prevede un valore significativo del risultato. Nota: Gli eventi con l'annotazione HasResult avranno questo metodo automaticamente aggiunto per restituire true.

Restituisce un booleano

```zenscript
myMCAnvilRepairEvent.hasRisultato();
```

### isAnnullabile

Determina se questa funzione è annullabile. Restituisce: `Se l'accesso a setAnnullato dovrebbe essere consentito
 Nota:
 Gli eventi con l'annotazione annullabile avranno questo metodo automaticamente aggiunto per restituire true.`

Restituisce un booleano

```zenscript
myMCAnvilRepairEvent.isCancelable();
```

### isAnnullato

Determina se questo evento è stato annullato e dovrebbe interrompere l'esecuzione. Restituisce: `L'attuale stato annullato`

Restituisce un booleano

```zenscript
myMCAnvilRepairEvent.isCanceled();
```

### setBreakChance

```zenscript
myMCAnvilRepairEvent.setBreakChance(breakChance as float);
```

| Parametro   | Tipo         | Descrizione                 |
| ----------- | ------------ | --------------------------- |
| breakChance | galleggiante | Nessuna descrizione fornita |


### setAnnullato

```zenscript
myMCAnvilRepairEvent.setCanceled(cancel as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| annulla   | boolean | Nessuna descrizione fornita |



