# Инструменты

Представляет число в виде [crafttweaker.api.data.IData](/vanilla/api/data/IData), полезной для преобразования между типами (например, двойной в int / долгое).

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.data.INumberData
```

## Реализованные интерфейсы
INumberData реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Методы
### asList

возвращает список<IData> представление этого IData, возвращает null на все, кроме [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Возвращается: `аннулировать, если это IData не список.`

Возвращает список <[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
1.asList();
```

### asMap

Получает карту<String, IData> представления этой IData, возвращает null на что-либо кроме [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Возвращается: `нулево, если этот IData не является картой.`

Возвращает [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
1.asMap();
```

### asString

Получает строку представления этой IData

 Возвращается: `Строка, которая представляет этот IData (значение и тип).`

Возвращает строку

```zenscript
1.asString();
```

### contains

Проверяет, содержит ли этот IData другую IData, в основном используется в подклассах [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData)— это то же самое, что и проверка на другие типы IData

Возвращает boolean

```zenscript
1.contains(данные как crafttweaker.api.data.IData);
1.contains("Display");
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
1.copy();
```

### getId

Получает идентификатор внутреннего NBT тега.

 Используется для определения того, какой тип NBT хранится (например, списк)

 Возвращается: `ID NBT тега, который представляет эти данные.`

Возвращает байт

```zenscript
1.getId();
```

### getString

Получает строку внутреннего INBT тэга

 Возвращается: `Строка, представляющая внутренний INBT этого IData.`

Возвращает строку

```zenscript
1.getString();
```


