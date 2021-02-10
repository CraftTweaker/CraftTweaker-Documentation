# IntData



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.IntData;
```


## Implemented Interfaces
IntData implements the following interfaces. That means all methods defined in these interfaces are also available in IntData

- [INumberData](/vanilla/api/data/INumberData)

## Constructors

No Description Provided
```zenscript
new IntData(internal as int) as IntData
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| internal  | int  | No Description Provided |



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

## Methods

### asCollection

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
IntData.asCollection() as ICollectionData
8192.asCollection();
```

### asList

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
IntData.asList() as stdlib.List<IData>
8192.asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
IntData.asMap() as IData[string]
8192.asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
IntData.asNumber() as INumberData
8192.asNumber();
```

### getByte

Gets the value of this [IData](/vanilla/api/data/IData) as a byte

Return Type: byte

```zenscript
IntData.getByte() as byte
8192.getByte();
```

### getDouble

Gets the value of this [IData](/vanilla/api/data/IData) as a double

Return Type: double

```zenscript
IntData.getDouble() as double
8192.getDouble();
```

### getFloat

Gets the value of this [IData](/vanilla/api/data/IData) as a float

Return Type: float

```zenscript
IntData.getFloat() as float
8192.getFloat();
```

### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Return Type: byte

```zenscript
IntData.getId() as byte
8192.getId();
```

### getInt

Gets the value of this [IData](/vanilla/api/data/IData) as an int

Return Type: int

```zenscript
IntData.getInt() as int
8192.getInt();
```

### getLong

Gets the value of this [IData](/vanilla/api/data/IData) as a long

Return Type: long

```zenscript
IntData.getLong() as long
8192.getLong();
```

### getShort

Gets the value of this [IData](/vanilla/api/data/IData) as a short

Return Type: short

```zenscript
IntData.getShort() as short
8192.getShort();
```

### getString

Gets the String representation of the internal INBT tag

Return Type: string

```zenscript
IntData.getString() as string
8192.getString();
```


