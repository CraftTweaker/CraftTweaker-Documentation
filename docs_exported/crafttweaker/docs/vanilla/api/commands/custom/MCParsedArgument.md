# MCParsedArgument

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.commands.custom.MCParsedArgument;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | true |

## Methods

### equals

Return Type: boolean

```zenscript
MCParsedArgument.equals(o as Object) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No Description Provided |
### getRange

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCParsedArgument.getRange() as MCStringRange
myMCParsedArgument.getRange()
```
### hashCode

Return Type: int

```zenscript
MCParsedArgument.hashCode() as int
myMCParsedArgument.hashCode()
```
### toString

Return Type: String

```zenscript
MCParsedArgument.toString() as String
myMCParsedArgument.toString()
```

## Operators

### EQUALS

```zenscript
myMCParsedArgument == o as Object
```



