# MCSuggestionContext

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestionContext;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | true |

## Methods

### equals

Return Type: boolean

```zenscript
MCSuggestionContext.equals(o as Object) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No Description Provided |
### getParent

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCSuggestionContext.getParent() as MCCommandNode
myMCSuggestionContext.getParent()
```
### getStartPos

Return Type: int

```zenscript
MCSuggestionContext.getStartPos() as int
myMCSuggestionContext.getStartPos()
```
### hashCode

Return Type: int

```zenscript
MCSuggestionContext.hashCode() as int
myMCSuggestionContext.hashCode()
```
### toString

Return Type: String

```zenscript
MCSuggestionContext.toString() as String
myMCSuggestionContext.toString()
```

## Operators

### EQUALS

```zenscript
myMCSuggestionContext == o as Object
```



