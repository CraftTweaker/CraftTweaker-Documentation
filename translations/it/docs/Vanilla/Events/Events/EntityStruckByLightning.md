# EntityStruckByLightning

L'evento EntityStruckByLightning viene sparato ogni volta che un fulmine sta per colpire un'entità.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. ntityStruckByLightningEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

LivingEntityUseItem Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setters pure:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter | Tipo Di Reso                          |
| --------- | ------------------------------------- |
| `fulmine` | [IEntity](/Vanilla/Entities/IEntity/) |