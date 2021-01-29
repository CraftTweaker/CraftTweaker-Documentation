# MapData



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.MapData;
```


## Implemented Interfaces
MapData implements the following interfaces. That means all methods defined in these interfaces are also available in MapData

- [IData](/vanilla/api/data/IData)
## Constructors

No Description Provided
```zenscript
new MapData() as MapData
new MapData();
```
No Description Provided
```zenscript
new MapData(map as IData[string]) as MapData
```
| Parameter | Type | Description |
|-----------|------|-------------|
| map | [IData](/vanilla/api/data/IData)[string] | No Description Provided |


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [IData](/vanilla/api/data/IData)[string] | true |

## Methods

### contains

Checks if the Map contains the given key.

Return Type: boolean

```zenscript
MapData.contains(key as string) as boolean
{Hello : "World", Somewhere: "Over the rainbow"}.contains("Hello");
```
| Parameter | Type | Description |
|-----------|------|-------------|
| key | string | The key to search for |

### getAt

Retrieves the value associated with the key

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
MapData.getAt(key as string) as IData
{Hello : "World", Somewhere: "Over the rainbow"}.getAt("Hello");
```
| Parameter | Type | Description |
|-----------|------|-------------|
| key | string | The key to search for |

### merge

Merges this map and the other map.
 If entries from this map and the other map share the values are tried to be merged.
 If that does not work, then the value from the other map is used.

Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
MapData.merge(other as MapData) as MapData
{Hello : "World", Somewhere: "Over the rainbow"}.merge({Doodle: "Do});
```
| Parameter | Type | Description |
|-----------|------|-------------|
| other | [MapData](/vanilla/api/data/MapData) | The other map. |

### put

Adds sets the value for the given key or creates a new entry if it did not exist before.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
MapData.put(key as string, value as IData) as IData
{Hello : "World", Somewhere: "Over the rainbow"}.put("Hello", "Goodbye");
```
| Parameter | Type | Description |
|-----------|------|-------------|
| key | string | The key to set the value for. |
| value | [IData](/vanilla/api/data/IData) | The value to set. |

### putAll

Adds all entries from the given map into this one.
 Can override existing keys.

Return Type: void

```zenscript
MapData.putAll(map as IData[string]) as void
{Hello : "World", Somewhere: "Over the rainbow"}.putAll({Hello: "Goodbye", Item: "Bedrock"});
```
| Parameter | Type | Description |
|-----------|------|-------------|
| map | [IData](/vanilla/api/data/IData)[string] | The other entries to be added to this map |

### remove

Removes the entry with the given key from the Map

Return Type: void

```zenscript
MapData.remove(key as string) as void
{Hello : "World", Somewhere: "Over the rainbow"}.remove("Somewhere");
```
| Parameter | Type | Description |
|-----------|------|-------------|
| key | string | The key of the entry to remove |


## Operators

### ADD

Adds all entries from the given IData to this entry

```zenscript
myMapData + data as IData
```



## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| isEmpty | boolean | true | false |
| keySet | Set&lt;string&gt; | true | false |
| size | int | true | false |

