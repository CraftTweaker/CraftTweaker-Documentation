# PlayerAnvilUpdate

Il PlayerAnvilUpdate Event è sparato quando un giocatore posiziona gli oggetti negli slot sia a sinistra che a destra di un'incudine.
 * Se l'evento viene annullato, il comportamento della vaniglia non verrà eseguito e l'output sarà impostato su nulla.
 * Se l'evento non è annullato, ma l'output non è nullo, imposterà l'output e non eseguirà il comportamento della vaniglia.
 * se l'output è nullo, e l'evento non è annullato, il comportamento di vaniglia verrà eseguito.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerAnvilUpdateEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
PlayerAnvilUpdate Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSetters
Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter       | ZenSetter       | tipo                                     | Descrizione                                                                                                                 |
| --------------- | --------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `leftItem`      |                 | [IItemStack](/Vanilla/Items/IItemStack/) | Il lato sinistro dell'ingresso.                                                                                             |
| `rightItem`     |                 | [IItemStack](/Vanilla/Items/IItemStack/) | Il lato destro dell'ingresso.                                                                                               |
| `outputItem`    | `outputItem`    | [IItemStack](/Vanilla/Items/IItemStack/) | Impostare questa opzione per impostare la pila di output.                                                                   |
| `itemName`      |                 | stringa                                  | Il nome per impostare l'elemento, se l'utente ha specificato.                                                               |
| `xpCost`        | `xpCost`        | int                                      | Il costo di base, impostare questo per cambiarlo se output != null.                                                         |
| `materialCosto` | `materialCosto` | int                                      | Il numero di oggetti dallo slot di destra da consumare durante la riparazione. Lasciare come 0 per consumare l'intera pila. |

## ZenMethods

- `event.cancel()` imposta l'evento come annullato.
