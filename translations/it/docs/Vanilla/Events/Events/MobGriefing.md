# MobGriefing

Questo evento è sparato ogni volta che sta per accadere un potenziale dolore da parte della folla. Ha un **risultato** che determina se il comportamento predefinito si verifica o meno:

- **allow**: the griefing is allowed
- **deny**: il dolore è impedito
- **default**: il dolore si verifica secondo la logica della Vanilla.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. obGriefingEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
MobGriefing Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
