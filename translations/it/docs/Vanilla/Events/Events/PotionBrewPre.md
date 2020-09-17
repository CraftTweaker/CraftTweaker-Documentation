# PotionBrewPre

Questo evento viene sparato direttamente prima che abbia luogo la produzione di vaniglia e, se **cancellato**, impedirà la produzione di birra. Se cancellato ma gli oggetti vengono modificati, allora il [PotionBrewPostEvent](/Vanilla/Events/Events/PotionBrewPost/) verrà automaticamente licenziato. Ciò consente un simulacro di birra "modded".

**Nota**: questo evento è sparato proprio come i calcoli per la ricetta stanno avvenendo, quando il "timer" raggiunge il "massimo progresso".

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. otionBrewPreEvent` È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
PotionBrewPre Events implementa le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
