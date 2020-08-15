# BlockBreakEvent

L'evento BlockBreak viene sparato ogni volta che un blocco viene rotto.  
È possibile annullare l'evento per evitare che il blocco venga rotto.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. lockBreakEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

BlockBreak Events implementa le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getters/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter    | ZenSetter    | Tipo                                 |
| ------------ | ------------ | ------------------------------------ |
| `giocatore`  |              | [IPlayer](/Vanilla/Players/IPlayer/) |
| `isPlayer`   |              | bool                                 |
| `esperienza` | `esperienza` | int                                  |