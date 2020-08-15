# ПлейерБонемель

Событие PlayerBonemeal запускается всякий раз, когда игрок использует костный блок.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerBonemealEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerBonemeal События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [Событие доступно](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры       | Возвращаемый тип                            |
| ------------- | ------------------------------------------- |
| `отменено`    | boolean                                     |
| `обработано`  | boolean                                     |
| `х`           | int                                         |
| `у`           | int                                         |
| `z`           | int                                         |
| `player`      | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `world`       | [IWorld](/Vanilla/World/IWorld/)            |
| `блок`        | [БИБлок](/Vanilla/Blocks/IBlock/)           |
| `blockState`  | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `Блокировщик` | [IBlockPos](/Vanilla/World/IBlockPos/)      |
| `измерение`   | int                                         |
| `элемент`     | [IItemStack](/Vanilla/Items/IItemStack/)    |

## ZenMethods

- `event.cancel()` устанавливает событие, как отменено
- `event.process()` устанавливает событие как обработанное