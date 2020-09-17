# MCSuggestionProvider

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionProvider
```

## Costruttori
```zenscript
new crafttweaker.api.commands.custom.MCSuggestionProvider(fun as function.BiFunction<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCSuggestionsBuilder, crafttweaker.api.commands.custom.MCSuggestions>);
```
| Parametro  | Tipo                                                                                                                                                                                                                                                                                                                                                | Descrizione                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| divertente | function.BiFunction&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder), [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | Nessuna descrizione fornita |



## Metodi
### uguale

Tipo restituito: booleano

```zenscript
myMCSuggestionProvider.equals(o come oggetto);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |


### getSuggestions

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionProvider.getSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parametro   | Tipo                                                                                                       | Descrizione                 |
| ----------- | ---------------------------------------------------------------------------------------------------------- | --------------------------- |
| contesto    | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | Nessuna descrizione fornita |
| costruttore | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Nessuna descrizione fornita |


### hashCode

Tipo di restituzione: int

```zenscript
myMCSuggestionProvider.hashCode();
```

### toString

Tipo di ritorno: Stringa

```zenscript
myMCSuggestionProvider.toString();
```


## Operatori
### EQUALI

```zenscript
myMCSuggestionProvider == o come oggetto
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | vero      |

