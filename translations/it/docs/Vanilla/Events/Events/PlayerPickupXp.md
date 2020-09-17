# PlayerPickupXp

L'evento PlayerPickupXp viene sparato ogni volta che un giocatore raccoglie orbite di esperienza.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerPickupXpEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerPickupXp Events implementa le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter   | Tipo Di Reso                              |
| ----------- | ----------------------------------------- |
| `annullato` | boolean                                   |
| `giocatore` | [IPlayer](/Vanilla/Players/IPlayer/)      |
| `entityXp`  | [IEntityXp](/Vanilla/Entities/IEntityXp/) |
| `xp`        | galleggiante                              |

## ZenMethods

- `event.cancel()` imposta l'evento come annullato.