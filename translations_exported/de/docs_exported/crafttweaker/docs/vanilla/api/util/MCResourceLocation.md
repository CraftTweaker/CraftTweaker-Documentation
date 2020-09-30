# MCResource-Standort

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.MCResourceLocation
```

## Implemented Interfaces
MCResourceLocation implementiert die folgenden Schnittstellen. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
```zenscript
neue crafttweaker.api.util.MCResourceLocation(Namensraum als String, Pfad als String);
```
| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| namespace | String | No description provided |
| path      | String | No description provided |



## Methoden
### vergleichen

Return type: int

```zenscript
myMCResourceLocation.compareTo(p_compareTo_1_ als crafttweaker.api.util.MCResourceLocation);
```

| Parameter            | Type                                                                             | Beschreibung            |
| -------------------- | -------------------------------------------------------------------------------- | ----------------------- |
| p_vergleiche zu_1_ | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No description provided |


### equals

Return type: boolean

```zenscript
myMCResourceLocation.equals(andere als Objekt);
```

| Parameter | Type   | Beschreibung            |
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

| Name          | Type   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | String | true       | false      |
| namespace     | String | true       | false      |
| path          | String | true       | false      |

