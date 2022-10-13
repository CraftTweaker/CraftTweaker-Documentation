# DirectionAxis

Represents a direction axis (X, Y, Z)

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.util.DirectionAxis
```

## Implemented Interfaces
DirectionAxis implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Методы
### getCoordinate

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Возвращает int

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| Параметр | Тип | Описание                  |
| -------- | --- | ------------------------- |
| x        | int | x value of the coordinate |
| y        | int | y value of the coordinate |
| z        | int | z value of the coordinate |



## Свойства

| Название      | Тип     | Имеет Getter | Имеет Setter |
| ------------- | ------- | ------------ | ------------ |
| commandString | String  | true         | false        |
| horizontal    | boolean | true         | false        |
| name          | String  | true         | false        |
| ordinal       | int     | true         | false        |
| vertical      | boolean | true         | false        |

