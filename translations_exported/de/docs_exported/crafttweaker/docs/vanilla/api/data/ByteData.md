# ByteData



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ByteData;
```


## Implemented Interfaces
ByteData implements the following interfaces. That means all methods defined in these interfaces are also available in ByteData

- [INumberData](/vanilla/api/data/INumberData)

## Constructors

No Description Provided
```zenscript
new ByteData(internal as byte) as ByteData
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| internal  | byte | No Description Provided |



## Casters

| Result type                                          | Is Implicit |
| ---------------------------------------------------- | ----------- |
| byte                                                 | false       |
| double                                               | false       |
| float                                                | false       |
| [ICollectionData](/vanilla/api/data/ICollectionData) | false       |
| int                                                  | false       |
| [INumberData](/vanilla/api/data/INumberData)         | false       |
| long                                                 | false       |
| short                                                | false       |

## Methoden

### asCollection

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
ByteData.asCollection() as ICollectionData
4.asCollection();
```

### asList

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
ByteData.asList() as stdlib.List<IData>
4.asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
ByteData.asMap() as IData[string]
4.asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
ByteData.asNumber() as INumberData
4.asNumber();
```

### getByte

Gets the value of this [IData](/vanilla/api/data/IData) as a byte

Return Type: byte

```zenscript
ByteData.getByte() as byte
4.getByte();
```

### getDouble

Gets the value of this [IData](/vanilla/api/data/IData) as a double

Return Type: double

```zenscript
ByteData.getDouble() as double
4.getDouble();
```

### getFloat

Gets the value of this [IData](/vanilla/api/data/IData) as a float

Return Type: float

```zenscript
ByteData.getFloat() as float
4.getFloat();
```

### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Return Type: byte

```zenscript
ByteData.getId() as byte
4.getId();
```

### getInt

Gets the value of this [IData](/vanilla/api/data/IData) as an int

Return Type: int

```zenscript
ByteData.getInt() as int
4.getInt();
```

### getLong

Gets the value of this [IData](/vanilla/api/data/IData) as a long

Return Type: long

```zenscript
ByteData.getLong() as long
4.getLong();
```

### getShort

Gets the value of this [IData](/vanilla/api/data/IData) as a short

Return Type: short

```zenscript
ByteData.getShort() as short
4.getShort();
```

### getString

Gets the String representation of the internal INBT tag

Return Type: string

```zenscript
ByteData.getString() as string
4.getString();
```


