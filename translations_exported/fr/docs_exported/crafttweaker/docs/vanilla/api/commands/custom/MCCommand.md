# Commande MCC

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommand
```

## Constructors
```zenscript
new crafttweaker.api.commands.custom.MCCommand(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, Integer>);
```
| Parameter | Type                                                                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| amusant   | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Integer&gt; | No description provided |



## Methods
### equals

Return type: boolean

```zenscript
myMCCommand.equals(o en tant qu'objet);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### hashCode

Return type: int

```zenscript
myMCCommand.hashCode();
```

### Exécuter

Return type: int

```zenscript
myMCCommand.run(contexte comme crafttweaker.api.commands.custom.MCCommandContext);
```

| Parameter | Type                                                                                               | Description             |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| Contexte  | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No description provided |


### toString

Return type: String

```zenscript
myMCCommand.toString();
```


## Operators
### EQUALS

```zenscript
myMCCommand == o comme objet
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

