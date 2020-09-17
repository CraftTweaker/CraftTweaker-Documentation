# LivingExperienceDrop

Questo evento è sparato quando un'entità muore e scende esperienza, consentendo la quantità di esperienza da modificare. In alternativa, l'evento può essere **annullato** per evitare che l'esperienza venga abbandonata.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. ivingExperienceDropEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
LivingExperienceDrop Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters/ZenSetters
Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter            | ZenSetter           | Tipo                                 |
| -------------------- | ------------------- | ------------------------------------ |
| `giocatore`          |                     | [IPlayer](/Vanilla/Players/IPlayer/) |
| `droppedExperience`  | `droppedExperience` | int                                  |
| `originalExperience` |                     | int                                  |

## Note

`originalExperience` contiene la quantità di esperienza Vanilla originale. È possibile che `droppedExperience` quando questo evento è sparato sia già stato modificato.
