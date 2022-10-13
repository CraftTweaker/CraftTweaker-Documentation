# MCItemFishedEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.MCItemFishedEvent
```

## Constructors
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

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getPlayer();
```

### getRodDamage

Get the damage the rod will take. Returns: `The damage the rod will take`

Restituisce un intero

```zenscript
myMCItemFishedEvent.getRodDamage();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Restituisce un booleano

```zenscript
myMCItemFishedEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Restituisce un booleano

```zenscript
myMCItemFishedEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Restituisce un booleano

```zenscript
myMCItemFishedEvent.isCanceled();
```

### setCanceled

```zenscript
myMCItemFishedEvent.setCanceled(cancel as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| cancel    | boolean | Nessuna descrizione fornita |



