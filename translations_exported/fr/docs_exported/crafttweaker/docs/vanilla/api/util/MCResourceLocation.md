# format@@0 MCRessourceLocation

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.MCResourceLocation
```

## Implemented Interfaces
MCResourceLocation implémente les interfaces suivantes. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
```zenscript
new crafttweaker.api.util.MCResourceLocation(namespace as String, path as String);
```
| Parameter      | Type   | Description             |
| -------------- | ------ | ----------------------- |
| espace de noms | String | No description provided |
| path           | String | No description provided |



## Methods
### comparer à

Return type: int

```zenscript
myMCResourceLocation.compareTo(p_compareTo_1_ comme crafttweaker.api.util.MCResourceLocation);
```

| Parameter    | Type                                                                             | Description             |
| ------------ | -------------------------------------------------------------------------------- | ----------------------- |
| Comparé à 1_ | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No description provided |


### equals

Return type: boolean

```zenscript
myMCResourceLocation.equals(autre que l'objet);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| other     | Object | No description provided |


### getNamespace

Return type: String

```zenscript
myMCResourceLocation.getNamespace();
```

### getPath

Return type: String

```zenscript
myMCResourceLocation.getPath();
```

### hashCode

Return type: int

```zenscript
myMCResourceLocation.hashCode();
```

### toString

Return type: String

```zenscript
myMCResourceLocation.toString();
```


## Properties

| Name           | Type   | Has Getter | Has Setter |
| -------------- | ------ | ---------- | ---------- |
| commandString  | String | true       | false      |
| espace de noms | String | true       | false      |
| path           | String | true       | false      |

