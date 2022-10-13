# BlockPos

Represents a position of a block in the world

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.util.BlockPos
```

## Constructors
```zenscript
new crafttweaker.api.util.BlockPos(x as int, y as int, z as int);
```
| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| x        | int | Описание отсутствует |
| y        | int | Описание отсутствует |
| z        | int | Описание отсутствует |



## Методы
### add

Adds two positions together and returns the result.

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).add(new BlockPos(3, 2, 1));
```

| Параметр | Тип                                                          | Описание              |
| -------- | ------------------------------------------------------------ | --------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to add |



Adds the given values to this position, and returns a new position with the new values.

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(x as double, y as double, z as double);
new BlockPos(0, 1, 2).add(50.21, -20.8, -25.2);
```

| Параметр | Тип    | Описание       |
| -------- | ------ | -------------- |
| x        | double | x value to add |
| y        | double | y value to add |
| z        | double | z value to add |


### crossProduct

Creates a new BlockPos based on the cross product of this position, and the given position

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).crossProduct(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).crossProduct(new BlockPos(5, 8, 2););
```

| Параметр | Тип                                                          | Описание                  |
| -------- | ------------------------------------------------------------ | ------------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos to cross product |


### distanceSq

Gets the squared distance of this position to the specified BlockPos, using the center of the BlockPos

Returns double

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10););
```

| Параметр | Тип                                                          | Описание                  |
| -------- | ------------------------------------------------------------ | ------------------------- |
| to       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check against |



Gets the squared distance of this position to the specified BlockPos

Returns double

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10);, true);
```

| Параметр  | Тип                                                          | Описание                                                              |
| --------- | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| to        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check against                                             |
| useCenter | boolean                                                      | should the center of the coordinate be used? (adds 0.5 to each value) |



Gets the squared distance of this position to the specified coordinates

Returns double

```zenscript
new BlockPos(0, 1, 2).distanceSq(x as double, y as double, z as double, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(500.25, 250.75, 100.20, false);
```

| Параметр  | Тип     | Описание                                                              |
| --------- | ------- | --------------------------------------------------------------------- |
| x         | double  | x position to check against                                           |
| y         | double  | y position to check against                                           |
| z         | double  | z position to check against                                           |
| useCenter | boolean | should the center of the coordinate be used? (adds 0.5 to each value) |


### down

Creates a new BlockPos based on this BlockPos that is one block lower than this BlockPos

 Returns: `a new BlockPos that is one block lower than this BlockPos`

Returns net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).down();
```

### east

Creates a new BlockPos based on this BlockPos that is one block east of this BlockPos

 Returns: `a new BlockPos that is one block east of this BlockPos`

Returns net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east();
```


Creates a new BlockPos based on this BlockPos that is n block(s) east of this BlockPos

 Returns: `a new BlockPos that is n block(s) east of this BlockPos`

Returns net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east(n as int);
new BlockPos(0, 1, 2).east(2);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| n        | int | Описание отсутствует |


### manhattanDistance

Gets the Manhattan Distance of this pos compared to a different position

Возвращает int

```zenscript
new BlockPos(0, 1, 2).manhattanDistance(other as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).manhattanDistance(new BlockPos(4, 5, 6));
```

| Параметр | Тип                                                          | Описание                              |
| -------- | ------------------------------------------------------------ | ------------------------------------- |
| other    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to get the distance to |


### north

Creates a new BlockPos based on this BlockPos that is one block north of this BlockPos

 Returns: `a new BlockPos that is one block north of this BlockPos`

Returns net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north();
```


Creates a new BlockPos based on this BlockPos that is n block(s) north of this BlockPos

 Returns: `a new BlockPos that is n block(s) north of this BlockPos`

Returns net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north(n as int);
new BlockPos(0, 1, 2).north(10);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| n        | int | Описание отсутствует |


### offset

Creates a new BlockPos based on this BlockPos that is one block offset of this BlockPos based on the given [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Returns: `a new BlockPos that is 1 block offset of this BlockPos`

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction);
new BlockPos(0, 1, 2).offset(<direction:east>);
```

