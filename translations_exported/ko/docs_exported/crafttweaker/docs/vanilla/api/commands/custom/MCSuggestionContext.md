# MCSuggestionContext

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestionContext;
```


## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methods

### equals

Return Type: boolean

```zenscript
MCSuggestionContext.equals(o as Object) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


### getParent

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCSuggestionContext.getParent() as MCCommandNode
myMCSuggestionContext.getParent();
```

### getStartPos

Return Type: int

```zenscript
MCSuggestionContext.getStartPos() as int
myMCSuggestionContext.getStartPos();
```

### hashCode

Return Type: int

```zenscript
MCSuggestionContext.hashCode() as int
myMCSuggestionContext.hashCode();
```

### toString

Return Type: string

```zenscript
MCSuggestionContext.toString() as string
myMCSuggestionContext.toString();
```


## 연산자

### EQUALS

```zenscript
myMCSuggestionContext == o as Object
```




