# EntityLivingAttacked

L'evento EntityLivingAttacked viene sparato ogni volta che un'entità viene attaccata.  
Può essere annullato per impedire all'entità di subire danni.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. ntityLivingAttackedEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

Gli eventi PlayerDeathDrops implementano le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| ZenGetter    | Tipo                                            |
| ------------ | ----------------------------------------------- |
| damageSource | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| importo      | galleggiante                                    |