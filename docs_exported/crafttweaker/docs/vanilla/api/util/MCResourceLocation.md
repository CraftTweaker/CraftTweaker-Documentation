# MCResourceLocation

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.util.MCResourceLocation;
```


## Implemented Interfaces
MCResourceLocation implements the following interfaces. That means all methods defined in these interfaces are also available in MCResourceLocation

- Comparable&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt;
## Constructors


```zenscript
new MCResourceLocation(namespace as String, path as String) as MCResourceLocation
```
| Parameter | Type | Description |
|-----------|------|-------------|
| namespace | String | Usually a ModId |
| path | String | May only contain lower-cased alphanumeric values, as well as / and _ |

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | true |

## Methods

### compareTo

Return Type: int

```zenscript
MCResourceLocation.compareTo(other as MCResourceLocation) as int
```
| Parameter | Type | Description |
|-----------|------|-------------|
| other | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |
### equals

Return Type: boolean

```zenscript
MCResourceLocation.equals(other as Object) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| other | Object | No Description Provided |
### getNamespace

Return Type: String

```zenscript
MCResourceLocation.getNamespace() as String
myMCResourceLocation.getNamespace()
```
### getPath

Return Type: String

```zenscript
MCResourceLocation.getPath() as String
myMCResourceLocation.getPath()
```
### hashCode

Return Type: int

```zenscript
MCResourceLocation.hashCode() as int
myMCResourceLocation.hashCode()
```
### toString

Return Type: String

```zenscript
MCResourceLocation.toString() as String
myMCResourceLocation.toString()
```

## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| commandString | String | true | false |
| namespace | String | true | false |
| path | String | true | false |

