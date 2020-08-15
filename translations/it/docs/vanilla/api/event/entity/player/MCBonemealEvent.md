# MCBonemealEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.MCBonemealEvent
```

## Costruttori
```zenscript
new crafttweaker.api.event.entity.player.MCBonemealEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCBonemealEvent>);
```
| Parametro | Tipo                                                                                                                        | Descrizione                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCBonemealEvent](/vanilla/api/event/entity/player/MCBonemealEvent)> | Nessuna descrizione fornita |



## Metodi
### getBlock

Restituisce un [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBonemealEvent.getBlock();
```

### getEntityPlayer

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCBonemealEvent.getEntityPlayer();
```

### getPlayer

Restituisce: `Giocatore`

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCBonemealEvent.getPlayer();
```

### getPos

Restituisce [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCBonemealEvent.getPos();
```

### getStack

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCBonemealEvent.getStack();
```

### hasRisultato

Determina se questo evento prevede un valore significativo del risultato. Nota: Gli eventi con l'annotazione HasResult avranno questo metodo automaticamente aggiunto per restituire true.

Restituisce un booleano

```zenscript
myMCBonemealEvent.hasRisultato();
```

### isAnnullabile

Determina se questa funzione è annullabile. Restituisce: `Se l'accesso a setAnnullato dovrebbe essere consentito
 Nota:
 Gli eventi con l'annotazione annullabile avranno questo metodo automaticamente aggiunto per restituire true.`

Restituisce un booleano

```zenscript
myMCBonemealEvent.isCancelable();
```

### isAnnullato

Determina se questo evento è stato annullato e dovrebbe interrompere l'esecuzione. Restituisce: `L'attuale stato annullato`

Restituisce un booleano

```zenscript
myMCBonemealEvent.isCanceled();
```

### setAnnullato

```zenscript
myMCBonemealEvent.setCanceled(cancel as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| annulla   | boolean | Nessuna descrizione fornita |



