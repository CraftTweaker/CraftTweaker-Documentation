# PlayerSleepInBed

Событие SleepInBed запускается, когда игрок спит. Это событие может контролировать, может ли игрок спать, установив `результат`.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.


## Наследование от интерфейсов событий
PlayerSleepInBed Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)


## Типы результатов
* YOU_PLAYLIST
* NOT_PLAYLIST
* Не сохранено
* ОК
* Другие ПРОБЛЕМЫ
* В ФАРЕ


## ZenGetters
Следующая информация может быть получена от события:

| ZenGetter | Возвращаемый тип                     |
| --------- | ------------------------------------ |
| `x`       | int                                  |
| `y`       | int                                  |
| `z`       | int                                  |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/) |
| `result`  | строка (возможные значения выше)     |

## ZenSetters
В ходе события можно задать следующее:

| ZenSetter | Parameter Type                   |
| --------- | -------------------------------- |
| `result`  | строка (возможные значения выше) |

