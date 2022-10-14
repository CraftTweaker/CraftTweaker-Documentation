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
| boolean                                              | false       |
| byte                                                 | false       |
| double                                               | false       |
| float                                                | false       |
| [ICollectionData](/vanilla/api/data/ICollectionData) | false       |
| int                                                  | false       |
| [INumberData](/vanilla/api/data/INumberData)         | false       |
| long                                                 | false       |
| short                                                | false       |

## Methoden

:::group{name=asBoolean}

Return Type: boolean

```zenscript
// FloatData.asBoolean() as boolean

8.5.asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// FloatData.asCollection() as ICollectionData

8.5.asCollection();
```

:::

:::group{name=asList}

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Returns: null if this IData is not a list.  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// FloatData.asList() as stdlib.List<IData>

8.5.asList();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Returns: null if this IData is not a map.  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// FloatData.asMap() as IData[string]

8.5.asMap();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
// FloatData.asNumber() as INumberData

8.5.asNumber();
```

:::

:::group{name=asString}

Gets the String representation of this IData

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// FloatData.asString() as string

8.5.asString();
```

:::

:::group{name=getByte}

Gets the value of this [IData](/vanilla/api/data/IData) as a byte

Returns: the byte value of this [IData](/vanilla/api/data/IData)  
Return Type: byte

```zenscript
// FloatData.getByte() as byte

8.5.getByte();
```

:::

:::group{name=getDouble}

Gets the value of this [IData](/vanilla/api/data/IData) as a double

Returns: the double value of this [IData](/vanilla/api/data/IData)  
Return Type: double

```zenscript
// FloatData.getDouble() as double

8.5.getDouble();
```

:::

:::group{name=getFloat}

Gets the value of this [IData](/vanilla/api/data/IData) as a float

Returns: the float value of this [IData](/vanilla/api/data/IData)  
Return Type: float

```zenscript
// FloatData.getFloat() as float

8.5.getFloat();
```

:::

:::group{name=getId}

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// FloatData.getId() as byte

8.5.getId();
```

:::

:::group{name=getInt}

Gets the value of this [IData](/vanilla/api/data/IData) as an int

Returns: the int value of this [IData](/vanilla/api/data/IData)  
Return Type: int

```zenscript
// FloatData.getInt() as int

8.5.getInt();
```

:::

:::group{name=getLong}

Gets the value of this [IData](/vanilla/api/data/IData) as a long

Returns: the long value of this [IData](/vanilla/api/data/IData)  
Return Type: long

```zenscript
// FloatData.getLong() as long

8.5.getLong();
```

:::

:::group{name=getShort}

Gets the value of this [IData](/vanilla/api/data/IData) as a short

Returns: the short value of this [IData](/vanilla/api/data/IData)  
Return Type: short

```zenscript
// FloatData.getShort() as short

8.5.getShort();
```

:::

:::group{name=getString}

Gets the String representation of the internal INBT tag

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// FloatData.getString() as string

8.5.getString();
```

:::


