# IData

The IData interface is a generic Interface for handling Data like NBT. You can cast about all primitives (short, double, string, int, ...) as well as certain arrays to IData. Remember that while they offer similar features, IData and their counterparts are NOT the same, which is why they will be referred to as DataTypes (e.g. [ByteData](/vanilla/api/data/ByteData)).

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.IData;
```


## Methoden

### asList

Gets a List<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
IData.asList() as stdlib.List<IData>
{Display: {lore: ["Hello", "World"]}}.asList();
```
### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
IData.asMap() as IData[string]
{Display: {lore: ["Hello", "World"]}}.asMap();
```
### asString

Gets the String representation of this IData

Return Type: string

```zenscript
IData.asString() as string
{Display: {lore: ["Hello", "World"]}}.asString();
```
### contains

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Return Type: boolean

```zenscript
IData.contains(data as IData) as boolean
{Display: {lore: ["Hello", "World"]}}.contains("Display");
```
| Parameter | Type                             | Beschreibung                     |
| --------- | -------------------------------- | -------------------------------- |
| data      | [IData](/vanilla/api/data/IData) | data to check if it is contained |

### copy

Makes a copy of this IData.

 IData is immutable by default, use this to create a proper copy of the object.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
IData.copy() as IData
{Display: {lore: ["Hello", "World"]}}.copy();
```
### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Return Type: byte

```zenscript
IData.getId() as byte
{Display: {lore: ["Hello", "World"]}}.getId();
```
### getString

Gets the String representation of the internal INBT tag

Return Type: string

```zenscript
IData.getString() as string
{Display: {lore: ["Hello", "World"]}}.getString();
```

