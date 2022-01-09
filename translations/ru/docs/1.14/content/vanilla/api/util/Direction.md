# Direction

Represents a cardinal direction (north, south, east, west) and (up and down).

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.util.Direction
```

## Методы
### rotateAround

Rotates this direction around a given Axis

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(axis as crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| Параметр | Тип                                                                    | Описание                  |
| -------- | ---------------------------------------------------------------------- | ------------------------- |
| axis     | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | the Axis to rotate around |


### rotateY

Rotates this direction on the Y axis

 Returns: `the direction that rotated on the Y axis of this direction`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotateYCCW

Rotates this direction counter-clock wise on the Y axis

 Returns: `the direction that is counter clockwise on the Y axis`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## Свойства

| Название        | Тип                                                                    | Имеет Getter | Имеет Setter |
| --------------- | ---------------------------------------------------------------------- | ------------ | ------------ |
| axis            | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | true         | false        |
| axisOffset      | int                                                                    | true         | false        |
| horizontalAngle | float                                                                  | true         | false        |
| horizontalIndex | int                                                                    | true         | false        |
| index           | int                                                                    | true         | false        |
| name            | String                                                                 | true         | false        |
| opposite        | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true         | false        |
| xOffset         | int                                                                    | true         | false        |
| yOffset         | int                                                                    | true         | false        |
| zOffset         | int                                                                    | true         | false        |

