# PlayerInteractEntity

L'evento PlayerInteractEntity viene sparato ogni volta che un giocatore interagisce con un'Entità. Può essere annullato per evitare che l'interazione abbia luogo. Se l'evento viene annullato, può essere fornito un risultato specifico del successo, del fallimento o del passaggio. Per impostazione predefinita, il risultato è passato.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerInteractEntityEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerInteractEntity Events implementa le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters & ZenSetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter                | ZenSetters               | Tipo Di Reso                          |
| ------------------------ | ------------------------ | ------------------------------------- |
| `giocatore`              |                          | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`                 |                          | [IEntity](/Vanilla/Entities/IEntity/) |
| `cancellazioneRisultato` | `cancellazioneRisultato` | string ("success" / "pass" / "fail")  |

## ZenMethods

- `event.cancel()` imposta l'evento come annullato.