| Параметр  | Тип                                                            | Описание             |
| --------- | -------------------------------------------------------------- | -------------------- |
| direction | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Описание отсутствует |



Creates a new BlockPos based on this BlockPos that is n block(s) offset of this BlockPos based on the given [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Returns: `a new BlockPos that is n block(s) offset of this BlockPos`

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction, n as int);
new BlockPos(0, 1, 2).offset(<direction:south>, 3);
```

| Параметр  | Тип                                                            | Описание             |
| --------- | -------------------------------------------------------------- | -------------------- |
| direction | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Описание отсутствует |
| n         | int                                                            | Описание отсутствует |


### south

Creates a new BlockPos based on this BlockPos that is one block south of this BlockPos

 Returns: `a new BlockPos that is one block south of this BlockPos`

Returns net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south();
```


Creates a new BlockPos based on this BlockPos that is n block(s) south of this BlockPos

 Returns: `a new BlockPos that is n block(s) south of this BlockPos`

Returns net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south(n as int);
new BlockPos(0, 1, 2).south(12);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| n        | int | Описание отсутствует |


### subtract

Subtracts two positions together and returns the result.

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).subtract(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).subtract(new BlockPos(2, 1, 3));
```

| Параметр | Тип                                                          | Описание                 |
| -------- | ------------------------------------------------------------ | ------------------------ |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to remove |


### up

Creates a new BlockPos based on this BlockPos that is one block higher than this BlockPos

 Returns: `a new BlockPos that is one block higher than this BlockPos`

Returns net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up();
```


Creates a new BlockPos based on this BlockPos that is n block(s) higher than this BlockPos

 Returns: `a new BlockPos that is n block(s) higher than this BlockPos`

Returns net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up(n as int);
new BlockPos(0, 1, 2).up(45);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| n        | int | Описание отсутствует |


### west

Creates a new BlockPos based on this BlockPos that is one block west of this BlockPos

 Returns: `a new BlockPos that is one block west of this BlockPos`

Returns net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west();
```


Creates a new BlockPos based on this BlockPos that is n block(s) west of this BlockPos

 Returns: `a new BlockPos that is n block(s) west of this BlockPos`

Returns net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west(n as int);
new BlockPos(0, 1, 2).west(120);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| n        | int | Описание отсутствует |


### withinDistance

Checks if the given BlockPos is within the specified distance of this BlockPos (this uses the middle of the BlockPos)

Возвращает boolean

```zenscript
new BlockPos(0, 1, 2).withinDistance(pos as crafttweaker.api.util.BlockPos, distance as double);
new BlockPos(0, 1, 2).withinDistance(new BlockPos(80, 75, 54);, 10);
```

| Параметр | Тип                                                          | Описание                                       |
| -------- | ------------------------------------------------------------ | ---------------------------------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check if it is within the distance |
| distance | double                                                       | distance to check within                       |



## Свойства

| Название | Тип | Имеет Getter | Имеет Setter |
| -------- | --- | ------------ | ------------ |
| x        | int | true         | false        |
| y        | int | true         | false        |
| z        | int | true         | false        |

## Операторы
### ADD

Adds two positions together and returns the result.

```zenscript
new BlockPos(0, 1, 2) + pos as crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) + new BlockPos(3, 2, 1)
```

| Параметр | Тип                                                          | Описание              |
| -------- | ------------------------------------------------------------ | --------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to add |
### SUB

Subtracts two positions together and returns the result.

```zenscript
new BlockPos(0, 1, 2) - pos as crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) - new BlockPos(2, 1, 3)
```

| Параметр | Тип                                                          | Описание                 |
| -------- | ------------------------------------------------------------ | ------------------------ |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to remove |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| long           | false            |

