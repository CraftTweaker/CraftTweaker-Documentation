# Argument MC analysé

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCParsedArgument
```

## Methods
### equals

Return type: boolean

```zenscript
myMCParsedArgument.equals(o en tant qu'objet);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### Gamme d'obtention

Type de retour : [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCParsedArgument.getRange();
```

### hashCode

Return type: int

```zenscript
myMCParsedArgument.hashCode();
```

### toString

Return type: String

```zenscript
myMCParsedArgument.toString();
```


## Operators
### EQUALS

```zenscript
myMCParsedArgument == o en tant qu'objet
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

