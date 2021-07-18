# FloatData



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.FloatData;
```


## Implemented Interfaces
FloatData implements the following interfaces. That means all methods defined in these interfaces are also available in FloatData

- [INumberData](/vanilla/api/data/INumberData)

## Constructors

No Description Provided
```zenscript
new FloatData(internal as float) as FloatData
```

| Parameter | Type  | Beschreibung            |
| --------- | ----- | ----------------------- |
| internal  | float | No Description Provided |



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
FloatData.asCollection() as ICollectionData
8.5.asCollection();
```

### asList

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
FloatData.asList() as stdlib.List<IData>
8.5.asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
FloatData.asMap() as IData[string]
8.5.asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
FloatData.asNumber() as INumberData
8.5.asNumber();
```

### getByte

Gets the value of this [IData](/vanilla/api/data/IData) as a byte

Return Type: byte

```zenscript
FloatData.getByte() as byte
8.5.getByte();
```

### getDouble

Gets the value of this [IData](/vanilla/api/data/IData) as a double

Return Type: double

```zenscript
FloatData.getDouble() as double
8.5.getDouble();
```

### getFloat

Gets the value of this [IData](/vanilla/api/data/IData) as a float

Return Type: float

```zenscript
FloatData.getFloat() as float
8.5.getFloat();
```

### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Return Type: byte

```zenscript
FloatData.getId() as byte
8.5.getId();
```

### getInt

Gets the value of this [IData](/vanilla/api/data/IData) as an int

Return Type: int

```zenscript
FloatData.getInt() as int
8.5.getInt();
```

### getLong

Gets the value of this [IData](/vanilla/api/data/IData) as a long

Return Type: long

```zenscript
FloatData.getLong() as long
8.5.getLong();
```

### getShort

Gets the value of this [IData](/vanilla/api/data/IData) as a short

Return Type: short

```zenscript
FloatData.getShort() as short
8.5.getShort();
```

### getString

Gets the String representation of the internal INBT tag

Return Type: string

```zenscript
FloatData.getString() as string
8.5.getString();
```


