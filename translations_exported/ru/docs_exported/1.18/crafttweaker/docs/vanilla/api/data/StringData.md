# StringData



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.StringData;
```


## Implemented Interfaces
StringData implements the following interfaces. That means all methods defined in these interfaces are also available in StringData

- [IData](/vanilla/api/data/IData)

## Constructors

No Description Provided
```zenscript
new StringData(internal as string) as StringData
```
| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| internal | string | No Description Provided |



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
// StringData.asBoolean() as boolean

new StringData("Hello").asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// StringData.asCollection() as ICollectionData

new StringData("Hello").asCollection();
```

:::

:::group{name=asList}

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Returns: null if this IData is not a list.  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// StringData.asList() as stdlib.List<IData>

new StringData("Hello").asList();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Returns: null if this IData is not a map.  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// StringData.asMap() as IData[string]

new StringData("Hello").asMap();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
// StringData.asNumber() as INumberData

new StringData("Hello").asNumber();
```

:::

:::group{name=asString}

Gets the String representation of this IData

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// StringData.asString() as string

new StringData("Hello").asString();
```

:::

:::group{name=getId}

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// StringData.getId() as byte

new StringData("Hello").getId();
```

:::

:::group{name=getString}

Gets the String representation of the internal INBT tag

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// StringData.getString() as string

new StringData("Hello").getString();
```

:::


## Операторы

:::group{name=ADD}

Concatenates the two string Datas and returns the result.

```zenscript
myStringData + data as StringData
new StringData("Hello") + new StringData("World")
```

:::


