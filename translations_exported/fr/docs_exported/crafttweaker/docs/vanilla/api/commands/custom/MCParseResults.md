# Analyser les résultats

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCParseResults
```

## Methods
### equals

Return type: boolean

```zenscript
myMCParseResults.equals(o en tant qu'objet);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getContext

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCParseResults.getContext();
```

### Obtenir des exceptions

Type de retour : Exception[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCParseResults.getExceptions();
```

### Obtenir un lecteur

Type de retour : [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader)

```zenscript
myMCParseResults.getReader();
```

### hashCode

Return type: int

```zenscript
myMCParseResults.hashCode();
```

### toString

Return type: String

```zenscript
myMCParseResults.toString();
```


## Operators
### EQUALS

```zenscript
myMCParseResults == o en tant qu'objet
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

