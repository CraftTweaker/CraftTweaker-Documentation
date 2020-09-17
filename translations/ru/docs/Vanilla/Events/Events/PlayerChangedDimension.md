# Изменить размер игрока

Событие PlayerChangedDimension запускается всякий раз, когда [игрок](/Vanilla/Players/IPlayer/) [измерение/мир](/Vanilla/World/IWorld/) изменяется, например при входе или выходе из него.

## Класс события

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerChangedDimensionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий

PlayerChandedDimension События реализуют следующие интерфейсы и также могут вызвать все методы/getters/setters:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Следующая информация может быть получена от события:

| Геттеры    | Возвращаемый тип                     |
| ---------- | ------------------------------------ |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/) |
| `от`       | int                                  |
| `из мира`  | [IWorld](/Vanilla/World/IWorld/)     |
| `до`       | int                                  |
| `весь мир` | [IWorld](/Vanilla/World/IWorld/)     |