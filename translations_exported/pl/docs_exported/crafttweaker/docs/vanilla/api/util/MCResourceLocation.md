# MCResourceLocation

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.MCResourceLocation
```

## Implemented Interfaces
MCResourceLocation implementuje następujące interfejsy. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
```zenscript
nowe crafttweaker.api.util.MCResourceLocation(nazwa jako String, ścieżka jako String);
```
| Parameter       | Type   | Description             |
| --------------- | ------ | ----------------------- |
| przestrzeń nazw | String | No description provided |
| path            | String | No description provided |



## Methods
### porównaj do

Return type: int

```zenscript
myMCResourceLocation.compareTo(p_compareTo_1_ jako crafttweaker.api.util.MCResourceLocation);
```

| Parameter      | Type                                                                             | Description             |
| -------------- | -------------------------------------------------------------------------------- | ----------------------- |
| p_Porówna_1_ | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No description provided |


### equals

Return type: boolean

```zenscript
myMCResourceLocation.equals(inne jako obiekt);
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

| Name            | Type   | Has Getter | Has Setter |
| --------------- | ------ | ---------- | ---------- |
| commandString   | String | true       | false      |
| przestrzeń nazw | String | true       | false      |
| path            | String | true       | false      |

