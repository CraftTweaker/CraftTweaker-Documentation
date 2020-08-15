# SleepingLocationCheck

Questo evento è sparato quando si controlla se un giocatore in sonno può continuare a dormire nella posizione corrente. Se ha un **risultato** che determina l'azione.

Risultato:
- **Predefinito**, restituisce la risposta Vanilla predefinita come trovata nell'entità dei tile del letto
- **Consenti**, permette al giocatore di continuare a dormire indipendentemente
- **Nega** è specificatamente ***ignorato*** in questa istanza e non fa nulla.

Così, questo evento ti permette di mantenere il giocatore in sospeso, ma non ti permette di aggirare la logica del letto predefinita.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. leepingLocationCheck`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
SleepingLocationCheck Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
