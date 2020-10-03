# Nodo de Comandos

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCLiteralCommandNode
```

## Implemented Interfaces
MCLiteralCommandNode implementa las siguientes interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Methods
### createBuilder

Tipo de retorno: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
myMCLiteralCommandNode.equals(o como objeto);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getLiteral

Return type: String

```zenscript
myMCLiteralCommandNode.getLiteral();
```

### hashCode

Return type: int

```zenscript
myMCLiteralCommandNode.hashCode();
```

### isValidInput

Return type: boolean

```zenscript
myMCLiteralCommandNode.isValidInput(entrada como cadena);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| input     | String | No description provided |


### toString

Return type: String

```zenscript
myMCLiteralCommandNode.toString();
```


## Operators
### EQUALS

```zenscript
myMCLiteralCommandNode == o como objeto
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

