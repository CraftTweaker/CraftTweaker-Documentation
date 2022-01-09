# MCSuggestionProvider

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestionProvider;
```


## Constructors

No Description Provided
```zenscript
new MCSuggestionProvider(fun as BiFunction<MCCommandContext,MCSuggestionsBuilder,MCSuggestions>) as MCSuggestionProvider
```
| Parametro  | Tipo                                                                                                                                                                                                                                  | Descrizione             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| divertente | BiFunction&lt;[MCCommandContext](/vanilla/api/commands/custom/MCCommandContext),[MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder),[MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | No Description Provided |



## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| string         | sì        |

## Metodi

:::group{name=equals}

Return Type: boolean

```zenscript
MCSuggestionProvider.equals(o as Object) as boolean
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


:::

:::group{name=getSuggestions}

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestionProvider.getSuggestions(context as MCCommandContext, builder as MCSuggestionsBuilder) as MCSuggestions
```

| Parametro   | Tipo                                                                      | Descrizione             |
| ----------- | ------------------------------------------------------------------------- | ----------------------- |
| contesto    | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | No Description Provided |
| costruttore | [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No Description Provided |


:::

:::group{name=hashCode}

Return Type: int

```zenscript
// MCSuggestionProvider.hashCode() as int

myMCSuggestionProvider.hashCode();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
// MCSuggestionProvider.toString() as string

myMCSuggestionProvider.toString();
```

:::


## Operators

:::group{name=EQUALS}

```zenscript
myMCSuggestionProvider == o come oggetto
```

:::


