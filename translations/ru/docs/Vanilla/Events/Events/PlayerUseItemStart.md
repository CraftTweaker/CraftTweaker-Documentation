# PlayerUseItemStart

Событие Начало игрока запускается всякий раз, когда игрок начинает использовать предмет.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerUseItemStartEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerUseItemStart События реализуют следующие интерфейсы и также могут вызвать все методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры    | Возвращаемый тип                         |
| ---------- | ---------------------------------------- |
| `отменено` | boolean                                  |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `элемент`  | [IItemStack](/Vanilla/Items/IItemStack/) |

## ZenMethods

- `event.cancel()` устанавливает событие, как отменено