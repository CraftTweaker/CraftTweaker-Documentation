# MCCriticalHitEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.MCCriticalHitEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCCriticalHitEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCCriticalHitEvent>);
```
| Parametro | Tipo                                                                                                                              | Descrizione                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCCriticalHitEvent](/vanilla/api/event/entity/player/MCCriticalHitEvent)> | Nessuna descrizione fornita |



## Metodi
### getDamageModifier

The damage modifier for the hit.<br> This is by default 1.5F for ciritcal hits and 1F for normal hits .

Returns float

```zenscript
myMCCriticalHitEvent.getDamageModifier();
```

### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getEntityPlayer();
```

### getOldDamageModifier

The orignal damage modifier for the hit wthout any changes.<br> This is 1.5F for ciritcal hits and 1F for normal hits .

Returns float

```zenscript
myMCCriticalHitEvent.getOldDamageModifier();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Restituisce un booleano

```zenscript
myMCCriticalHitEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Restituisce un booleano

```zenscript
myMCCriticalHitEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Restituisce un booleano

```zenscript
myMCCriticalHitEvent.isCanceled();
```

### isVanillaCritical

Returns true if this hit was critical by vanilla

Restituisce un booleano

```zenscript
myMCCriticalHitEvent.isVanillaCritical();
```

### setCanceled

```zenscript
myMCCriticalHitEvent.setCanceled(cancel as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| cancel    | boolean | Nessuna descrizione fornita |


### setDamageModifier

This set the damage multiplier for the hit. If you set it to 0, then the particles are still generated but damage is not done.

```zenscript
myMCCriticalHitEvent.setDamageModifier(mod as float);
```

| Parametro | Tipo  | Descrizione                 |
| --------- | ----- | --------------------------- |
| mod       | float | Nessuna descrizione fornita |



