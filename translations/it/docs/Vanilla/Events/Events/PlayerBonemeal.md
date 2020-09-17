# PlayerBonemeal

L'evento PlayerBonemeal viene sparato ogni volta che un giocatore usa bonemeal su un blocco.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerBonemealEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerBonemeal Events implementa le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter    | Tipo Di Reso                                |
| ------------ | ------------------------------------------- |
| `annullato`  | boolean                                     |
| `elaborato`  | boolean                                     |
| `x`          | int                                         |
| `y`          | int                                         |
| `z`          | int                                         |
| `giocatore`  | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `mondo`      | [IWorld](/Vanilla/World/IWorld/)            |
| `blocco`     | [IBlock](/Vanilla/Blocks/IBlock/)           |
| `blockState` | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `blockPos`   | [IBlockPos](/Vanilla/World/IBlockPos/)      |
| `dimensione` | int                                         |
| `elemento`   | [IItemStack](/Vanilla/Items/IItemStack/)    |

## ZenMethods

- `event.cancel()` imposta l'evento come annullato
- `event.process()` imposta l'evento come elaborato