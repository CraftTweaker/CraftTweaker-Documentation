# MCXpChange

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange>);
```
| Parameter | Type                                                                                                                                          | Description                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerXpEvent.MCXpChange](/vanilla/api/event/entity/player/PlayerXpEvent/MCXpChange)> | Nessuna descrizione fornita |



## Methods
### getAmount

Restituisce un intero

```zenscript
myMCXpChange.getAmount();
```

### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCXpChange.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCXpChange.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Restituisce un booleano

```zenscript
myMCXpChange.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Restituisce un booleano

```zenscript
myMCXpChange.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Restituisce un booleano

```zenscript
myMCXpChange.isCanceled();
```

### setAmount

```zenscript
myMCXpChange.setAmount(amount as int);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| amount    | int  | Nessuna descrizione fornita |


### setCanceled

```zenscript
myMCXpChange.setCanceled(cancel as boolean);
```

| Parameter | Type    | Description                 |
| --------- | ------- | --------------------------- |
| cancel    | boolean | Nessuna descrizione fornita |



