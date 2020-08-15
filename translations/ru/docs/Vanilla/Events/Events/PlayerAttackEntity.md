# Атака Игрока

Событие Атака Игрока запускается каждый раз, когда игрок атакует сущность.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAttackEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerAttackEntity События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры    | Возвращаемый тип                      |
| ---------- | ------------------------------------- |
| `отменено` | boolean                               |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `сущность` | [IEntity](/Vanilla/Entities/IEntity/) |

## ZenMethods

- `event.cancel()` устанавливает событие как отменено.