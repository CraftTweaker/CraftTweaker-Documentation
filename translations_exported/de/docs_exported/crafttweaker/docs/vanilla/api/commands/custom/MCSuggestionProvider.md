# MCSuggestionProvider

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestionProvider;
```


## Constructors

No Description Provided
```zenscript
new MCSuggestionProvider(fun as BiFunction<MCCommandContext,MCSuggestionsBuilder,MCSuggestions>) as MCSuggestionProvider
```
| Parameter | Type                                                                                                                                                                                                                                  | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| lustig    | BiFunction&lt;[MCCommandContext](/vanilla/api/commands/custom/MCCommandContext),[MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder),[MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | No Description Provided |


## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methoden

### equals

Return Type: boolean

```zenscript
MCSuggestionProvider.equals(o as Object) as boolean
```
| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |

### getVorschläge

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestionProvider.getSuggestions(context as MCCommandContext, builder as MCSuggestionsBuilder) as MCSuggestions
```
| Parameter | Type                                                                       | Beschreibung            |
| --------- | -------------------------------------------------------------------------- | ----------------------- |
| kontext   | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)          | No Description Provided |
| bauer     | [MCSuggestions-Builder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No Description Provided |

### hashCode

Return Type: int

```zenscript
MCSuggestionProvider.hashCode() as int
myMCSuggestionProvider.hashCode();
```
### toString

Return Type: string

```zenscript
MCSuggestionProvider.toString() as string
myMCSuggestionProvider.toString();
```

## Operatoren

### EQUALS

```zenscript
myMCSuggestionProvider == o als Objekt
```



