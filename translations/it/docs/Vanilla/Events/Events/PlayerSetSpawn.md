# PlayerSetSpawn

L'evento PlayerSetSpawn viene sparato ogni volta che la posizione dello spawn di un giocatore cambia.  
Può essere annullato per impedire l'ulteriore elaborazione.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerSetSpawnEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

Gli eventi PlayerSetSpawn implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getters/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter   | Tipo Di Reso                           |
| ----------- | -------------------------------------- |
| `giocatore` | [IPlayer](/Vanilla/Players/IPlayer/)   |
| `isForced`  | bool                                   |
| `newSpawn`  | [IBlockPos](/Vanilla/World/IBlockPos/) |