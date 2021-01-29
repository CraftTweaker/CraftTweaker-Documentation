# MCArgumentCommandNode

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCArgumentCommandNode;
```


## Extending MCCommandNode

MCArgumentCommandNode extends [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode). That means all methods available in [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) are also available in MCArgumentCommandNode

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methods

### createBuilder

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCArgumentCommandNode.createBuilder() as MCRequiredArgumentBuilder
myMCArgumentCommandNode.createBuilder();
```
### equals

Return Type: boolean

```zenscript
MCArgumentCommandNode.equals(o as Object) as boolean
```
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |

### getCustomSuggestions

Return Type: [MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
MCArgumentCommandNode.getCustomSuggestions() as MCSuggestionProvider
myMCArgumentCommandNode.getCustomSuggestions();
```
### hashCode

Return Type: int

```zenscript
MCArgumentCommandNode.hashCode() as int
myMCArgumentCommandNode.hashCode();
```
### toString

Return Type: string

```zenscript
MCArgumentCommandNode.toString() as string
myMCArgumentCommandNode.toString();
```

## 연산자

### EQUALS

```zenscript
myMCArgumentCommandNode == o as Object
```



