# Пикап игрока

Событие PlayerPickupXp запускается всякий раз, когда игрок выбирает сферы опыта.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupXpEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerPickupXp События реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры       | Возвращаемый тип                          |
| ------------- | ----------------------------------------- |
| `отменено`    | boolean                                   |
| `player`      | [IPlayer](/Vanilla/Players/IPlayer/)      |
| `сущность Xp` | [IEntityXp](/Vanilla/Entities/IEntityXp/) |
| `xp`          | float                                     |

## ZenMethods

- `event.cancel()` устанавливает событие как отменено.