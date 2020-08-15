# LivingKnockBack

Questo evento viene sparato ogni volta che un'entità viene respinta indietro. L'evento è **annullabile** e così facendo impedirà all'entità di essere respinta indietro. In alternativa, la resistenza del respingimento in aggiunta ai rapporti X e Z può essere regolata.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. ivingKnockBackEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
LivingKnockBack Eventi implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter          | ZenSetter    | Tipo                                  |
| ------------------ | ------------ | ------------------------------------- |
| `attaccante`       | `attaccante` | [IEntity](/Vanilla/Entities/IEntity/) |
| `originalAttacker` |              | [IEntity](/Vanilla/Entities/IEntity/) |
| `forza`            | `forza`      | galleggiante                          |
| `Forza originale`  |              | galleggiante                          |
| `rapportoX`        | `rapportoX`  | doppia                                |
| `ratioZ`           | `ratioZ`     | doppia                                |
| `originalRatioX`   |              | doppia                                |
| `originalRatioZ`   |              | doppia                                |

## Note

Quando arriva l'evento, è possibile che l'attaccante ``, `forza`, o i vari `ratio`s sono già stati modificati. Puoi trovare questi valori nelle variabili `originali*`.
