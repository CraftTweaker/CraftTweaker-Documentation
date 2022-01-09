# LongArrayData



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.LongArrayData;
```


## Implemented Interfaces
LongArrayData implements the following interfaces. That means all methods defined in these interfaces are also available in LongArrayData

- [ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors

No Description Provided
```zenscript
new LongArrayData(internal as long[]) as LongArrayData
```
| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| internal | long[] | No Description Provided |



## Утилиты

| Тип результата                                       | Является неявным |
| ---------------------------------------------------- | ---------------- |
| boolean                                              | false            |
| [ICollectionData](/vanilla/api/data/ICollectionData) | false            |
| [INumberData](/vanilla/api/data/INumberData)         | false            |

## Методы

:::group{name=asBoolean}

Return Type: boolean

```zenscript
// LongArrayData.asBoolean() as boolean

[100000, 800000, 50000].asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// LongArrayData.asCollection() as ICollectionData

[100000, 800000, 50000].asCollection();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Returns: null if this IData is not a map.  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// LongArrayData.asMap() as IData[string]

[100000, 800000, 50000].asMap();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
// LongArrayData.asNumber() as INumberData

[100000, 800000, 50000].asNumber();
```

:::

:::group{name=asString}

Gets the String representation of this IData

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// LongArrayData.asString() as string

[100000, 800000, 50000].asString();
```

:::

:::group{name=contains}

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Returns: true if the given IData is contained in this IData  
Return Type: boolean

```zenscript
// LongArrayData.contains(data as IData) as boolean

[100000, 800000, 50000].contains("Display");
```

| Параметр | Тип                              | Описание                         |
| -------- | -------------------------------- | -------------------------------- |
| data     | [IData](/vanilla/api/data/IData) | data to check if it is contained |


:::

:::group{name=getId}

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// LongArrayData.getId() as byte

[100000, 800000, 50000].getId();
```

:::

:::group{name=getString}

Gets the String representation of the internal INBT tag

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// LongArrayData.getString() as string

[100000, 800000, 50000].getString();
```

:::


