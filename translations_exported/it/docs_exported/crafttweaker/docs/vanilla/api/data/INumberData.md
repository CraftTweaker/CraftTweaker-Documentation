# INumberData

Represents a Number in the form of an [IData](/vanilla/api/data/IData), useful for converting between types (double to int / long for example).

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.INumberData;
```


## Interfacce Implementate
INumberData implements the following interfaces. That means all methods defined in these interfaces are also available in INumberData

- [IData](/vanilla/api/data/IData)

## Caster

| Tipo Risultato                                       | Implicito |
| ---------------------------------------------------- | --------- |
| byte                                                 | false     |
| double                                               | false     |
| float                                                | false     |
| [ICollectionData](/vanilla/api/data/ICollectionData) | false     |
| int                                                  | false     |
| [INumberData](/vanilla/api/data/INumberData)         | false     |
| long                                                 | false     |
| short                                                | false     |

## Methods

### asCollection

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
INumberData.asCollection() as ICollectionData
1.asCollection();
```

### asList

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
INumberData.asList() as stdlib.List<IData>
1.asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
INumberData.asMap() as IData[string]
1.asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
INumberData.asNumber() as INumberData
1.asNumber();
```

### asString

Gets the String representation of this IData

Return Type: string

```zenscript
INumberData.asString() as string
1.asString();
```

### contains

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Return Type: boolean

```zenscript
INumberData.contains(data as IData) as boolean
1.contains("Display");
```

| Parameter | Type                             | Description                      |
| --------- | -------------------------------- | -------------------------------- |
| data      | [IData](/vanilla/api/data/IData) | data to check if it is contained |


### copy

Makes a copy of this IData.

 IData is immutable by default, use this to create a proper copy of the object.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
INumberData.copy() as IData
1.copy();
```

### getByte

Gets the value of this [IData](/vanilla/api/data/IData) as a byte

Return Type: byte

```zenscript
INumberData.getByte() as byte
1.getByte();
```

### getDouble

Gets the value of this [IData](/vanilla/api/data/IData) as a double

Return Type: double

```zenscript
INumberData.getDouble() as double
1.getDouble();
```

### getFloat

Gets the value of this [IData](/vanilla/api/data/IData) as a float

Return Type: float

```zenscript
INumberData.getFloat() as float
1.getFloat();
```

### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Return Type: byte

```zenscript
INumberData.getId() as byte
1.getId();
```

### getInt

Gets the value of this [IData](/vanilla/api/data/IData) as an int

Return Type: int

```zenscript
INumberData.getInt() as int
1.getInt();
```

### getLong

Gets the value of this [IData](/vanilla/api/data/IData) as a long

Return Type: long

```zenscript
INumberData.getLong() as long
1.getLong();
```

### getShort

Gets the value of this [IData](/vanilla/api/data/IData) as a short

Return Type: short

```zenscript
INumberData.getShort() as short
1.getShort();
```

### getString

Gets the String representation of the internal INBT tag

Return Type: string

```zenscript
INumberData.getString() as string
1.getString();
```


