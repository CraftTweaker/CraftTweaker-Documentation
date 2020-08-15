# PlayerDestroyItem

L'evento PlayerDestroyItem viene sparato ogni volta che un giocatore distrugge un oggetto.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerDestroyItemEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerDestroyItem Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter      | Tipo Di Reso                             |
| -------------- | ---------------------------------------- |
| `giocatore`    | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `originalItem` | [IItemStack](/Vanilla/Items/IItemStack/) |
| `mano`         | stringa                                  |