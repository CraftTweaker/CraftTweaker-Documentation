# PlayerInteract

L'evento PlayerInteract viene sparato ogni volta che un giocatore interagisce con un blocco.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerInteractEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerInteract Events implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getters/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter    | Tipo Di Reso                         |
| ------------ | ------------------------------------ |
| `annullato`  | boolean                              |
| `usingItem`  | boolean                              |
| `usingBlock` | boolean                              |
| `x`          | int                                  |
| `y`          | int                                  |
| `z`          | int                                  |
| `giocatore`  | [IPlayer](/Vanilla/Players/IPlayer/) |
| `mondo`      | [IWorld](/Vanilla/World/IWorld/)     |
| `blocco`     | [IBlock](/Vanilla/Blocks/IBlock/)    |
| `dimensione` | int                                  |

## ZenMethods

- `event.cancel()` imposta l'evento come annullato
- `event.useBlock()` imposta Block a true
- `event.useItem()` imposta l'articolo a true