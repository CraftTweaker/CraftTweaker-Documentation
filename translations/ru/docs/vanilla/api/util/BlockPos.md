# BlockPos

Представляет собой положение блока в мире

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.util.BlockPos
```

## Конструкторы
```zenscript
new crafttweaker.api.util.BlockPos(x как int, y как int, z как int);
```
| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| х        | int | Описание отсутствует |
| y        | int | Описание отсутствует |
| z        | int | Описание отсутствует |



## Методы
### Добавить

Добавляет две позиции вместе и возвращает результат.

Возвращает [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).add(new BlockPos(3, 2, 1));
```

| Параметр | Тип                                                          | Описание                    |
| -------- | ------------------------------------------------------------ | --------------------------- |
| пос      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | другое место для добавления |



Добавляет заданные значения в эту позицию и возвращает новое положение с новыми значениями.

Возвращает [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(x как двойный, y как двойный, z как двойный);
новый BlockPos(0, 1, 2).add(50.21, -20.8, -25.2);
```

| Параметр | Тип    | Описание                  |
| -------- | ------ | ------------------------- |
| х        | double | x значение для добавления |
| у        | double | значение y для добавления |
| z        | double | Значение z для добавления |


### кроссПродукт

Создает новые BlockPos на основе кросс-продукта этого положения и заданной позиции

Возвращает [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).crossProduct(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).crossProduct(new BlockPos(5, 8, 2););
```

| Параметр | Тип                                                          | Описание                            |
| -------- | ------------------------------------------------------------ | ----------------------------------- |
| пос      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos для перекрестного продукта |


### расстояние

Получает квадрат расстояния этого положения до указанного блокпоса, используя центр BlockPos

Удвоение возвратов

```zenscript
новый BlockPos(0, 1, 2).distanceSq(как crafttweaker.api.util.BlockPos);
новый BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10););
```

| Параметр | Тип                                                          | Описание              |
| -------- | ------------------------------------------------------------ | --------------------- |
| до       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos для проверки |



Получает квадрат расстояния этого положения до указанного BlockPos

Удвоение возвратов

```zenscript
новый BlockPos(0, 1, 2).distanceSq(как crafttweaker.api.util.BlockPos, использовать центр как boolean);
новый BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10);, true);
```

| Параметр           | Тип                                                          | Описание                                                                   |
| ------------------ | ------------------------------------------------------------ | -------------------------------------------------------------------------- |
| до                 | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos для проверки                                                      |
| использовать Центр | boolean                                                      | должен использоваться центр координаты? (добавляет 0.5 к каждому значению) |



Получает квадрат расстояния от этого положения до указанных координат

Удвоение возвратов

```zenscript
new BlockPos(0, 1, 2).distanceSq(x как двойная, y как двойная, z как двойная, использовать как boolean);
new BlockPos(0, 1, 2).distanceSq(500.25, 250.75, 100.20, false);
```

| Параметр           | Тип     | Описание                                                                   |
| ------------------ | ------- | -------------------------------------------------------------------------- |
| х                  | double  | положение x для проверки                                                   |
| у                  | double  | положение y для проверки                                                   |
| z                  | double  | положение z для проверки                                                   |
| использовать Центр | boolean | должен использоваться центр координаты? (добавляет 0.5 к каждому значению) |


### вниз

Создает новые BlockPos на основе этого BlockPos на один блок ниже этого BlockPos

 Возвращается: `новый BlockPos блоков ниже этого BlockPos`

Возвращает net.minecraft.util.math.BlockPos

```zenscript
новый BlockPos(0, 1, 2).down();
```

### восток

Создает новые BlockPos на основе этого BlockPos на одном блоке к востоку от этого BlockPos

 Возвращается: `новый BlockPos один блок к востоку от этого BlockPos`

Возвращает net.minecraft.util.math.BlockPos

```zenscript
новый BlockPos(0, 1, 2).east();
```


Создает новые BlockPos на основе этого BlockPos который является n блок(ов) к востоку от этого BlockPos

 Возвращается: `новый BlockPos который является n блок(ов) к востоку от этого BlockPos`

Возвращает net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east(n as int);
new BlockPos(0, 1, 2).east(2);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| п        | int | Описание отсутствует |


### Расстояние манхата

Получает Дистанцию Манхэттена по сравнению с другим положением

Возвращает int

```zenscript
new BlockPos(0, 1, 2).manhattanDistance(other as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).manhattanDistance(new BlockPos(4, 5, 6));
```

| Параметр | Тип                                                          | Описание                                    |
| -------- | ------------------------------------------------------------ | ------------------------------------------- |
| другой   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | другое положение, чтобы получить расстояние |


### север

Создает новые BlockPos на основе этого BlockPos который является одним блоком к северу от этого BlockPos

 Возвращается: `новый BlockPos, который является одним блоком к северу от этого BlockPos`

Возвращает net.minecraft.util.math.BlockPos

```zenscript
новый BlockPos(0, 1, 2).north();
```


Создает новые BlockPos на основе этого BlockPos который является n блок(ов) к северу от этого BlockPos

 Возвращается: `новый BlockPos который является n блок(ов) к северу от этого BlockPos`

Возвращает net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north(n as int);
new BlockPos(0, 1, 2).north(10);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| п        | int | Описание отсутствует |


### смещение

Создает новые BlockPos на основе этого BlockPos смещения одного блока этого BlockPos на основе данного [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Возвращается: `новый BlockPos смещение 1 блока этого BlockPos`

Возвращает [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(направление как crafttweaker.api.util.Direction);
new BlockPos(0, 1, 2).offset(<direction:east>);
```

| Параметр    | Тип                                                            | Описание             |
| ----------- | -------------------------------------------------------------- | -------------------- |
| направление | [crafttweaker.api.util.direction](/vanilla/api/util/Direction) | Описание отсутствует |



Создает новые BlockPos на основе этого BlockPos который является n блок(ов) смещения этого BlockPos на основе данного [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Возвращается: `новый BlockPos который является n блок(ов) смещение этого BlockPos`

Возвращает [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(направление crafttweaker.api.util.Direction, n как int);
new BlockPos(0, 1, 2).offset(<direction:south>, 3);
```

| Параметр    | Тип                                                            | Описание             |
| ----------- | -------------------------------------------------------------- | -------------------- |
| направление | [crafttweaker.api.util.direction](/vanilla/api/util/Direction) | Описание отсутствует |
| п           | int                                                            | Описание отсутствует |


### юг

Создает новые BlockPos на основе этого BlockPos который является одним блоком к югу от этого BlockPos

 Возвращается: `новый BlockPos один блок к югу от этого BlockPos`

Возвращает net.minecraft.util.math.BlockPos

```zenscript
новый BlockPos(0, 1, 2).suth();
```


Создает новые BlockPos на основе этого BlockPos который является n блок(ов) к югу от этого BlockPos

 Возвращается: `новый BlockPos, который является n блок(ов) к югу от этого BlockPos`

Возвращает net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south(n as int);
new BlockPos(0, 1, 2).south(12);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| п        | int | Описание отсутствует |


### вычесть

Вычитает две позиции вместе и возвращает результат.

Возвращает [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).subtract(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).subtract(new BlockPos(2, 1, 3));
```

| Параметр | Тип                                                          | Описание                    |
| -------- | ------------------------------------------------------------ | --------------------------- |
| пос      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | другая позиция для удаления |


### вверх

Создает новые BlockPos на основе этого BlockPos на один блок выше этого BlockPos

 Возвращается: `новый BlockPos на один блок выше, чем этот BlockPos`

Возвращает net.minecraft.util.math.BlockPos

```zenscript
новый BlockPos(0, 1, 2).up();
```


Создает новые BlockPos на основе этого BlockPos который является n блок(ов) выше, чем этот BlockPos

 Возвращается: `новый BlockPos, который является n блок(ов) выше, чем этот BlockPos`

Возвращает net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up(n как int);
new BlockPos(0, 1, 2).up(45);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| п        | int | Описание отсутствует |


### запад

Создает новые BlockPos на основе этого BlockPos на одном блоке к западу от этого BlockPos

 Возвращается: `новый BlockPos, который находится в одном блоке к западу от этого BlockPos`

Возвращает net.minecraft.util.math.BlockPos

```zenscript
новый BlockPos(0, 1, 2).west();
```


Создает новые BlockPos на основе этого BlockPos который является n блок(ов) к западу от этого BlockPos

 Возвращается: `новый BlockPos, который n блок(ов) к западу от этого BlockPos`

Возвращает net.minecraft.util.math.BlockPos

```zenscript
новый BlockPos(0, 1, 2).west(n как int);
новый BlockPos(0, 1, 2).west(120);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| п        | int | Описание отсутствует |


### расстояние

Проверяет, находится ли данный BlockPos в пределах указанного расстояния от этого BlockPos (используется середина BlockPos)

Возвращает boolean

```zenscript
новый BlockPos(0, 1, 2).withinDistance(pos as crafttweaker.api.util.BlockPos, расстояние двойно);
новый BlockPos(0, 1, 2).withinDistance(new BlockPos(80, 75, 54);, 10);
```

| Параметр   | Тип                                                          | Описание                                                 |
| ---------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| пос        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos для проверки находится ли в пределах расстояния |
| расстояние | double                                                       | расстояние для проверки в пределах                       |



## Свойства

| Название | Тип | Имеет Getter | Имеет Setter |
| -------- | --- | ------------ | ------------ |
| х        | int | true         | false        |
| у        | int | true         | false        |
| z        | int | true         | false        |

## Операторы
### ADD

Добавляет две позиции вместе и возвращает результат.

```zenscript
новый BlockPos(0, 1, 2) + pos как crafttweaker.api.util.BlockPos
новый BlockPos(0, 1, 2) + новый BlockPos(3, 2, 1)
```

| Параметр | Тип                                                          | Описание                    |
| -------- | ------------------------------------------------------------ | --------------------------- |
| пос      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | другое место для добавления |
### SUB

Вычитает две позиции вместе и возвращает результат.

```zenscript
новый BlockPos(0, 1, 2) - pos как crafttweaker.api.util.BlockPos
новый BlockPos(0, 1, 2) - новый BlockPos(2, 1, 3)
```

| Параметр | Тип                                                          | Описание                    |
| -------- | ------------------------------------------------------------ | --------------------------- |
| пос      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | другая позиция для удаления |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| long           | false            |

