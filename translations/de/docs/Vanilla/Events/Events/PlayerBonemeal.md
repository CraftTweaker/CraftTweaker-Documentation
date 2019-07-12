# PlayerBonemeal

The PlayerBonemeal Event is fired whenever a player uses bonemeal on a block.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerBonemealEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

PlayerBonemeal Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter    | Rückgabetyp                                 |
| ------------ | ------------------------------------------- |
| `canceled`   | boolean                                     |
| `processed`  | boolean                                     |
| `x`          | int                                         |
| `y`          | int                                         |
| `z`          | int                                         |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `world`      | [IWorld](/Vanilla/World/IWorld/)            |
| `block`      | [IBlock](/Vanilla/Blocks/IBlock/)           |
| `blockState` | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `blockPos`   | [IBlockPos](/Vanilla/World/IBlockPos/)      |
| `dimension`  | int                                         |
| `item`       | [IItemStack](/Vanilla/Items/IItemStack/)    |

## ZenMethods

- `event.cancel()` sets the event as cancelled
- `event.process()` sets the event as processed