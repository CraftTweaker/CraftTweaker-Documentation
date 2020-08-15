# Плеер UseHoe

Событие PlayerUseHoe запускается всякий раз, когда игрок использует своего куда... Если вы знаете, что я имею в виду.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerUseHoeEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerUseHoe Events реализуют следующие интерфейсы и также могут вызвать все методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [Событие доступно](/Vanilla/Events/Events/IEventPositionable/)

## Геттеры

Следующая информация может быть получена от события:

| ZenGetter    | Возвращаемый тип                            |
| ------------ | ------------------------------------------- |
| `отменено`   | boolean                                     |
| `обработано` | boolean                                     |
| `х`          | int                                         |
| `у`          | int                                         |
| `z`          | int                                         |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `world`      | [IWorld](/Vanilla/World/IWorld/)            |
| `блок`       | [БИБлок](/Vanilla/Blocks/IBlock/)           |
| `blockState` | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `измерение`  | int                                         |
| `элемент`    | [IItemStack](/Vanilla/Items/IItemStack/)    |

## Методы

- `event.cancel()` устанавливает событие, как отменено
- `event.process()` устанавливает событие как обработанное