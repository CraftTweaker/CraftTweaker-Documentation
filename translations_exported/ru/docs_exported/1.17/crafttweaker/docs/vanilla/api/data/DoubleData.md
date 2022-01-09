# DoubleData



## Импорт класса

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
| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| internal | double | No Description Provided |



## Утилиты

| Тип результата                                       | Является неявным |
| ---------------------------------------------------- | ---------------- |
| boolean                                              | false            |
| byte                                                 | false            |
| double                                               | false            |
| float                                                | false            |
| [ICollectionData](/vanilla/api/data/ICollectionData) | false            |
| int                                                  | false            |
| [INumberData](/vanilla/api/data/INumberData)         | false            |
| long                                                 | false            |
| short                                                | false            |

## Методы

:::group{name=asBoolean}

Return Type: boolean

```zenscript
// DoubleData.asBoolean() as boolean

3.25.asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// DoubleData.asCollection() as ICollectionData

3.25.asCollection();
```

:::

:::group{name=asList}

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Returns: null if this IData is not a list.  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// DoubleData.asList() as stdlib.List<IData>

3.25.asList();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Returns: null if this IData is not a map.  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// DoubleData.asMap() as IData[string]

3.25.asMap();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
// DoubleData.asNumber() as INumberData

3.25.asNumber();
```

:::

:::group{name=asString}

Gets the String representation of this IData

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// DoubleData.asString() as string

3.25.asString();
```

:::

:::group{name=getByte}

Gets the value of this [IData](/vanilla/api/data/IData) as a byte

Returns: the byte value of this [IData](/vanilla/api/data/IData)  
Return Type: byte

```zenscript
// DoubleData.getByte() as byte

3.25.getByte();
```

:::

:::group{name=getDouble}

Gets the value of this [IData](/vanilla/api/data/IData) as a double

Returns: the double value of this [IData](/vanilla/api/data/IData)  
Return Type: double

```zenscript
// DoubleData.getDouble() as double

3.25.getDouble();
```

:::

:::group{name=getFloat}

Gets the value of this [IData](/vanilla/api/data/IData) as a float

Returns: the float value of this [IData](/vanilla/api/data/IData)  
Return Type: float

```zenscript
// DoubleData.getFloat() as float

3.25.getFloat();
```

:::

:::group{name=getId}

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// DoubleData.getId() as byte

3.25.getId();
```

:::

:::group{name=getInt}

Gets the value of this [IData](/vanilla/api/data/IData) as an int

Returns: the int value of this [IData](/vanilla/api/data/IData)  
Return Type: int

```zenscript
// DoubleData.getInt() as int

3.25.getInt();
```

:::

:::group{name=getLong}

Gets the value of this [IData](/vanilla/api/data/IData) as a long

Returns: the long value of this [IData](/vanilla/api/data/IData)  
Return Type: long

```zenscript
// DoubleData.getLong() as long

3.25.getLong();
```

:::

:::group{name=getShort}

Gets the value of this [IData](/vanilla/api/data/IData) as a short

Returns: the short value of this [IData](/vanilla/api/data/IData)  
Return Type: short

```zenscript
// DoubleData.getShort() as short

3.25.getShort();
```

:::

:::group{name=getString}

Gets the String representation of the internal INBT tag

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// DoubleData.getString() as string

3.25.getString();
```

:::


