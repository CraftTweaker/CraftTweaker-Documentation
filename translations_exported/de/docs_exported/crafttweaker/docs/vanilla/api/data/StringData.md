# StringData



## Diese Klasse importieren

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

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| internal  | string | No Description Provided |



## Casters

| Result type                                          | Is Implicit |
| ---------------------------------------------------- | ----------- |
| [ICollectionData](/vanilla/api/data/ICollectionData) | false       |
| [INumberData](/vanilla/api/data/INumberData)         | false       |

## Methoden

### asCollection

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
StringData.asCollection() as ICollectionData
new StringData("Hello").asCollection();
```

### asList

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
StringData.asList() as stdlib.List<IData>
new StringData("Hello").asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
StringData.asMap() as IData[string]
new StringData("Hello").asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
StringData.asNumber() as INumberData
new StringData("Hello").asNumber();
```

### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Return Type: byte

```zenscript
StringData.getId() as byte
new StringData("Hello").getId();
```

### getString

Gets the String representation of the internal INBT tag

Return Type: string

```zenscript
StringData.getString() as string
new StringData("Hello").getString();
```


## Operatoren

### ADD

Concatenates the two string Datas and returns the result.

```zenscript
myStringData + data as StringData
new StringData("Hello") + new StringData("World")
```




