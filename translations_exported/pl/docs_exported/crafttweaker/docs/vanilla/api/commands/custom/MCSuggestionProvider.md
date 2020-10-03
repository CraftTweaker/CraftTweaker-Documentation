# MCSuggestionProvider

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionProvider
```

## Constructors
```zenscript
nowy crafttweaker.api.commands.custom.MCSuggestionProvider(zabaw jako function.BiFunction<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCSuggestionsBuilder, crafttweaker.api.commands.custom.MCSuggestions>);
```
| Parameter | Type                                                                                                                                                                                                                                                                                                                                               | Description             |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| zabawa    | Funkcja. BiFunkcja&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder), [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | No description provided |



## Methods
### equals

Return type: boolean

```zenscript
myMCSuggestionProvider.equals(o jako obiekt);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### sugestie getSuggestions

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionProvider.getSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter   | Type                                                                                                       | Description             |
| ----------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| kontekst    | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | No description provided |
| konstruktor | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


### hashCode

Return type: int

```zenscript
myMCSuggestionProvider.hashCode();
```

### toString

Return type: String

```zenscript
myMCSuggestionProvider.toString();
```


## Operators
### EQUALS

```zenscript
myMCSuggestionProvider == o jako obiekt
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

