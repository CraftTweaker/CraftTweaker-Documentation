# SleepingTimeCheck

Questo evento è sparato quando si controlla se un giocatore in sonno può continuare a dormire in un momento specificato. Se ha un **risultato** che determina l'azione.

Risultato:
- **Predefinito**, fa sì che la logica Vanilla di `World::isDaytime` venga consultata.
- **Consenti**, permette al giocatore di continuare a dormire indipendentemente
- **Nega** è specificatamente ***ignorato*** in questa istanza e non fa nulla.

Così, questo evento ti permette di mantenere il giocatore che dorme, ma non ti permette di fermarli specificamente dal dormire.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. leepingTimeCheck`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
SleepingTimeCheck Eventi implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
