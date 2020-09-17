# PlayerVisibility

Questo evento è sparato per determinare la visibilità di un giocatore, cioè se sono abbastanza vicini o meno per essere notato da un attaccante. Il risultato di questo evento viene utilizzato per calcolare (con modificatori da Vanilla Minecraft per il furto, etc) l'intervallo che un giocatore può arrivare a una creatura prima che quella creatura li veda.

Mentre questo può essere usato per aumentare l'intervallo di visibilità (se è stato diminuito da Minecraft o da un'altra mod), non può essere aumentato al di sopra del suo valore massimo (la distanza target standard).

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerVisibilityEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
Gli eventi PlayerVisibilityEvent implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters/ZenSetters
Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter    | ZenSetter            | Tipo       |
| ------------ | -------------------- | ---------- |
| `visibilità` |                      | doppia     |
|              | `modificaVisibilità` | Cfr. nota. |

## Nota

Questo valore non può essere impostato direttamente. Chiamare `modifyVisibility` con un doppio valore sostituirà il modificatore con il risultato di `modifiy * double value`.
