# Взаимодействие игрока

Событие взаимодействия между игроками запускается, когда игрок взаимодействует с блоком.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerInteract Events реализуют следующие интерфейсы и могут вызвать все их методы/getters/setters:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [Событие доступно](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры                 | Возвращаемый тип                     |
| ----------------------- | ------------------------------------ |
| `отменено`              | boolean                              |
| `предмет использования` | boolean                              |
| `используя блоки`       | boolean                              |
| `х`                     | int                                  |
| `у`                     | int                                  |
| `z`                     | int                                  |
| `player`                | [IPlayer](/Vanilla/Players/IPlayer/) |
| `world`                 | [IWorld](/Vanilla/World/IWorld/)     |
| `блок`                  | [БИБлок](/Vanilla/Blocks/IBlock/)    |
| `измерение`             | int                                  |

## ZenMethods

- `event.cancel()` устанавливает событие, как отменено
- `event.useBlock()` устанавливает блок "истина"
- `event.useItem()` устанавливает значение true