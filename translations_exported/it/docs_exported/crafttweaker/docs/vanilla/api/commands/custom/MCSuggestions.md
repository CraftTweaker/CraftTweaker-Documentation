# MCSuggestions

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCSuggestions
```

## Methods
### crea

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.create(comando come stringa, suggerimenti come raccolta<crafttweaker.api.commands.custom.MCSuggestion>);
```

| Parameter    | Type                                                                                                                     | Description                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| command      | String                                                                                                                   | Nessuna descrizione fornita |
| suggerimenti | Collezione&lt;[crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | Nessuna descrizione fornita |


### empty

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.empty();
```

### equals

Return type: boolean

```zenscript
myMCSuggestions.equals(o come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### getList

Tipo di ritorno: Lista&lt;com.mojang.brigadier.suggestion.Suggestion&gt;

```zenscript
myMCSuggestions.getList();
```

### getRange

Tipo restituito: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestions.getRange();
```

### hashCode

Return type: int

```zenscript
myMCSuggestions.hashCode();
```

### isEmpty

Return type: boolean

```zenscript
myMCSuggestions.isEmpty();
```

### merge

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.merge(comando come stringa, input come raccolta<crafttweaker.api.commands.custom.MCSuggestions>);
```

| Parameter | Type                                                                                                                       | Description                 |
| --------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| command   | String                                                                                                                     | Nessuna descrizione fornita |
| input     | Collezione&lt;[crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | Nessuna descrizione fornita |


### toString

Return type: String

```zenscript
myMCSuggestions.toString();
```


## Operators
### EQUALS

```zenscript
myMCSuggestions == o come oggetto
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |

