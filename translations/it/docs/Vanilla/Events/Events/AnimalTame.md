# AnimalTame

Questo evento è sparato per determinare se un animale sta per essere addomesticato. Se annullato, **la domatura non riesce**. In caso contrario, serve semplicemente come una notifica della doma in corso.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. nimalTameEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
AnimalTame Events implementano le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter   | ZenSetter | Tipo                                              |
| ----------- | --------- | ------------------------------------------------- |
| `animale`   |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `animale`   |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `giocatore` |           | [IPlayer](/Vanilla/Players/IPlayer/)              |
