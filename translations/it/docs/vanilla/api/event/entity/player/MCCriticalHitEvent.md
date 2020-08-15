# MCCriticalHitEvent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.event.entity.player.MCCriticalHitEvent
```

## Costruttori
```zenscript
new crafttweaker.api.event.entity.player.MCCriticalHitEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCCriticalHitEvent>);
```
| Parametro | Tipo                                                                                                                              | Descrizione                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCCriticalHitEvent](/vanilla/api/event/entity/player/MCCriticalHitEvent)> | Nessuna descrizione fornita |



## Metodi
### getDamageModifier

Il modificatore di danno per il colpito.<br> Questo è di default 1.5F per i colpi ciritcali e 1F per i colpi normali.

Restituisce fluttuante

```zenscript
myMCCriticalHitEvent.getDamageModifier();
```

### getEntityPlayer

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getEntityPlayer();
```

### getOldDamageModifier

Il modificatore di danno orignale per il colpo wthout qualsiasi cambiamento.<br> Questo è 1,5F per i colpi ciritcali e 1F per i colpi normali.

Restituisce fluttuante

```zenscript
myMCCriticalHitEvent.getOldDamageModifier();
```

### getPlayer

Restituisce: `Giocatore`

Restituisce [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getPlayer();
```

### hasRisultato

Determina se questo evento prevede un valore significativo del risultato. Nota: Gli eventi con l'annotazione HasResult avranno questo metodo automaticamente aggiunto per restituire true.

Restituisce un booleano

```zenscript
myMCCriticalHitEvent.hasRisultato();
```

### isAnnullabile

Determina se questa funzione è annullabile. Restituisce: `Se l'accesso a setAnnullato dovrebbe essere consentito
 Nota:
 Gli eventi con l'annotazione annullabile avranno questo metodo automaticamente aggiunto per restituire true.`

Restituisce un booleano

```zenscript
myMCCriticalHitEvent.isCancelable();
```

### isAnnullato

Determina se questo evento è stato annullato e dovrebbe interrompere l'esecuzione. Restituisce: `L'attuale stato annullato`

Restituisce un booleano

```zenscript
myMCCriticalHitEvent.isCanceled();
```

### isVanillaCritical

Restituisce vero se questo colpo è stato critico dalla vaniglia

Restituisce un booleano

```zenscript
myMCCriticalHitEvent.isVanillaCritical();
```

### setAnnullato

```zenscript
myMCCriticalHitEvent.setCanceled(cancel as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| annulla   | boolean | Nessuna descrizione fornita |


### setDamageModifier

Questo imposta il moltiplicatore di danno per il colpo. Se lo si imposta a 0, allora le particelle sono ancora generate, ma il danno non è fatto.

```zenscript
myMCCriticalHitEvent.setDamageModifier(mod as float);
```

| Parametro | Tipo         | Descrizione                 |
| --------- | ------------ | --------------------------- |
| mod       | galleggiante | Nessuna descrizione fornita |



