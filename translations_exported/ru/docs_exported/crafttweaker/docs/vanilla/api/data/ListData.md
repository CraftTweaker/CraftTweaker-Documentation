# Список данных



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.data.ListData
```

## Реализованные интерфейсы
ListData реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Конструкторы
```zenscript
new crafttweaker.api.data.ListData();
```
```zenscript
new crafttweaker.api.data.ListData(список как список<crafttweaker.api.data.IData>);
```
| Параметр | Тип                                                                              | Описание             | Необязательный | Значение по умолчанию |
| -------- | -------------------------------------------------------------------------------- | -------------------- | -------------- | --------------------- |
| список   | Список&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt; | Описание отсутствует | true           | `null`                |



## Методы
### Добавить

```zenscript
["Привет", "Мир", "!"].add(значение как crafttweaker.api.data.IData);
["Привет", "Мир", "!"].add("сегодня");
```

| Параметр | Тип                                                    | Описание                       |
| -------- | ------------------------------------------------------ | ------------------------------ |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Значение к добавлению в список |



```zenscript
["Привет", "Мир", "!"].add(индекс int, значение как crafttweaker.api.data.IData);
["Привет", "Мир", "!"].add(1, "красиво");
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
["Привет", "Мир", "!"].asList();
```

### asMap

Получает карту<String, IData> представления этой IData, возвращает null на что-либо кроме [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Возвращается: `нулево, если этот IData не является картой.`

Возврат типа: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
["Привет", "Мир", "!"].asMap();
```

### asString

Получает строку представления этой IData

 Возвращается: `Строка, которая представляет этот IData (значение и тип).`

Тип возврата: строка

```zenscript
["Привет", "Мир", "!"].asString();
```

### очистить

Удаляет каждый элемент списка

```zenscript
["Привет", "Мир", "!"].clear();
```

### contains

Проверяет, содержит ли этот IData другую IData, в основном используется в подклассах [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData)— это то же самое, что и проверка на другие типы IData

 Возвращается: `истина, если указанная IData содержится в этой IData`

Тип возврата: логическое значение

```zenscript
["Привет", "Мир", "!"].contains(данные как crafttweaker.api.data.IData);
["Привет", "Мир", "!"].contains("Дисплей");
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
["Привет", "Мир", "!"].copy();
```

### получить

Получает [crafttweaker.api.data.IData](/vanilla/api/data/IData) , хранящийся по данному индексу. Возвраты: `The [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

Тип возврата: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Привет", "Мир", "!"].get(индекс int);
["Привет", "Мир", "!"].get(0);
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
["Привет", "Мир", "!"].getId();
```

### getString

Получает строку внутреннего INBT тэга

 Возвращается: `Строка, представляющая внутренний INBT этого IData.`

Тип возврата: строка

```zenscript
["Привет", "Мир", "!"].getString();
```

### удалить

Удаляет [crafttweaker.api.data.IData](/vanilla/api/data/IData) , хранящуюся по заданному индексу. Возвращается: `The [crafttweaker.api.data.IData](/vanilla/api/data/IData), который был удален`

Тип возврата: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Привет", "Мир", "!"].remove(индекс int);
["Привет", "Мир", "!"].remove(0);
```

| Параметр | Тип | Описание   |
| -------- | --- | ---------- |
| index    | int | Индекс (0) |


### набор

Устанавливает элемент по указанному индексу для заданного значения Возвращается: `Значение замены`

Тип возврата: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Привет", "Мир", "!"].set(индекс как int, значение как crafttweaker.api.data.IData);
["Привет", "Мир", "!"].set(0, "Би"");
```

| Параметр | Тип                                                    | Описание                 |
| -------- | ------------------------------------------------------ | ------------------------ |
| index    | int                                                    | Индекс для установки (0) |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Новое значение           |



## Свойства

| Название | Тип | Имеет Getter | Имеет Setter |
| -------- | --- | ------------ | ------------ |
| size     | int | true         | false        |

## Утилиты

| Тип результата                                                                   | Является неявным |
| -------------------------------------------------------------------------------- | ---------------- |
| Список&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt; | true             |

