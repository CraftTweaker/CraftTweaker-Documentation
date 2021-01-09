# ICollectionData

The ICollection data is used to represent a collection of [IData](/vanilla/api/data/IData) like a List<IData>

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ICollectionData;
```


## Implemented Interfaces
ICollectionData implements the following interfaces. That means all methods defined in these interfaces are also available in ICollectionData

- [IData](/vanilla/api/data/IData)
## Methods

### add



Return Type: void

```zenscript
ICollectionData.add(value as IData) as void
new ListData(["Hello", "World"]).add("today");
```
| Parameter | Type                             | Description                  |
| --------- | -------------------------------- | ---------------------------- |
| value     | [IData](/vanilla/api/data/IData) | The value to add to the list |



Return Type: void

```zenscript
ICollectionData.add(index as int, value as IData) as void
new ListData(["Hello", "World"]).add(1, "beautiful");
```
| Parameter | Type                             | Description                                                          |
| --------- | -------------------------------- | -------------------------------------------------------------------- |
| index     | int                              | The index to add to. Subsequent items will be moved one index higher |
| value     | [IData](/vanilla/api/data/IData) | The value to add to the list                                         |

### clear

Removes every element in the list

Return Type: void

```zenscript
ICollectionData.clear() as void
new ListData(["Hello", "World"]).clear();
```
### getAt

Retrieves the [IData](/vanilla/api/data/IData) stored at the given index.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.getAt(index as int) as IData
new ListData(["Hello", "World"]).getAt(0);
```
| Parameter | Type | Description         |
| --------- | ---- | ------------------- |
| index     | int  | The index (0-based) |

### remove

Removes the [IData](/vanilla/api/data/IData) stored at the given index.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.remove(index as int) as IData
new ListData(["Hello", "World"]).remove(0);
```
| Parameter | Type | Description         |
| --------- | ---- | ------------------- |
| index     | int  | The index (0-based) |

### setAt

Sets the item at the provided index to the given value

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.setAt(index as int, value as IData) as IData
new ListData(["Hello", "World"]).setAt(0, "Bye");
```
| Parameter | Type                             | Description                |
| --------- | -------------------------------- | -------------------------- |
| index     | int                              | The index to set (0-based) |
| value     | [IData](/vanilla/api/data/IData) | The new Value              |


## Properties

| 名称   | Type | Has Getter | Has Setter |
| ---- | ---- | ---------- | ---------- |
| size | int  | true       | false      |

