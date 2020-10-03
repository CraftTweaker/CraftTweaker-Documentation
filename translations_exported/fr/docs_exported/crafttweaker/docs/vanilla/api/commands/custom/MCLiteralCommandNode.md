# Liste des nœuds du cours

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCLiteralCommandNode
```

## Implemented Interfaces
MCLiteralCommandNode implémente les interfaces suivantes. That means any method available to them can also be used on this class.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Methods
### createBuilder

Type de retour : [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
monMCLiteralCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
monMCLiteralCommandNode.equals(o en tant qu'objet);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getLiteral

Return type: String

```zenscript
monMCLiteralCommandNode.getLiteral();
```

### hashCode

Return type: int

```zenscript
myMCLiteralCommandNode.hashCode();
```

### isValidInput

Return type: boolean

```zenscript
monMCLiteralCommandNode.isValidInput(input as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| input     | String | No description provided |


### toString

Return type: String

```zenscript
monMCLiteralCommandNode.toString();
```


## Operators
### EQUALS

```zenscript
myMCLiteralCommandNode == o en tant qu'objet
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

