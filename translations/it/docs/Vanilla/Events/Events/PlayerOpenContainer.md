# PlayerOpenContainer

Il PlayerOpenContainer Event viene sparato ogni volta che un giocatore apre un contenitore.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerOpenContainerEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerOpenContainer Events implementare le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter     | Tipo Di Reso                                 |
| ------------- | -------------------------------------------- |
| `annullato`   | boolean                                      |
| `giocatore`   | [IPlayer](/Vanilla/Players/IPlayer/)         |
| `contenitore` | [IContainer](/Vanilla/Container/IContainer/) |

## ZenMethods

- `event.cancel()` imposta l'evento come annullato.