# Направление

Представляет собой кардинальное направление (север, юг, восток, запад) и (вверх и вниз).

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.util.direction
```

## Методы
### поворачивание

Поворачивает это направление вокруг заданного осей

Возвращает [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(ось как crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| Параметр | Тип                                                                  | Описание                |
| -------- | -------------------------------------------------------------------- | ----------------------- |
| ось      | [crafttweaker.api.util.DirectionAx](/vanilla/api/util/DirectionAxis) | оси для поворота вокруг |


### rotateY

Поворачивает это направление по оси Y

 Возвращается: `направление, повернутое по оси Y в этом направлении`

Возвращает [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### вращение YCCW

Поворачивает это направление против часов по оси Y

 Возвращается: `направление, противоположное часовой стрелке по оси Y`

Возвращает [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## Свойства

| Название              | Тип                                                                  | Имеет Getter | Имеет Setter |
| --------------------- | -------------------------------------------------------------------- | ------------ | ------------ |
| ось                   | [crafttweaker.api.util.DirectionAx](/vanilla/api/util/DirectionAxis) | true         | false        |
| axisOffset            | int                                                                  | true         | false        |
| горизонтальный угол   | float                                                                | true         | false        |
| горизонтальный индекс | int                                                                  | true         | false        |
| index                 | int                                                                  | true         | false        |
| имя                   | String                                                               | true         | false        |
| opposite              | [crafttweaker.api.util.direction](/vanilla/api/util/Direction)       | true         | false        |
| xOffset               | int                                                                  | true         | false        |
| yOffset               | int                                                                  | true         | false        |
| zOffset               | int                                                                  | true         | false        |

