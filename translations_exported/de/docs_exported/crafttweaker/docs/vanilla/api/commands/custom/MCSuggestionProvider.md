# MCSuggestionProvider

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionProvider
```

## Constructors
```zenscript
neuer crafttweaker.api.commands.custom.MCSuggestionProvider(fun as function.BiFunction<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCSuggestionsBuilder, crafttweaker.api.commands.custom.MCSuggestions>);
```
| Parameter | Type                                                                                                                                                                                                                                                                                                                                                | Beschreibung            |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| lustig    | function.BiFunction&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder), [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | No description provided |



## Methoden
### equals

Return type: boolean

```zenscript
myMCSuggestionProvider.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getVorschläge

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionProvider.getSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter | Type                                                                                                       | Beschreibung            |
| --------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| kontext   | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | No description provided |
| bauer     | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


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


## Operatoren
### EQUALS

```zenscript
myMCSuggestionProvider == o als Objekt
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

