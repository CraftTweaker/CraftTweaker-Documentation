# PlayerLeftClickBlock

L'evento PlayerLeftClickBlock viene sparato ogni volta che un giocatore fa clic su un blocco.  
Può essere annullato per impedire che si verifichino altri eventi. Se il giocatore tiene premuto il tasto sinistro, l'evento sparerà di nuovo anche se è stato annullato. Annullare questo evento impedirà che il clic sinistro venga registrato, impedendo la rottura del blocco (anche se non in modalità creativa). Se l'evento viene annullato, può essere fornito un risultato specifico del successo, del fallimento o del passaggio. Per impostazione predefinita, il risultato è passato.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerLeftClickBlockEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
PlayerLeftClickBlock Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getters/setters pure:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters & ZenSetters
Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter                | ZenSetter                | tipo                                   |
| ------------------------ | ------------------------ | -------------------------------------- |
| `hitvector`              |                          | [ivector3d](/vanilla/world/ivector3d/) |
| `useblock`               | `useblock`               | string ("allow" / "deny" / "default")  |
| `useitem`                | `useitem`                | string ("allow" / "deny" / "default")  |
| `cancellazioneRisultato` | `cancellazioneRisultato` | string ("success" / "pass" / "fail")   |

## ZenMethods

- `event.cancel()` imposta l'evento come annullato.
