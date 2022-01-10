# ICollectionData

The ICollection data is used to represent a collection of [IData](/vanilla/api/data/IData) like a List<IData>

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ICollectionData;
```


## Implemented Interfaces
ICollectionData implements the following interfaces. That means all methods defined in these interfaces are also available in ICollectionData

- [IData](/vanilla/api/data/IData)

## Static Methods

:::group{name=getFromMembers}

Creates the most specific ICollectionData form possible for the provided members. <br />  <br />  Tries to return (in order) [ByteArrayData](/vanilla/api/data/ByteArrayData), [IntArrayData](/vanilla/api/data/IntArrayData), [LongArrayData](/vanilla/api/data/LongArrayData) or if neither is applicable [ListData](/vanilla/api/data/ListData)

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
ICollectionData.getFromMembers(members as IData[]) as ICollectionData
```

| Parameter | Type                               | Description             |
| --------- | ---------------------------------- | ----------------------- |
| members   | [IData](/vanilla/api/data/IData)[] | No Description Provided |


:::

## Casters

| Result type                                          | Is Implicit |
| ---------------------------------------------------- | ----------- |
| boolean                                              | false       |
| [ICollectionData](/vanilla/api/data/ICollectionData) | false       |
| [INumberData](/vanilla/api/data/INumberData)         | false       |

## Methods

:::group{name=add}



Return Type: void

```zenscript
// ICollectionData.add(value as IData) as void

new ListData(["Hello", "World"]).add("today");
```

| Parameter | Type                             | Description                  |
| --------- | -------------------------------- | ---------------------------- |
| value     | [IData](/vanilla/api/data/IData) | The value to add to the list |


:::

:::group{name=add}



Return Type: void

```zenscript
// ICollectionData.add(index as int, value as IData) as void

new ListData(["Hello", "World"]).add(1, "beautiful");
```

| Parameter | Type                             | Description                                                          |
| --------- | -------------------------------- | -------------------------------------------------------------------- |
| index     | int                              | The index to add to. Subsequent items will be moved one index higher |
| value     | [IData](/vanilla/api/data/IData) | The value to add to the list                                         |


:::

:::group{name=asBoolean}

Return Type: boolean

```zenscript
// ICollectionData.asBoolean() as boolean

new ListData(["Hello", "World"]).asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// ICollectionData.asCollection() as ICollectionData

new ListData(["Hello", "World"]).asCollection();
```

:::

:::group{name=asList}

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Returns: null if this IData is not a list.  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// ICollectionData.asList() as stdlib.List<IData>

new ListData(["Hello", "World"]).asList();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Returns: null if this IData is not a map.  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// ICollectionData.asMap() as IData[string]

new ListData(["Hello", "World"]).asMap();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
// ICollectionData.asNumber() as INumberData

new ListData(["Hello", "World"]).asNumber();
```

:::

:::group{name=asString}

Gets the String representation of this IData

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// ICollectionData.asString() as string

new ListData(["Hello", "World"]).asString();
```

:::

:::group{name=clear}

Removes every element in the list

Return Type: void

```zenscript
// ICollectionData.clear() as void

new ListData(["Hello", "World"]).clear();
```

:::

:::group{name=contains}

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Returns: true if the given IData is contained in this IData  
Return Type: boolean

```zenscript
// ICollectionData.contains(data as IData) as boolean

new ListData(["Hello", "World"]).contains("Display");
```

| Parameter | Type                             | Description                      |
| --------- | -------------------------------- | -------------------------------- |
| data      | [IData](/vanilla/api/data/IData) | data to check if it is contained |


:::

:::group{name=getAt}

Retrieves the [IData](/vanilla/api/data/IData) stored at the given index.

Returns: The [IData](/vanilla/api/data/IData)  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ICollectionData.getAt(index as int) as IData

new ListData(["Hello", "World"]).getAt(0);
```

| Parameter | Type | Description         |
| --------- | ---- | ------------------- |
| index     | int  | The index (0-based) |


:::

:::group{name=getId}

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// ICollectionData.getId() as byte

new ListData(["Hello", "World"]).getId();
```

:::

:::group{name=getString}

Gets the String representation of the internal INBT tag

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// ICollectionData.getString() as string

new ListData(["Hello", "World"]).getString();
```

:::

:::group{name=isEmpty}

Return Type: boolean

```zenscript
// ICollectionData.isEmpty() as boolean

new ListData(["Hello", "World"]).isEmpty();
```

:::

:::group{name=remove}

Removes the [IData](/vanilla/api/data/IData) stored at the given index.

Returns: The [IData](/vanilla/api/data/IData) that was removed  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ICollectionData.remove(index as int) as IData

new ListData(["Hello", "World"]).remove(0);
```

| Parameter | Type | Description         |
| --------- | ---- | ------------------- |
| index     | int  | The index (0-based) |


:::

:::group{name=setAt}

Sets the item at the provided index to the given value

Returns: The replaced value  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ICollectionData.setAt(index as int, value as IData) as IData

new ListData(["Hello", "World"]).setAt(0, "Bye");
```

| Parameter | Type                             | Description                |
| --------- | -------------------------------- | -------------------------- |
| index     | int                              | The index to set (0-based) |
| value     | [IData](/vanilla/api/data/IData) | The new Value              |


:::


## Properties

| Name  | Type    | Has Getter | Has Setter | Description             |
| ----- | ------- | ---------- | ---------- | ----------------------- |
| empty | boolean | true       | false      | No Description Provided |
| size  | int     | true       | false      | No Description Provided |

