# PlayerRightClickItem

L'evento PlayerRightClickItem è sparato poco prima che venga attivata la funzionalità di un oggetto. Non è sparato se il giocatore sta puntando su un blocco o un'entità. Può essere annullato per evitare che si verifichino altri eventi. Se l'evento viene annullato, può essere fornito un risultato specifico di autorizzazione, negazione o passaggio. Per impostazione predefinita, il risultato è passato.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerRightClickItemEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
Gli eventi PlayerRightClickItem implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)

## ZenGetters & ZenSetters
Le seguenti informazioni possono essere regolate nell'evento.

| ZenGetter                | ZenSetter                | tipo                                  |
| ------------------------ | ------------------------ | ------------------------------------- |
| `cancellazioneRisultato` | `cancellazioneRisultato` | string ("allow" / "deny" / "default") |
