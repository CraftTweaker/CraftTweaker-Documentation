# MCSuggestionProvider

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionProvider
```

## Constructors
```zenscript
new crafttweaker.api.commands.custom.MCSuggestionProvider(fun as function.BiFunction<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCSuggestionsBuilder, crafttweaker.api.commands.custom.MCSuggestions>);
```
| Parameter  | Type                                                                                                                                                                                                                                                                                                                                                | Description                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| divertente | function.BiFunction&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder), [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | Nessuna descrizione fornita |



## Methods
### equals

Return type: boolean

```zenscript
myMCSuggestionProvider.equals(o come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### getSuggestions

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionProvider.getSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter   | Type                                                                                                       | Description                 |
| ----------- | ---------------------------------------------------------------------------------------------------------- | --------------------------- |
| contesto    | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | Nessuna descrizione fornita |
| costruttore | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Nessuna descrizione fornita |


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
myMCSuggestionProvider == o come oggetto
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |

