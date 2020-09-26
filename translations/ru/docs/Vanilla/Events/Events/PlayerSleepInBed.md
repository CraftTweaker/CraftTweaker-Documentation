# SleepInBed

Событие SleepInBed запускается, когда игрок спит. Это событие может контролировать, может ли игрок спать, установив `результат`.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerSleepInBed Events реализуют следующие интерфейсы и также могут вызвать все методы/getters/setters:

* [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
* [Событие доступно](/Vanilla/Events/Events/IEventPositionable/)

## Типы результатов

* YOU_PLAYLIST 
* NOT_PLAYLIST 
* Не сохранено 
* ОК 
* Другие ПРОБЛЕМЫ 
* В ФАРЕ 

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры     | Возвращаемый тип                     |
| ----------- | ------------------------------------ |
| `х`         | int                                  |
| `у`         | int                                  |
| `z`         | int                                  |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer/) |
| `результат` | строка (возможные значения выше)     |

## ZenSetters

В ходе события можно задать следующее:

| ZenSetter   | Тип параметра                    |
| ----------- | -------------------------------- |
| `результат` | строка (возможные значения выше) |