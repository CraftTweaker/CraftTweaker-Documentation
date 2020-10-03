# MCSuggestionsBuilder

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionsBuilder
```

## Methods
### add

Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.add(autres que crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter | Type                                                                                                       | Description             |
| --------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| other     | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


### build

Type de retour : [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionsBuilder.build();
```

### créerOffset

Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.createOffset(start as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| Début     | int  | No description provided |


### equals

Return type: boolean

```zenscript
myMCSuggestionsBuilder.equals(o en tant qu'objet) ;
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getInput

Return type: String

```zenscript
myMCSuggestionsBuilder.getInput();
```

### Rester en cours

Return type: String

```zenscript
myMCSuggestionsBuilder.getRemaining();
```

### getStart

Return type: int

```zenscript
myMCSuggestionsBuilder.getStart();
```

### hashCode

Return type: int

```zenscript
myMCSuggestionsBuilder.hashCode();
```

### Redémarrer

Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.restart();
```

### suggérer

Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(text as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| texte     | String | No description provided |



Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(value as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| value     | int  | No description provided |



Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(text as String, tooltip as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| texte     | String | No description provided |
| infobulle | String | No description provided |



Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(value as int, tooltip as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| value     | int    | No description provided |
| infobulle | String | No description provided |


### toString

Return type: String

```zenscript
myMCSuggestionsBuilder.toString();
```


## Operators
### EQUALS

```zenscript
myMCSuggestionsBuilder == o en tant qu'objet
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

