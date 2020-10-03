# MCSuggestionsBuilder

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionsBuilder
```

## Methods
### add

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.add(altro come crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter | Type                                                                                                       | Description                 |
| --------- | ---------------------------------------------------------------------------------------------------------- | --------------------------- |
| other     | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Nessuna descrizione fornita |


### build

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionsBuilder.build();
```

### createOffset

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.createOffset(start as int);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| inizio    | int  | Nessuna descrizione fornita |


### equals

Return type: boolean

```zenscript
myMCSuggestionsBuilder.equals(o come Object);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### getInput

Return type: String

```zenscript
myMCSuggestionsBuilder.getInput();
```

### ottiRimanente

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

### riavvia

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.restart();
```

### suggerisci

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(text as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| testo     | String | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(value as int);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| value     | int  | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(testo come stringa, suggerimento come stringa);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| testo     | String | Nessuna descrizione fornita |
| tooltip   | String | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(value as int, tooltip as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| value     | int    | Nessuna descrizione fornita |
| tooltip   | String | Nessuna descrizione fornita |


### toString

Return type: String

```zenscript
myMCSuggestionsBuilder.toString();
```


## Operators
### EQUALS

```zenscript
myMCSuggestionsBuilder == o come oggetto
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |

