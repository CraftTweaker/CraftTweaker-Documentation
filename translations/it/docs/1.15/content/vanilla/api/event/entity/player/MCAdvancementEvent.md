# MCAdvancementEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.MCAdvancementEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCAdvancementEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCAdvancementEvent>);
```
| Parametro | Tipo                                                                                                                              | Descrizione                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCAdvancementEvent](/vanilla/api/event/entity/player/MCAdvancementEvent)> | Nessuna descrizione fornita |



## Metodi
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAdvancementEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAdvancementEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Restituisce un booleano

```zenscript
myMCAdvancementEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Restituisce un booleano

```zenscript
myMCAdvancementEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Restituisce un booleano

```zenscript
myMCAdvancementEvent.isCanceled();
```

### setCanceled

```zenscript
myMCAdvancementEvent.setCanceled(cancel as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| cancel    | boolean | Nessuna descrizione fornita |



