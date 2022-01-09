# ListData



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.data.ListData
```

## Implemented Interfaces
ListData implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors
```zenscript
new crafttweaker.api.data.ListData();
```
```zenscript
new crafttweaker.api.data.ListData(list as List<crafttweaker.api.data.IData>);
```
| Параметр | Тип                                                          | Описание             | IsOptional | Default Value |
| -------- | ------------------------------------------------------------ | -------------------- | ---------- | ------------- |
| list     | List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | Описание отсутствует | true       | null          |



## Методы
### add

```zenscript
["Hello", "World", "!"].add(value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add("today");
```

| Параметр | Тип                                                    | Описание                     |
| -------- | ------------------------------------------------------ | ---------------------------- |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
["Hello", "World", "!"].add(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add(1, "beautiful");
```

| Параметр | Тип                                                    | Описание                                                             |
| -------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| index    | int                                                    | The index to add to. Subsequent items will be moved one index higher |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list                                         |


### clear

Removes every element in the list

```zenscript
["Hello", "World", "!"].clear();
```

### get

Retrieves the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].get(index as int);
["Hello", "World", "!"].get(0);
```

| Параметр | Тип | Описание            |
| -------- | --- | ------------------- |
| index    | int | The index (0-based) |


### remove

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].remove(index as int);
["Hello", "World", "!"].remove(0);
```

| Параметр | Тип | Описание            |
| -------- | --- | ------------------- |
| index    | int | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].set(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].set(0, "Bye");
```

| Параметр | Тип                                                    | Описание                   |
| -------- | ------------------------------------------------------ | -------------------------- |
| index    | int                                                    | The index to set (0-based) |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## Свойства

| Название | Тип | Имеет Getter | Имеет Setter |
| -------- | --- | ------------ | ------------ |
| size     | int | true         | false        |

## Утилиты

| Тип результата                                               | Является неявным |
| ------------------------------------------------------------ | ---------------- |
| List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | true             |

