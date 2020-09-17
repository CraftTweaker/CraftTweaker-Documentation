# FarmlandTrampleEvent

L'evento FarmlandTrample viene sparato ogni volta che un terreno agricolo sta per essere calpestato. L'annullamento dell'evento impedirà che il blocco venga calpestato.

## Note

`event.fallDistance` contiene la distanza caduta prima di colpire il terreno agricolo.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. armlandTrampleEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
FarmlandTrample Events implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters
Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter      | ZenSetter | Tipo                                  |
| -------------- | --------- | ------------------------------------- |
| `entità`       |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `fallDistance` |           | galleggiante                          |
