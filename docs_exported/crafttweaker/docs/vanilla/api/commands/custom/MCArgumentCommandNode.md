# MCArgumentCommandNode

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.  
```zenscript
crafttweaker.api.commands.custom.MCArgumentCommandNode
```

## Implemented Interfaces
MCArgumentCommandNode implements the following interfaces. That means any method available to them can also be used on this class.  
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Methods
### createBuilder

Return type: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCArgumentCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
myMCArgumentCommandNode.equals(o as Object);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No description provided |


### getCustomSuggestions

Return type: [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCArgumentCommandNode.getCustomSuggestions();
```

### hashCode

Return type: int

```zenscript
myMCArgumentCommandNode.hashCode();
```

### toString

Return type: String

```zenscript
myMCArgumentCommandNode.toString();
```


## Operators
### EQUALS

```zenscript
myMCArgumentCommandNode == o as Object
```

| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No description provided |

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | true |

