# PlayerUseHoe

The PlayerUseHoe Event is fired whenever a player uses his hoe... If you know what I mean.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerUseHoeEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerUseHoe Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## Геттеры

Следующая информация может быть получена от события:

| ZenGetter    | Возвращаемый тип                            |
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
| `dimension`  | int                                         |
| `item`       | [IItemStack](/Vanilla/Items/IItemStack/)    |

## Методы

- `event.cancel()` sets the event as cancelled
- `event.process()` sets the event as processed