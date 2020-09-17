# PlayerPickupEntity

L'evento PlayerPickupEntity viene sparato ogni volta che un giocatore interagisce con un'Entità.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerPickupEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter   | Tipo Di Reso                          |
| ----------- | ------------------------------------- |
| `annullato` | boolean                               |
| `elaborato` | boolean                               |
| `giocatore` | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `entità`    | [IEntity](/Vanilla/Entities/IEntity/) |

## ZenMethods

- `event.cancel()` imposta l'evento come annullato.
- `event.process()` imposta l'evento come elaborato.