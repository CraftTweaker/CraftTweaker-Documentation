# PlayerUseItemTick

Событие PlayerUseItemTick запускается каждый тик игрок постоянно использует предмет.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerUseItemTick`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerUseItemTick Events реализуют следующие интерфейсы и также могут вызвать все методы/getters/setter:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры        | Возвращаемый тип                         |
| -------------- | ---------------------------------------- |
| `отменено`     | boolean                                  |
| `player`       | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `элемент`      | [IItemStack](/Vanilla/Items/IItemStack/) |
| `длительность` | int                                      |

## ZenMethods

- `event.cancel()` устанавливает событие, как отменено