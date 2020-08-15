# OggettoScadenza

L'evento OggettoScadenza viene sparato ogni volta che un Oggetto scade (raggiunge la sua vita di macope).  
Può essere annullato per evitare che l'oggetto venga contrassegnato come morto.  
Se annullato, aggiungerà `extralife` alla vita dell'oggetto.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. temExpireEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

Gli eventi PlayerDeathDrops implementano le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | ZenSetter | Tipo                                          |
| --------- | --------- | --------------------------------------------- |
| elemento  |           | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| extraLife | extraLife | int                                           |