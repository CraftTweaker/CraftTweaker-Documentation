# DoubleData



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.DoubleData;
```


## Implemented Interfaces
DoubleData implements the following interfaces. That means all methods defined in these interfaces are also available in DoubleData

- [INumberData](/vanilla/api/data/INumberData)

## Constructors

No Description Provided
```zenscript
new DoubleData(internal as double) as DoubleData
```

| Parameter | Type | Description |
|-----------|------|-------------|
| internal | double | No Description Provided |



## Casters

| Result type | Is Implicit |
|-------------|-------------|
| byte | false |
| double | false |
| float | false |
| [ICollectionData](/vanilla/api/data/ICollectionData) | false |
| int | false |
| [INumberData](/vanilla/api/data/INumberData) | false |
| long | false |
| short | false |

## Methods

### asCollection

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
DoubleData.asCollection() as ICollectionData
3.25.asCollection();
```

### asList

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
DoubleData.asList() as stdlib.List<IData>
3.25.asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
DoubleData.asMap() as IData[string]
3.25.asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
DoubleData.asNumber() as INumberData
3.25.asNumber();
```

### getByte

Gets the value of this [IData](/vanilla/api/data/IData) as a byte

Return Type: byte

```zenscript
DoubleData.getByte() as byte
3.25.getByte();
```

### getDouble

Gets the value of this [IData](/vanilla/api/data/IData) as a double

Return Type: double

```zenscript
DoubleData.getDouble() as double
3.25.getDouble();
```

### getFloat

Gets the value of this [IData](/vanilla/api/data/IData) as a float

Return Type: float

```zenscript
DoubleData.getFloat() as float
3.25.getFloat();
```

### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Return Type: byte

```zenscript
DoubleData.getId() as byte
3.25.getId();
```

### getInt

Gets the value of this [IData](/vanilla/api/data/IData) as an int

Return Type: int

```zenscript
DoubleData.getInt() as int
3.25.getInt();
```

### getLong

Gets the value of this [IData](/vanilla/api/data/IData) as a long

Return Type: long

```zenscript
DoubleData.getLong() as long
3.25.getLong();
```

### getShort

Gets the value of this [IData](/vanilla/api/data/IData) as a short

Return Type: short

```zenscript
DoubleData.getShort() as short
3.25.getShort();
```

### getString

Gets the String representation of the internal INBT tag

Return Type: string

```zenscript
DoubleData.getString() as string
3.25.getString();
```


