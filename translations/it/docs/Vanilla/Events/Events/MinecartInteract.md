# MinecartInteract

MinecartInteractEvent viene sparato ogni volta che un giocatore inizia a interagire con un minecart. L'evento è **annullabile**e così facendo impedirà l'apertura del contenitore.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. inecartInteractEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
MinecartInteract Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getters/setters pure:

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters

| ZenGetter   | Tipo                                     |
| ----------- | ---------------------------------------- |
| `giocatore` | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `elemento`  | [IItemStack](/Vanilla/Items/IItemStack/) |
| `mano`      | Stringa                                  |
