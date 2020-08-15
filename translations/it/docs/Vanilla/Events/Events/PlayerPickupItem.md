# PlayerPickupItem

L'evento PlayerPickupItem viene sparato ogni volta che un giocatore interagisce con un'Entità.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerPickupItemEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerPickupItem Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getters/setters pure:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter   | Tipo Di Reso                                  |
| ----------- | --------------------------------------------- |
| `elemento`  | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| `giocatore` | [IPlayer](/Vanilla/Players/IPlayer/)          |