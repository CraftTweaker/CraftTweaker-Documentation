# MCSuggestionsBuilder

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionsBuilder
```

## Metodi
### aggiungi

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.add(altro come crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parametro | Tipo                                                                                                       | Descrizione                 |
| --------- | ---------------------------------------------------------------------------------------------------------- | --------------------------- |
| altri     | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Nessuna descrizione fornita |


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

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| inizio    | int  | Nessuna descrizione fornita |


### uguale

Tipo restituito: booleano

```zenscript
myMCSuggestionsBuilder.equals(o come Object);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |


### getInput

Tipo di ritorno: Stringa

```zenscript
myMCSuggestionsBuilder.getInput();
```

### ottiRimanente

Tipo di ritorno: Stringa

```zenscript
myMCSuggestionsBuilder.getRemaining();
```

### getStart

Tipo di restituzione: int

```zenscript
myMCSuggestionsBuilder.getStart();
```

### hashCode

Tipo di restituzione: int

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

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| testo     | Stringa | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(value as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| valore    | int  | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(testo come stringa, suggerimento come stringa);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| testo     | Stringa | Nessuna descrizione fornita |
| tooltip   | Stringa | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(value as int, tooltip as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| valore    | int     | Nessuna descrizione fornita |
| tooltip   | Stringa | Nessuna descrizione fornita |


### toString

Tipo di ritorno: Stringa

```zenscript
myMCSuggestionsBuilder.toString();
```


## Operatori
### EQUALI

```zenscript
myMCSuggestionsBuilder == o come oggetto
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | vero      |

