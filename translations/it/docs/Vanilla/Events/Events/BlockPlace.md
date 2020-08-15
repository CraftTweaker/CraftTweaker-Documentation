
# BlockPlaceEvent

L'evento BlockBreak viene sparato ogni volta che viene posizionato un blocco. Puoi annullare l'evento per evitare che il blocco venga piazzato.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. lockPlaceEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
BlockPlace Events implementa le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getters/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter       | ZenSetter | Tipo                                        |
| --------------- | --------- | ------------------------------------------- |
| `giocatore`     |           | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `corrente`      |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `placedAgainst` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `mano`          |           | Stringa                                     |
