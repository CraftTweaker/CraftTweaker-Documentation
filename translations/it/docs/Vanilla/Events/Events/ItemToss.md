# Oggetti

L'Evento Oggetti viene sparato ogni volta che un Oggetto viene gettato dall'inventario di un giocatore.  
L'annullamento di questo evento impedirà all'elemento di entrare nel mondo, causando così la cancellazione dell'elemento.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. temTossEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

Gli eventi PlayerDeathDrops implementano le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | Tipo                                          |
| --------- | --------------------------------------------- |
| elemento  | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| giocatore | [IPlayer](/Vanilla/Players/IPlayer/)          |