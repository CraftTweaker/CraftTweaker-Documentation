# ByteData



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.data.ByteData
```

## Реализованные интерфейсы
ByteData реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)
- [crafttweaker.api.data.INumberData](/vanilla/api/data/INumberData)

## Конструкторы
```zenscript
new crafttweaker.api.data.ByteData(внутренняя как байт);
```
| Параметр   | Тип  | Описание             |
| ---------- | ---- | -------------------- |
| внутренняя | byte | Описание отсутствует |



## Методы
### asList

возвращает список<IData> представление этого IData, возвращает null на все, кроме [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Возвращается: `аннулировать, если это IData не список.`

Тип возврата: Список&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
4.asList();
```

### asMap

Получает карту<String, IData> представления этой IData, возвращает null на что-либо кроме [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Возвращается: `нулево, если этот IData не является картой.`

Возврат типа: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
4.asMap();
```

### asString

Получает строку представления этой IData

 Возвращается: `Строка, которая представляет этот IData (значение и тип).`

Тип возврата: строка

```zenscript
4.asString();
```

### contains

Проверяет, содержит ли этот IData другую IData, в основном используется в подклассах [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData)— это то же самое, что и проверка на другие типы IData

 Возвращается: `истина, если указанная IData содержится в этой IData`

Тип возврата: логическое значение

```zenscript
4.contains(данные как crafttweaker.api.data.IData);
4.contains("Display");
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
4.копия();
```

### getId

Получает идентификатор внутреннего NBT тега.

 Используется для определения того, какой тип NBT хранится (например, списк)

 Возвращается: `ID NBT тега, который представляет эти данные.`

Тип возврата: байт

```zenscript
4.getId();
```

### getString

Получает строку внутреннего INBT тэга

 Возвращается: `Строка, представляющая внутренний INBT этого IData.`

Тип возврата: строка

```zenscript
4.getString();
```


