# IntArrayData



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.IntArrayData;
```


## Implemented Interfaces
IntArrayData implements the following interfaces. That means all methods defined in these interfaces are also available in IntArrayData

- [ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors

No Description Provided
```zenscript
new IntArrayData(internal as int[]) as IntArrayData
```
| Parameter | Type  | Description             |
| --------- | ----- | ----------------------- |
| internal  | int[] | No Description Provided |



## Casters

| Result type                                          | Is Implicit |
| ---------------------------------------------------- | ----------- |
| boolean型                                             | false       |
| [ICollectionData](/vanilla/api/data/ICollectionData) | false       |
| [INumberData](/vanilla/api/data/INumberData)         | false       |

## Methods

:::group{name=asBoolean}

Return Type: boolean

```zenscript
// IntArrayData.asBoolean() as boolean

[4, 128, 256, 1024].asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// IntArrayData.asCollection() as ICollectionData

[4, 128, 256, 1024].asCollection();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Returns: null if this IData is not a map.  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// IntArrayData.asMap() as IData[string]

[4, 128, 256, 1024].asMap();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
// IntArrayData.asNumber() as INumberData

[4, 128, 256, 1024].asNumber();
```

:::

:::group{name=asString}

Gets the String representation of this IData

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// IntArrayData.asString() as string

[4, 128, 256, 1024].asString();
```

:::

:::group{name=contains}

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Returns: true if the given IData is contained in this IData  
Return Type: boolean

```zenscript
// IntArrayData.contains(data as IData) as boolean

[4, 128, 256, 1024].contains("Display");
```

| Parameter | Type                             | Description                      |
| --------- | -------------------------------- | -------------------------------- |
| data      | [IData](/vanilla/api/data/IData) | data to check if it is contained |


:::

:::group{name=getId}

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// IntArrayData.getId() as byte

[4, 128, 256, 1024].getId();
```

:::

:::group{name=getString}

Gets the String representation of the internal INBT tag

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// IntArrayData.getString() as string

[4, 128, 256, 1024].getString();
```

:::


