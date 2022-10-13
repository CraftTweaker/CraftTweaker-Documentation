# MCPlayerWakeUpEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent>);
```
| Parametro | Tipo                                                                                                                                | Descrizione                 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent](/vanilla/api/event/entity/player/MCPlayerWakeUpEvent)> | Nessuna descrizione fornita |



## Metodi
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Restituisce un booleano

```zenscript
myMCPlayerWakeUpEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Restituisce un booleano

```zenscript
myMCPlayerWakeUpEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Restituisce un booleano

```zenscript
myMCPlayerWakeUpEvent.isCanceled();
```

### setCanceled

```zenscript
myMCPlayerWakeUpEvent.setCanceled(cancel as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| cancel    | boolean | Nessuna descrizione fornita |


### shouldSetSpawn

Indicates if the player's sleep was considered successful. In vanilla, this is used to determine if the spawn chunk is to be set to the bed's position.

Restituisce un booleano

```zenscript
myMCPlayerWakeUpEvent.shouldSetSpawn();
```

### updateWorld

Indicates if the server should be notified of sleeping changes. This will only be false if the server is considered 'up to date' already, because, for example, it initiated the call.

Restituisce un booleano

```zenscript
myMCPlayerWakeUpEvent.updateWorld();
```

### wakeImmediately

Used for the 'wake up animation'. This is false if the player is considered 'sleepy' and the overlay should slowly fade away.

Restituisce un booleano

```zenscript
myMCPlayerWakeUpEvent.wakeImmediately();
```


