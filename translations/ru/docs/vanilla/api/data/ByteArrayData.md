# ByteArrayData



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.data.ByteArrayData
```

## Реализованные интерфейсы
ByteArrayData implements the following interfaces. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Конструкторы
```zenscript
new crafttweaker.api.data.ByteArrayData(internal as byte[]);
```
| Параметр   | Тип    | Описание             |
| ---------- | ------ | -------------------- |
| внутренняя | байт[] | Описание отсутствует |



## Методы
### Добавить

```zenscript
[4, 1, 2].add(value as crafttweaker.api.data.IData);
[4, 1, 2].add("today");
```

| Параметр | Тип                                                    | Описание                       |
| -------- | ------------------------------------------------------ | ------------------------------ |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Значение к добавлению в список |



```zenscript
[4, 1, 2].add(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].add(1, "beautiful");
```

| Параметр | Тип                                                    | Описание                                                                  |
| -------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| index    | int                                                    | Индекс к добавлению.  Индексы последующих элементов будут увеличены на 1. |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Значение к добавлению в список                                            |


### clear

Removes every element in the list

```zenscript
[4, 1, 2].clear();
```

### get

Retrieves the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].get(index as int);
[4, 1, 2].get(0);
```

| Параметр | Тип | Описание            |
| -------- | --- | ------------------- |
| index    | int | The index (0-based) |


### удалить

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].remove(index as int);
[4, 1, 2].remove(0);
```

| Параметр | Тип | Описание            |
| -------- | --- | ------------------- |
| index    | int | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].set(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].set(0, "Bye");
```

| Параметр | Тип                                                    | Описание                   |
| -------- | ------------------------------------------------------ | -------------------------- |
| index    | int                                                    | The index to set (0-based) |
| value    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## Свойства

| Название | Тип | Имеет Getter | Имеет Setter |
| -------- | --- | ------------ | ------------ |
| size     | int | true         | false        |

