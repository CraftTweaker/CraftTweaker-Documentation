# PlayerChangedDimension

The PlayerChangedDimension Event is fired whenever a [player's](/Vanilla/Players/IPlayer/) [dimension/world](/Vanilla/World/IWorld/) changes, for example upon entering/leaving the nether.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerChangedDimensionEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerChandedDimension Events implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter   | Tipo Di Reso                         |
| ----------- | ------------------------------------ |
| `giocatore` | [IPlayer](/Vanilla/Players/IPlayer/) |
| `da`        | int                                  |
| `daWorld`   | [IWorld](/Vanilla/World/IWorld/)     |
| `a`         | int                                  |
| `toWorld`   | [IWorld](/Vanilla/World/IWorld/)     |