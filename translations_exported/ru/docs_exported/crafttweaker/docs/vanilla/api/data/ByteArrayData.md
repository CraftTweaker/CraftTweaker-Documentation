# ByteArrayData



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.data.ByteArrayData
```

## Реализованные интерфейсы
ByteArrayData реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Конструкторы
```zenscript
new crafttweaker.api.data.ByteArrayData(внутренняя как байт[]);
```
| Параметр   | Тип    | Описание             |
| ---------- | ------ | -------------------- |
| внутренняя | байт[] | Описание отсутствует |



## Методы
### Добавить

```zenscript
[4, 1, 2].add(значение как crafttweaker.api.data.IData);
[4, 1, 2].add("сегодня");
```

| Параметр | Тип                                                    | Описание                       |
| -------- | ------------------------------------------------------ | ------------------------------ |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Значение к добавлению в список |



```zenscript
[4, 1, 2].add(индекс int, значение как crafttweaker.api.data.IData);
[4, 1, 2].add(1, "красиво");
```

| Параметр | Тип                                                    | Описание                                                                  |
| -------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| index    | int                                                    | Индекс к добавлению.  Индексы последующих элементов будут увеличены на 1. |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Значение к добавлению в список                                            |


### asList

возвращает список<IData> представление этого IData, возвращает null на все, кроме [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Возвращается: `аннулировать, если это IData не список.`

Тип возврата: Список&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
[4, 1, 2].asList();
```

### asMap

Получает карту<String, IData> представления этой IData, возвращает null на что-либо кроме [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Возвращается: `нулево, если этот IData не является картой.`

Возврат типа: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
[4, 1, 2].asMap();
```

### asString

Получает строку представления этой IData

 Возвращается: `Строка, которая представляет этот IData (значение и тип).`

Тип возврата: строка

```zenscript
[4, 1, 2].asString();
```

### очистить

Удаляет каждый элемент списка

```zenscript
[4, 1, 2].clear();
```

### contains

Проверяет, содержит ли этот IData другую IData, в основном используется в подклассах [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData)— это то же самое, что и проверка на другие типы IData

 Возвращается: `истина, если указанная IData содержится в этой IData`

Тип возврата: логическое значение

```zenscript
[4, 1, 2].contains(данные как crafttweaker.api.data.IData);
[4, 1, 2].contains("Display");
```

| Параметр | Тип                                                    | Описание                    |
| -------- | ------------------------------------------------------ | --------------------------- |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | для проверки наличия данных |


### copy

Создает копию этой IData.

 По умолчанию IData неизменяемая, используйте это для создания соответствующей копии объекта.

 Возвращается: `копия IData.`

Тип возврата: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].copy();
```

### получить

Получает [crafttweaker.api.data.IData](/vanilla/api/data/IData) , хранящийся по данному индексу. Возвраты: `The [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

Тип возврата: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].get(индекс в виде int);
[4, 1, 2].get(0);
```

| Параметр | Тип | Описание   |
| -------- | --- | ---------- |
| index    | int | Индекс (0) |


### getId

Получает идентификатор внутреннего NBT тега.

 Используется для определения того, какой тип NBT хранится (например, списк)

 Возвращается: `ID NBT тега, который представляет эти данные.`

Тип возврата: байт

```zenscript
[4, 1, 2].getId();
```

### getString

Получает строку внутреннего INBT тэга

 Возвращается: `Строка, представляющая внутренний INBT этого IData.`

Тип возврата: строка

```zenscript
[4, 1, 2].getString();
```

### удалить

Удаляет [crafttweaker.api.data.IData](/vanilla/api/data/IData) , хранящуюся по заданному индексу. Возвращается: `The [crafttweaker.api.data.IData](/vanilla/api/data/IData), который был удален`

Тип возврата: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].remove(индекс в виде int);
[4, 1, 2].remove(0);
```

| Параметр | Тип | Описание   |
| -------- | --- | ---------- |
| index    | int | Индекс (0) |


### набор

Устанавливает элемент по указанному индексу для заданного значения Возвращается: `Значение замены`

Тип возврата: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].set(индекс int, значение как crafttweaker.api.data.IData);
[4, 1, 2].set(0, "Bye");
```

| Параметр | Тип                                                    | Описание                 |
| -------- | ------------------------------------------------------ | ------------------------ |
| index    | int                                                    | Индекс для установки (0) |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Новое значение           |



## Свойства

| Название | Тип | Имеет Getter | Имеет Setter |
| -------- | --- | ------------ | ------------ |
| size     | int | true         | false        |

