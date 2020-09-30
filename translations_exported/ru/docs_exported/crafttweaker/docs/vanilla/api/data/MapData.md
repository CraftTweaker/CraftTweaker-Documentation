# MapData



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.data.MapData
```

## Implemented Interfaces
MapData implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructors
```zenscript
new crafttweaker.api.data.MapData();
```
```zenscript
new crafttweaker.api.data.MapData(map as crafttweaker.api.data.IData[String]);
```
| Параметр | Тип                                                            | Description          |
| -------- | -------------------------------------------------------------- | -------------------- |
| map      | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Описание отсутствует |



## Methods
### asList

Gets a List<IData> representation of this IData, returns null on anything but [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Returns: `null if this IData is not a list.`

Тип возврата: Список&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
myMapData.asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Returns: `null if this IData is not a map.`

Возврат типа: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
myMapData.asMap();
```

### asString

Gets the String representation of this IData

 Returns: `String that represents this IData (value and type).`

Return type: String

```zenscript
myMapData.asString();
```

### contains

Checks if the Map contains the given key.

 Возвращается: `Верно, если карта содержит ключ`

Return type: boolean

```zenscript
myMapData.contains(key as String);
myMapData.contains("Hello");
```

| Параметр | Тип    | Description           |
| -------- | ------ | --------------------- |
| key      | String | The key to search for |



Checks if this IData contains another IData, mainly used in subclasses of [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

 Возвращается: `истина, если указанная IData содержится в этой IData`

Return type: boolean

```zenscript
myMapData.contains(данные как crafttweaker.api.data.IData);
myMapData.contains("Отображать");
```

| Параметр | Тип                                                    | Description                      |
| -------- | ------------------------------------------------------ | -------------------------------- |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data to check if it is contained |


### copy

Makes a copy of this IData.

 IData is immutable by default, use this to create a proper copy of the object.

 Returns: `a copy of this IData.`

Тип возврата: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.copy();
```

### get

Retrieves the value associated with the key

 Возвращается: `Значение, если существует, null иначе`

Тип возврата: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.get(key as String);
myMapData.get("Hello");
```

| Параметр | Тип    | Description           |
| -------- | ------ | --------------------- |
| key      | String | The key to search for |


### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

 Returns: `ID of the NBT tag that this data represents.`

Тип возврата: байт

```zenscript
myMapData.getId();
```

### getString

Gets the String representation of the internal INBT tag

 Returns: `String that represents the internal INBT of this IData.`

Return type: String

```zenscript
myMapData.getString();
```

### merge

Merges this map and the other map. If entries from this map and the other map share the values are tried to be merged. If that does not work, then the value from the other map is used.

 Возвращается: `Эта карта после слияния`

Возврат типа: [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)

```zenscript
myMapData.merge(other as crafttweaker.api.data.MapData);
myMapData.merge({Doodle: "Do});
```

| Параметр | Тип                                                        | Description    |
| -------- | ---------------------------------------------------------- | -------------- |
| other    | [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | The other map. |


### put

Adds sets the value for the given key or creates a new entry if it did not exist before.

 Возвращается: `Предыдущее значение, если существует, null иначе`

Тип возврата: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.put(key as String, value as crafttweaker.api.data.IData);
myMapData.put("Hello", "Goodbye");
```

| Параметр | Тип                                                    | Description                   |
| -------- | ------------------------------------------------------ | ----------------------------- |
| key      | String                                                 | The key to set the value for. |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to set.             |


### putAll

Adds all entries from the given map into this one. Can override existing keys.

```zenscript
myMapData.putAll(map as crafttweaker.api.data.IData[String]);
myMapData.putAll({Hello: "Goodbye", Item: "Bedrock"});
```

| Параметр | Тип                                                            | Description                               |
| -------- | -------------------------------------------------------------- | ----------------------------------------- |
| map      | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | The other entries to be added to this map |


### remove

Removes the entry with the given key from the Map

```zenscript
myMapData.remove(key as String);
myMapData.remove("Somewhere");
```

| Параметр | Тип    | Description                    |
| -------- | ------ | ------------------------------ |
| key      | String | The key of the entry to remove |



## Свойства

| Название | Тип                                  | Имеет Getter | Имеет Setter |
| -------- | ------------------------------------ | ------------ | ------------ |
| isEmpty  | boolean                              | true         | false        |
| keySet   | Установить&lt;String&gt; | true         | false        |
| size     | int                                  | true         | false        |

## Операторы
### ADD

Adds all entries from the given IData to this entry

```zenscript
myMapData + data as crafttweaker.api.data.IData
```

| Параметр | Тип                                                    | Description          |
| -------- | ------------------------------------------------------ | -------------------- |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Описание отсутствует |

## Утилиты

| Тип результата                                                 | Является неявным |
| -------------------------------------------------------------- | ---------------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | true             |

