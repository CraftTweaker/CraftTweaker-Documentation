# IntArrayData



Этот класс добавляется модом `crafttweaker`. Вы должны установить этот мод, если хотите использовать эту возможность.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.data.IntArrayData
```

## Реализованные интерфейсы
IntArrayData реализует интерфейсы ниже. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Конструкторы
```zenscript
new crafttweaker.api.data.IntArrayData(internal as int[]);
```
| Параметр | Тип   | Описание             |
| -------- | ----- | -------------------- |
| internal | int[] | Описание отсутствует |



## Методы
### add

```zenscript
[4, 128, 256, 1024].add(value as crafttweaker.api.data.IData);
[4, 128, 256, 1024].add("сегодня");
```

| Параметр | Тип                                                    | Описание                       |
| -------- | ------------------------------------------------------ | ------------------------------ |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Значение к добавлению в список |



```zenscript
[4, 128, 256, 1024].add(index as int, value as crafttweaker.api.data.IData);
[4, 128, 256, 1024].add(1, "красиво");
```

| Параметр | Тип                                                    | Описание                                                                  |
| -------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| index    | int                                                    | Индекс к добавлению.  Индексы последующих элементов будут увеличены на 1. |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Значение к добавлению.                                                    |


### asList

Получает представление<IData> этого объекта как список, возвращая null на значения помимо [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Возвращает: `null, если этот объект не список.`

Возвращает список <[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
[4, 128, 256, 1024].asList();
```

### asMap

Получает карту<String, IData> представления этой IData, возвращает null на что-либо кроме [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Возвращается: `нулево, если этот IData не является картой.`

Возвращает [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
[4, 128, 256, 1024].asMap();
```

### asString

Получает строку представления этой IData

 Возвращается: `Строка, которая представляет этот IData (значение и тип).`

Возвращает строку

```zenscript
[4, 128, 256, 1024].asString();
```

### clear

Удаляет каждый элемент списка

```zenscript
[4, 128, 256, 1024]clear();
```

### contains

Проверяет, содержит ли этот IData другую IData, в основном используется в подклассах [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData)— это то же самое, что и проверка на другие типы IData

Возвращает boolean

```zenscript
[4, 128, 256, 1024].contains(данные как crafttweaker.api.data.IData);
[4, 128, 256, 1024].contains("Отображение");
```

| Параметр | Тип                                                    | Описание                    |
| -------- | ------------------------------------------------------ | --------------------------- |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | для проверки наличия данных |


### copy

Создает копию этой IData.

 По умолчанию IData неизменяемая, используйте это для создания соответствующей копии объекта.

 Возвращается: `копия IData.`

Возвращает [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].copy();
```

### get

Получает [crafttweaker.api.data.IData](/vanilla/api/data/IData) , хранящийся по данному индексу.

Возвращает [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].get(индекс как int);
[4, 128, 256, 1024].get(0);
```

| Параметр | Тип | Описание      |
| -------- | --- | ------------- |
| index    | int | Индекс (от 0) |


### getId

Получает идентификатор внутреннего NBT тега.

 Используется для определения того, какой тип NBT хранится (например, списк)

 Возвращается: `ID NBT тега, который представляет эти данные.`

Возвращает байт

```zenscript
[4, 128, 256, 1024].getId();
```

### getString

Получает строку внутреннего INBT тэга

 Возвращается: `Строка, представляющая внутренний INBT этого IData.`

Возвращает строку

```zenscript
[4, 128, 256, 1024].getString();
```

### remove

Удаляет [crafttweaker.api.data.IData](/vanilla/api/data/IData) , хранящуюся по заданному индексу.

Возвращает [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].remove(индекс как int);
[4, 128, 256, 1024].remove(0);
```

| Параметр | Тип | Описание   |
| -------- | --- | ---------- |
| index    | int | Индекс (0) |


### set

Устанавливает элемент по указанному индексу для заданного значения

Возвращает [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].set(индекс как int, значение как crafttweaker.api.data.IData);
[4, 128, 256, 1024].set(0, "Bye");
```

| Параметр | Тип                                                    | Описание                 |
| -------- | ------------------------------------------------------ | ------------------------ |
| index    | int                                                    | Индекс для установки (0) |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Новое значение           |



## Свойства

| Имя  | Тип | Имеет геттер | Имеет сеттер |
| ---- | --- | ------------ | ------------ |
| size | int | да           | нет          |

