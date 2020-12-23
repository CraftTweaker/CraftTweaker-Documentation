# MCSuggestion

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestion;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | true |

## Methods

### apply

Return Type: String

```zenscript
MCSuggestion.apply(input as String) as String
```
| Parameter | Type | Description |
|-----------|------|-------------|
| input | String | No Description Provided |
### compareTo

Return Type: int

```zenscript
MCSuggestion.compareTo(o as MCSuggestion) as int
```
| Parameter | Type | Description |
|-----------|------|-------------|
| o | [MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No Description Provided |
### compareToIgnoreCase

Return Type: int

```zenscript
MCSuggestion.compareToIgnoreCase(b as MCSuggestion) as int
```
| Parameter | Type | Description |
|-----------|------|-------------|
| b | [MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No Description Provided |
### equals

Return Type: boolean

```zenscript
MCSuggestion.equals(o as Object) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No Description Provided |
### expandWith

Return Type: [MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
MCSuggestion.expandWith(command as String, range as MCStringRange) as MCSuggestion
```
| Parameter | Type | Description |
|-----------|------|-------------|
| command | String | No Description Provided |
| range | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |
### getRange

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCSuggestion.getRange() as MCStringRange
myMCSuggestion.getRange()
```
### getText

Return Type: String

```zenscript
MCSuggestion.getText() as String
myMCSuggestion.getText()
```
### getTooltip

Return Type: String

```zenscript
MCSuggestion.getTooltip() as String
myMCSuggestion.getTooltip()
```
### hashCode

Return Type: int

```zenscript
MCSuggestion.hashCode() as int
myMCSuggestion.hashCode()
```
### toString

Return Type: String

```zenscript
MCSuggestion.toString() as String
myMCSuggestion.toString()
```

## Operators

### EQUALS

```zenscript
myMCSuggestion == o as Object
```



