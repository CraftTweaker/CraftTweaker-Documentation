# IntArrayData



This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.data.IntArrayData
```

## Implemented Interfaces
IntArrayData implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors
```zenscript
new crafttweaker.api.data.IntArrayData(internal as int[]);
```
| Parameter | Type  | Description             |
| --------- | ----- | ----------------------- |
| internal  | int[] | No description provided |



## Methods
### add

```zenscript
[4, 128, 256, 1024].add(value as crafttweaker.api.data.IData);
[4, 128, 256, 1024].add("today");
```

| Parameter | Type                                                   | Description                  |
| --------- | ------------------------------------------------------ | ---------------------------- |
| value     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
[4, 128, 256, 1024].add(index as int, value as crafttweaker.api.data.IData);
[4, 128, 256, 1024].add(1, "beautiful");
```

| Parameter | Type                                                   | Description                                                          |
| --------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| index     | int                                                    | The index to add to. Subsequent items will be moved one index higher |
| value     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list                                         |


### asList

Gets a List<IData> representation of this IData, returns null on anything but [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Returns: `null if this IData is not a list.`

Returns List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
[4, 128, 256, 1024].asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Returns: `null if this IData is not a map.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
[4, 128, 256, 1024].asMap();
```

### asString

Gets the String representation of this IData

 Returns: `String that represents this IData (value and type).`

Returns String

```zenscript
[4, 128, 256, 1024].asString();
```

### clear

Removes every element in the list

```zenscript
[4, 128, 256, 1024].clear();
```

### contains

Checks if this IData contains another IData, mainly used in subclasses of [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Returns boolean

```zenscript
[4, 128, 256, 1024].contains(data as crafttweaker.api.data.IData);
[4, 128, 256, 1024].contains("Display");
```

| Parameter | Type                                                   | Description                      |
| --------- | ------------------------------------------------------ | -------------------------------- |
| data      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data to check if it is contained |


### copy

Makes a copy of this IData.

 IData is immutable by default, use this to create a proper copy of the object.

 Returns: `a copy of this IData.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].copy();
```

### get

Retrieves the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].get(index as int);
[4, 128, 256, 1024].get(0);
```

| Parameter | Type | Description         |
| --------- | ---- | ------------------- |
| index     | int  | The index (0-based) |


### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

 Returns: `ID of the NBT tag that this data represents.`

Returns byte

```zenscript
[4, 128, 256, 1024].getId();
```

### getString

Gets the String representation of the internal INBT tag

 Returns: `String that represents the internal INBT of this IData.`

Returns String

```zenscript
[4, 128, 256, 1024].getString();
```

### remove

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].remove(index as int);
[4, 128, 256, 1024].remove(0);
```

| Parameter | Type | Description         |
| --------- | ---- | ------------------- |
| index     | int  | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].set(index as int, value as crafttweaker.api.data.IData);
[4, 128, 256, 1024].set(0, "Bye");
```

| Parameter | Type                                                   | Description                |
| --------- | ------------------------------------------------------ | -------------------------- |
| index     | int                                                    | The index to set (0-based) |
| value     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## Properties

| Name | Type | Has Getter | Has Setter |
| ---- | ---- | ---------- | ---------- |
| size | int  | true       | false      |

