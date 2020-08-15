# PlayerSleepInBed

L'evento PlayerSleepInBed è sparato ogni volta che un giocatore dorme.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerSleepInBedEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerSleepInBed Events implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter   | Tipo Di Reso                         |
| ----------- | ------------------------------------ |
| `x`         | int                                  |
| `y`         | int                                  |
| `z`         | int                                  |
| `giocatore` | [IPlayer](/Vanilla/Players/IPlayer/) |