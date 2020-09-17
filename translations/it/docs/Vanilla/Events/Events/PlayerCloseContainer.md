# PlayerCloseContainer

Il PlayerCloseContainer Event viene sparato ogni volta che un giocatore chiude un contenitore.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerCloseContainerEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
PlayerCloseContainer Events implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter     | Tipo Di Reso                                 |
| ------------- | -------------------------------------------- |
| `contenitore` | [IContainer](/Vanilla/Container/IContainer/) |
