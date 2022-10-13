# StringData



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.data.StringData
```

## Implemented Interfaces
StringData implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructors
```zenscript
new crafttweaker.api.data.StringData(internal as String);
```
| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| internal | String | Описание отсутствует |



## Методы
### asList

Gets a List<IData> representation of this IData, returns null on anything but [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Returns: `null if this IData is not a list.`

Returns List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
new StringData("Hello").asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Returns: `null if this IData is not a map.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
new StringData("Hello").asMap();
```

### asString

Gets the String representation of this IData

 Returns: `String that represents this IData (value and type).`

Returns String

```zenscript
new StringData("Hello").asString();
```

### contains

Checks if this IData contains another IData, mainly used in subclasses of [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Возвращает boolean

```zenscript
new StringData("Hello").contains(data as crafttweaker.api.data.IData);
new StringData("Hello").contains("Display");
```

| Параметр | Тип                                                    | Описание                         |
| -------- | ------------------------------------------------------ | -------------------------------- |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data to check if it is contained |


### copy

Makes a copy of this IData.

 IData is immutable by default, use this to create a proper copy of the object.

 Returns: `a copy of this IData.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
new StringData("Hello").copy();
```

### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

 Returns: `ID of the NBT tag that this data represents.`

Returns byte

```zenscript
new StringData("Hello").getId();
```

### getString

Gets the String representation of the internal INBT tag

 Returns: `String that represents the internal INBT of this IData.`

Returns String

```zenscript
new StringData("Hello").getString();
```


## Операторы
### ADD

Concatenates the two string Datas and returns the result.

```zenscript
new StringData("Hello") + data as crafttweaker.api.data.StringData
new StringData("Hello") + new StringData("World")
```

| Параметр | Тип                                                              | Описание                 |
| -------- | ---------------------------------------------------------------- | ------------------------ |
| data     | [crafttweaker.api.data.StringData](/vanilla/api/data/StringData) | The other data to append |

