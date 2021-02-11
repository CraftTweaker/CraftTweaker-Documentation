# ShortData



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ShortData;
```


## Implemented Interfaces
ShortData implements the following interfaces. That means all methods defined in these interfaces are also available in ShortData

- [INumberData](/vanilla/api/data/INumberData)

## Constructors

No Description Provided
```zenscript
new ShortData(internal as short) as ShortData
```

| Параметр | Тип   | Description             |
| -------- | ----- | ----------------------- |
| internal | short | No Description Provided |



## Утилиты

| Тип результата                                       | Является неявным |
| ---------------------------------------------------- | ---------------- |
| byte                                                 | false            |
| double                                               | false            |
| float                                                | false            |
| [ICollectionData](/vanilla/api/data/ICollectionData) | false            |
| int                                                  | false            |
| [INumberData](/vanilla/api/data/INumberData)         | false            |
| long                                                 | false            |
| short                                                | false            |

## Methods

### asCollection

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
ShortData.asCollection() as ICollectionData
1058.asCollection();
```

### asList

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
ShortData.asList() as stdlib.List<IData>
1058.asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
ShortData.asMap() as IData[string]
1058.asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
ShortData.asNumber() as INumberData
1058.asNumber();
```

### getByte

Gets the value of this [IData](/vanilla/api/data/IData) as a byte

Return Type: byte

```zenscript
ShortData.getByte() as byte
1058.getByte();
```

### getDouble

Gets the value of this [IData](/vanilla/api/data/IData) as a double

Return Type: double

```zenscript
ShortData.getDouble() as double
1058.getDouble();
```

### getFloat

Gets the value of this [IData](/vanilla/api/data/IData) as a float

Return Type: float

```zenscript
ShortData.getFloat() as float
1058.getFloat();
```

### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Return Type: byte

```zenscript
ShortData.getId() as byte
1058.getId();
```

### getInt

Gets the value of this [IData](/vanilla/api/data/IData) as an int

Return Type: int

```zenscript
ShortData.getInt() as int
1058.getInt();
```

### getLong

Gets the value of this [IData](/vanilla/api/data/IData) as a long

Return Type: long

```zenscript
ShortData.getLong() as long
1058.getLong();
```

### getShort

Gets the value of this [IData](/vanilla/api/data/IData) as a short

Return Type: short

```zenscript
ShortData.getShort() as short
1058.getShort();
```

### getString

Gets the String representation of the internal INBT tag

Return Type: string

```zenscript
ShortData.getString() as string
1058.getString();
```


