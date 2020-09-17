# MCSuggestion

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCSuggestion
```

## Metodi
### applica

Tipo di ritorno: Stringa

```zenscript
myMCSuggestion.apply(input as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| input     | Stringa | Nessuna descrizione fornita |


### confrontaA

Tipo di restituzione: int

```zenscript
myMCSuggestion.compareTo(o as crafttweaker.api.commands.custom.MCSuggestion);
```

| Parametro | Tipo                                                                                       | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------- |
| o         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | Nessuna descrizione fornita |


### confrontaToIgnoreCase

Tipo di restituzione: int

```zenscript
myMCSuggestion.compareToIgnoreCase(b come crafttweaker.api.commands.custom.MCSuggestion);
```

| Parametro | Tipo                                                                                       | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------- |
| b         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | Nessuna descrizione fornita |


### uguale

Tipo restituito: booleano

```zenscript
myMCSuggestion.equals(o come oggetto);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |


### espandi

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
myMCSuggestion.expand(comando come String, intervallo come crafttweaker.api.commands.custom.MCStringRange);
```

| Parametro | Tipo                                                                                         | Descrizione                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| comando   | Stringa                                                                                      | Nessuna descrizione fornita |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Nessuna descrizione fornita |


### getRange

Tipo restituito: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestion.getRange();
```

### getText

Tipo di ritorno: Stringa

```zenscript
myMCSuggestion.getText();
```

### getTooltip

Tipo di ritorno: Stringa

```zenscript
myMCSuggestion.getTooltip();
```

### hashCode

Tipo di restituzione: int

```zenscript
myMCSuggestion.hashCode();
```

### toString

Tipo di ritorno: Stringa

```zenscript
myMCSuggestion.toString();
```


## Operatori
### EQUALI

```zenscript
myMCSuggestion == o come oggetto
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | vero      |

