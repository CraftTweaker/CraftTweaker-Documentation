# MCLeftClickBlock

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.PlayerInteractEvent.MCLeftClickBlock
```

## Costruttori
```zenscript
new crafttweaker.api.event.entity.player.PlayerInteractEvent.MCLeftClickBlock(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerInteractEvent.MCLeftClickBlock>);
```
| Parametro | Tipo                                                                                                                                                                  | Descrizione                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerInteractEvent.MCLeftClickBlock](/vanilla/api/event/entity/player/PlayerInteractEvent/MCLeftClickBlock)> | Nessuna descrizione fornita |



## Metodi
### getEntityPlayer

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLeftClickBlock.getEntityPlayer();
```

### getFace

Restituisce: `Il volto coinvolto in questa interazione. Per tutte le interazioni non-blocco, questo restituirà null.`

Restituisce [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCLeftClickBlock.getFace();
```

### getItemStack

Restituisce: `The itemstack involved in this interaction, {` @code ItemStack.EMPTY} if the hand was empty.

Restituisce [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCLeftClickBlock.getItemStack();
```

### getPlayer

Restituisce: `Giocatore`

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLeftClickBlock.getPlayer();
```

### getPos

Se l'interazione era su un'entità, sarà un BlockPos centrato sull'entità. Se l'interazione era su un blocco, sarà la posizione di quel blocco. Altrimenti, sarà un BlockPos centrato sul giocatore. Non sarà mai nullo. Restituisce: `La posizione coinvolta in questa interazione.`

Restituisce [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCLeftClickBlock.getPos();
```

### hasRisultato

Determina se questo evento prevede un valore significativo del risultato. Nota: Gli eventi con l'annotazione HasResult avranno questo metodo automaticamente aggiunto per restituire true.

Restituisce un booleano

```zenscript
myMCLeftClickBlock.hasRisultato();
```

### isAnnullabile

Determina se questa funzione è annullabile. Restituisce: `Se l'accesso a setAnnullato dovrebbe essere consentito
 Nota:
 Gli eventi con l'annotazione annullabile avranno questo metodo automaticamente aggiunto per restituire true.`

Restituisce un booleano

```zenscript
myMCLeftClickBlock.isCancelable();
```

### isAnnullato

Determina se questo evento è stato annullato e dovrebbe interrompere l'esecuzione. Restituisce: `L'attuale stato annullato`

Restituisce un booleano

```zenscript
myMCLeftClickBlock.isCanceled();
```

### setAnnullato

```zenscript
myMCLeftClickBlock.setCanceled(annullato come boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| annullato | boolean | Nessuna descrizione fornita |



