# Подарки игрока

Событие "Пикапсущность" запускается каждый раз, когда игрок взаимодействует с сущностью.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры      | Возвращаемый тип                      |
| ------------ | ------------------------------------- |
| `отменено`   | boolean                               |
| `обработано` | boolean                               |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `сущность`   | [IEntity](/Vanilla/Entities/IEntity/) |

## ZenMethods

- `event.cancel()` устанавливает событие как отменено.
- `event.process()` устанавливает событие как обработанное.