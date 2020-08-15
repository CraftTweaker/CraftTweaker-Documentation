# PlayerLoggedOut

L'evento PlayerLoggedOut viene sparato ogni volta che un giocatore si disconnette.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerLoggedOutEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerLoggedIn Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getters/setters pure:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter   | Tipo Di Reso                         |
| ----------- | ------------------------------------ |
| `giocatore` | [IPlayer](/Vanilla/Players/IPlayer/) |