# PlayerInteractBlock

L'evento PlayerInteractBlock viene sparato ogni volta che un giocatore fa clic destro su un blocco.  
Può essere annullato per impedire che si verifichino altri eventi. Se l'evento viene annullato, può essere fornito un risultato specifico del successo, del fallimento o del passaggio. Per impostazione predefinita, il risultato è passato.

## Event Class

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerInteractBlockEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Event interface extensions

PlayerInteractBlock Events implementa le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getters/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

The following information can be retrieved from the event:

| zengetter                | zensetter                | type                                   |
| ------------------------ | ------------------------ | -------------------------------------- |
| `hitvector`              |                          | [IVector3d](/Vanilla/World/IVector3d/) |
| `useblock`               | `useblock`               | string ("allow" / "deny" / "default")  |
| `useitem`                | `useitem`                | string ("allow" / "deny" / "default")  |
| `cancellazioneRisultato` | `cancellazioneRisultato` | string ("success" / "pass" / "fail")   |

## ZenMethods

- `event.cancel()` sets the event as cancelled.