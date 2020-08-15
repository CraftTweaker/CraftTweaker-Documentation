# EsplosionStart

L'Evento EsplosionStart viene lanciato poco prima che inizi un'esplosione. Se annullata, l'esplosione non accadrà.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. xplosionStartEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
ExplosionStart Events implementare le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getters/setter:

- [IExplosionEvent](/Vanilla/Events/Events/IExplosionEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
