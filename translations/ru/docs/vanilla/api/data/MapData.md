# MapData



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.data.MapData
```

## Реализованные интерфейсы
MapData реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Конструкторы
```zenscript
new crafttweaker.api.data.MapData();
```
```zenscript
new crafttweaker.api.data.MapData(карта как crafttweaker.api.data.IData[String]);
```
| Параметр | Тип                                                            | Описание             |
| -------- | -------------------------------------------------------------- | -------------------- |
| карта    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Описание отсутствует |



## Методы
### asList

возвращает список<IData> представление этого IData, возвращает null на все, кроме [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Возвращается: `аннулировать, если это IData не список.`

Возвращает список <[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
myMapData.asList();
```

### asMap

Получает карту<String, IData> представления этой IData, возвращает null на что-либо кроме [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Возвращается: `нулево, если этот IData не является картой.`

Возвращает [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
myMapData.asMap();
```

### asString

Получает строку представления этой IData

 Возвращается: `Строка, которая представляет этот IData (значение и тип).`

Возвращает строку

```zenscript
myMapData.asString();
```

### contains

Проверяет, содержит ли карта заданный ключ.

Возвращает boolean

```zenscript
myMapData.contains(key as String);
myMapData.contains("Hello");
```

| Параметр | Тип    | Описание        |
| -------- | ------ | --------------- |
| ключ     | String | Ключ для поиска |


### copy

Создает копию этой IData.

 По умолчанию IData неизменяемая, используйте это для создания соответствующей копии объекта.

 Возвращается: `копия IData.`

Возвращает [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.copy();
```

### получить

Получает значение, связанное с ключом

Возвращает [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.get(ключ как String);
myMapData.get("Hello");
```

| Параметр | Тип    | Описание        |
| -------- | ------ | --------------- |
| ключ     | String | Ключ для поиска |


### getId

Получает идентификатор внутреннего NBT тега.

 Используется для определения того, какой тип NBT хранится (например, списк)

 Возвращается: `ID NBT тега, который представляет эти данные.`

Возвращает байт

```zenscript
myMapData.getId();
```

### getString

Получает строку внутреннего INBT тэга

 Возвращается: `Строка, представляющая внутренний INBT этого IData.`

Возвращает строку

```zenscript
myMapData.getString();
```

### слияние

Объединить эту карту и другую карту. Если записи с этой карты и с другой карты разделяются, значения пытаются. Если это не сработало, то используется значение с другой карты.

Возвращает [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)

```zenscript
myMapData.merge(другие как crafttweaker.api.data.MapData);
myMapData.merge({Doodle: "Do});
```

| Параметр | Тип                                                        | Описание      |
| -------- | ---------------------------------------------------------- | ------------- |
| другой   | [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | Другая карта. |


### положить

Добавляет значение для заданного ключа или создает новую запись, если она не существовала ранее.

Возвращает [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.put(ключ как строка, значение как crafttweaker.api.data.IData);
myMapData.put("Привет", "Хорошо");
```

| Параметр | Тип                                                    | Описание                   |
| -------- | ------------------------------------------------------ | -------------------------- |
| ключ     | String                                                 | Ключ для задания значения. |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Значение для установки.    |


### putAll

Добавляет в эту карту все записи из заданной карты. Может переопределить существующие ключи.

```zenscript
myMapData.putAll(map as crafttweaker.api.data.IData[String]);
myMapData.putAll({Hello: "Goodbye", Item: "Bedrock"});
```

| Параметр | Тип                                                            | Описание                                  |
| -------- | -------------------------------------------------------------- | ----------------------------------------- |
| карта    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Другие записи для добавления на эту карту |


### удалить

Удаляет запись с заданного ключа с карты

```zenscript
myMapData.remove(ключ как String);
myMapData.remove("Гнего");
```

| Параметр | Тип    | Описание                 |
| -------- | ------ | ------------------------ |
| ключ     | String | Ключ для удаления записи |



## Свойства

| Название | Тип            | Имеет Getter | Имеет Setter |
| -------- | -------------- | ------------ | ------------ |
| isEmpty  | boolean        | true         | false        |
| keySet   | Задать<String> | true         | false        |
| size     | int            | true         | false        |

## Операторы
### ADD

Добавляет все записи из заданного IData в эту запись

```zenscript
myMapData + данные как crafttweaker.api.data.IData
```

| Параметр | Тип                                                    | Описание             |
| -------- | ------------------------------------------------------ | -------------------- |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Описание отсутствует |

## Утилиты

| Тип результата                                                 | Является неявным |
| -------------------------------------------------------------- | ---------------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | true             |

