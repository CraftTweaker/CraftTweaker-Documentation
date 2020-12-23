# MCSuggestions

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestions;
```


## Methods

### create

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestions.create(command as String, suggestions as Collection) as MCSuggestions
```
| Parameter | Type | Description |
|-----------|------|-------------|
| command | String | No Description Provided |
| suggestions | Collection | No Description Provided |
### empty

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestions.empty() as MCSuggestions
MCSuggestions.empty()
```
### merge

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestions.merge(command as String, input as Collection) as MCSuggestions
```
| Parameter | Type | Description |
|-----------|------|-------------|
| command | String | No Description Provided |
| input | Collection | No Description Provided |
## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | true |

## Methods

### equals

Return Type: boolean

```zenscript
MCSuggestions.equals(o as Object) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No Description Provided |
### getList

Return Type: stdlib.List

```zenscript
MCSuggestions.getList() as stdlib.List
myMCSuggestions.getList()
```
### getRange

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCSuggestions.getRange() as MCStringRange
myMCSuggestions.getRange()
```
### hashCode

Return Type: int

```zenscript
MCSuggestions.hashCode() as int
myMCSuggestions.hashCode()
```
### isEmpty

Return Type: boolean

```zenscript
MCSuggestions.isEmpty() as boolean
myMCSuggestions.isEmpty()
```
### toString

Return Type: String

```zenscript
MCSuggestions.toString() as String
myMCSuggestions.toString()
```

## Operators

### EQUALS

```zenscript
myMCSuggestions == o as Object
```



