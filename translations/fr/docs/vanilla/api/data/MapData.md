# MapData



This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.data.MapData
```

## Implemented Interfaces
MapData implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructors
```zenscript
new crafttweaker.api.data.MapData();
```
```zenscript
new crafttweaker.api.data.MapData(map as crafttweaker.api.data.IData[String]);
```
| Paramètre | Type de texte                                                  | Libellé                 |
| --------- | -------------------------------------------------------------- | ----------------------- |
| map       | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | No description provided |



## Méthodes
### asList

Gets a List<IData> representation of this IData, returns null on anything but [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Returns: `null if this IData is not a list.`

Returns List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
myMapData.asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Returns: `null if this IData is not a map.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
myMapData.asMap();
```

### asString

Gets the String representation of this IData

 Returns: `String that represents this IData (value and type).`

Returns String

```zenscript
myMapData.asString();
```

### contains

Checks if the Map contains the given key.

Returns boolean

```zenscript
myMapData.contains(key as String);
myMapData.contains("Hello");
```

| Paramètre | Type de texte        | Libellé               |
| --------- | -------------------- | --------------------- |
| key       | Chaîne de caractères | The key to search for |


### copy

Makes a copy of this IData.

 IData is immutable by default, use this to create a proper copy of the object.

 Returns: `a copy of this IData.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.copy();
```

### get

Retrieves the value associated with the key

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.get(key as String);
myMapData.get("Hello");
```

| Paramètre | Type de texte        | Libellé               |
| --------- | -------------------- | --------------------- |
| key       | Chaîne de caractères | The key to search for |


### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

 Returns: `ID of the NBT tag that this data represents.`

Returns byte

```zenscript
myMapData.getId();
```

### getString

Gets the String representation of the internal INBT tag

 Returns: `String that represents the internal INBT of this IData.`

Returns String

```zenscript
myMapData.getString();
```

### merge

Merges this map and the other map. If entries from this map and the other map share the values are tried to be merged. If that does not work, then the value from the other map is used.

Returns [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)

```zenscript
myMapData.merge(other as crafttweaker.api.data.MapData);
myMapData.merge({Doodle: "Do});
```

| Paramètre | Type de texte                                              | Libellé        |
| --------- | ---------------------------------------------------------- | -------------- |
| other     | [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | The other map. |


### put

Adds sets the value for the given key or creates a new entry if it did not exist before.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.put(key as String, value as crafttweaker.api.data.IData);
myMapData.put("Hello", "Goodbye");
```

| Paramètre | Type de texte                                          | Libellé                       |
| --------- | ------------------------------------------------------ | ----------------------------- |
| key       | Chaîne de caractères                                   | The key to set the value for. |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to set.             |


### putAll

Adds all entries from the given map into this one. Can override existing keys.

```zenscript
myMapData.putAll(map as crafttweaker.api.data.IData[String]);
myMapData.putAll({Hello: "Goodbye", Item: "Bedrock"});
```

| Paramètre | Type de texte                                                  | Libellé                                   |
| --------- | -------------------------------------------------------------- | ----------------------------------------- |
| map       | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | The other entries to be added to this map |


### Enlever

Removes the entry with the given key from the Map

```zenscript
myMapData.remove(key as String);
myMapData.remove("Somewhere");
```

| Paramètre | Type de texte        | Libellé                        |
| --------- | -------------------- | ------------------------------ |
| key       | Chaîne de caractères | The key of the entry to remove |



## Propriétés

| Nom     | Type de texte  | Has Getter | Has Setter |
| ------- | -------------- | ---------- | ---------- |
| isEmpty | boolean        | vrai       | Faux       |
| keySet  | Régler<String> | vrai       | Faux       |
| taille  | Indice         | vrai       | Faux       |

## Opérateurs
### AJOUTER

Adds all entries from the given IData to this entry

```zenscript
myMapData + data as crafttweaker.api.data.IData
```

| Paramètre | Type de texte                                          | Libellé                 |
| --------- | ------------------------------------------------------ | ----------------------- |
| données   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | No description provided |

## Casters

| Result type                                                    | Is Implicit |
| -------------------------------------------------------------- | ----------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | vrai        |

