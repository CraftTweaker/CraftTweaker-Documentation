# PlayerFillBucket

L'evento PlayerFillBucket viene sparato ogni volta che un giocatore riempie un secchio.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerFillBucketEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerFillBucket Events implementano le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter        | Tipo Di Reso                                       |
| ---------------- | -------------------------------------------------- |
| `annullato`      | boolean                                            |
| `giocatore`      | [IPlayer](/Vanilla/Players/IPlayer/)               |
| `risultato`      | [IItemStack](/Vanilla/Items/IItemStack/)           |
| `Secchio`        | [IItemStack](/Vanilla/Items/IItemStack/)           |
| `x`              | int                                                |
| `y`              | int                                                |
| `z`              | int                                                |
| `mondo`          | [IWorld](/Vanilla/World/IWorld/)                   |
| `blockState`     | [IBlockState](/Vanilla/Blocks/IBlockState/)        |
| `blocco`         | [IBlock](/Vanilla/Blocks/IBlock/)                  |
| `dimensione`     | int                                                |
| `rayTraceResult` | [IRayTraceResult](/Vanilla/World/IRayTraceResult/) |

## ZenMethods

- `event.cancel()` imposta l'evento come annullato.

## Impostatori

- `event.result = <minecraft:ender_pearl>` Questo elaborerà anche l'evento!