# MCSuggestion

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestion
```

## Methods
### appliquer

Return type: String

```zenscript
myMCSuggestion.apply(input as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| input     | String | No description provided |


### comparer à

Return type: int

```zenscript
myMCSuggestion.compareTo(o as crafttweaker.api.commands.custom.MCSuggestion);
```

| Parameter | Type                                                                                       | Description             |
| --------- | ------------------------------------------------------------------------------------------ | ----------------------- |
| o         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No description provided |


### Comparer à Ignorer le cas

Return type: int

```zenscript
myMCSuggestion.compareToIgnoreCase(b comme crafttweaker.api.commands.custom.MCSuggestion);
```

| Parameter | Type                                                                                       | Description             |
| --------- | ------------------------------------------------------------------------------------------ | ----------------------- |
| b         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No description provided |


### equals

Return type: boolean

```zenscript
myMCSuggestion.equals(o en tant qu'objet);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### agrandir

Type de retour : [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
myMCSuggestion.expand(commande comme String, range as crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| command   | String                                                                                       | No description provided |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No description provided |


### Gamme d'obtention

Type de retour : [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestion.getRange();
```

### getText

Return type: String

```zenscript
myMCSuggestion.getText();
```

### format@@0 getTooltip

Return type: String

```zenscript
myMCSuggestion.getTooltip();
```

### hashCode

Return type: int

```zenscript
myMCSuggestion.hashCode();
```

### toString

Return type: String

```zenscript
myMCSuggestion.toString();
```


## Operators
### EQUALS

```zenscript
myMCSuggestion == o en tant qu'objet
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

