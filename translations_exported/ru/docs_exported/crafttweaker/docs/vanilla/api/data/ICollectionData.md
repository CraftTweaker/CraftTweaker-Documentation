# ICollectionData

The ICollection data is used to represent a collection of [IData](/vanilla/api/data/IData) like a List<IData>

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ICollectionData;
```


## Implemented Interfaces
ICollectionData implements the following interfaces. That means all methods defined in these interfaces are also available in ICollectionData

- [IData](/vanilla/api/data/IData)

## Methods

:::group{name=getFromMembers}

Creates the most specific ICollectionData form possible for the provided members.

 Tries to return (in order) [ByteArrayData](/vanilla/api/data/ByteArrayData), [IntArrayData](/vanilla/api/data/IntArrayData), [LongArrayData](/vanilla/api/data/LongArrayData) or if neither is applicable [ListData](/vanilla/api/data/ListData)

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
ICollectionData.getFromMembers(members as IData[]) as ICollectionData
```

| Параметр | Тип                                | Description             |
| -------- | ---------------------------------- | ----------------------- |
| members  | [IData](/vanilla/api/data/IData)[] | No Description Provided |


:::

## Утилиты

| Тип результата                                       | Является неявным |
| ---------------------------------------------------- | ---------------- |
| [ICollectionData](/vanilla/api/data/ICollectionData) | false            |
| [INumberData](/vanilla/api/data/INumberData)         | false            |

## Methods

:::group{name=add}



Return Type: void

```zenscript
ICollectionData.add(value as IData) as void
new ListData(["Hello", "World"]).add("today");
```

| Параметр | Тип                              | Description                  |
| -------- | -------------------------------- | ---------------------------- |
| value    | [IData](/vanilla/api/data/IData) | The value to add to the list |


:::

:::group{name=add}



Return Type: void

```zenscript
ICollectionData.add(index as int, value as IData) as void
new ListData(["Hello", "World"]).add(1, "beautiful");
```

| Параметр | Тип                              | Description                                                          |
| -------- | -------------------------------- | -------------------------------------------------------------------- |
| index    | int                              | The index to add to. Subsequent items will be moved one index higher |
| value    | [IData](/vanilla/api/data/IData) | The value to add to the list                                         |


:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
ICollectionData.asCollection() as ICollectionData
new ListData(["Hello", "World"]).asCollection();
```

:::

:::group{name=asList}

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
ICollectionData.asList() as stdlib.List<IData>
new ListData(["Hello", "World"]).asList();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
ICollectionData.asMap() as IData[string]
new ListData(["Hello", "World"]).asMap();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
ICollectionData.asNumber() as INumberData
new ListData(["Hello", "World"]).asNumber();
```

:::

:::group{name=asString}

Gets the String representation of this IData

Return Type: string

```zenscript
ICollectionData.asString() as string
new ListData(["Hello", "World"]).asString();
```

:::

:::group{name=clear}

Removes every element in the list

Return Type: void

```zenscript
ICollectionData.clear() as void
new ListData(["Hello", "World"]).clear();
```

:::

:::group{name=contains}

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Return Type: boolean

```zenscript
ICollectionData.contains(data as IData) as boolean
new ListData(["Hello", "World"]).contains("Display");
```

| Параметр | Тип                              | Description                      |
| -------- | -------------------------------- | -------------------------------- |
| data     | [IData](/vanilla/api/data/IData) | data to check if it is contained |


:::

:::group{name=copy}

Makes a copy of this IData.

 IData is immutable by default, use this to create a proper copy of the object.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.copy() as IData
new ListData(["Hello", "World"]).copy();
```

:::

:::group{name=getAt}

Retrieves the [IData](/vanilla/api/data/IData) stored at the given index.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.getAt(index as int) as IData
new ListData(["Hello", "World"]).getAt(0);
```

| Параметр | Тип | Description         |
| -------- | --- | ------------------- |
| index    | int | The index (0-based) |


:::

:::group{name=getId}

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Return Type: byte

```zenscript
ICollectionData.getId() as byte
new ListData(["Hello", "World"]).getId();
```

:::

:::group{name=getString}

Gets the String representation of the internal INBT tag

Return Type: string

```zenscript
ICollectionData.getString() as string
new ListData(["Hello", "World"]).getString();
```

:::

:::group{name=remove}

Removes the [IData](/vanilla/api/data/IData) stored at the given index.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.remove(index as int) as IData
new ListData(["Hello", "World"]).remove(0);
```

| Параметр | Тип | Description         |
| -------- | --- | ------------------- |
| index    | int | The index (0-based) |


:::

:::group{name=setAt}

Sets the item at the provided index to the given value

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.setAt(index as int, value as IData) as IData
new ListData(["Hello", "World"]).setAt(0, "Bye");
```

| Параметр | Тип                              | Description                |
| -------- | -------------------------------- | -------------------------- |
| index    | int                              | The index to set (0-based) |
| value    | [IData](/vanilla/api/data/IData) | The new Value              |


:::


## Свойства

| Название | Тип | Имеет Getter | Имеет Setter |
| -------- | --- | ------------ | ------------ |
| size     | int | true         | false        |

