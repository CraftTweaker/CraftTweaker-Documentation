# MCSuggestion

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCSuggestion
```

## Methods
### applica

Return type: String

```zenscript
myMCSuggestion.apply(input as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| input     | String | Nessuna descrizione fornita |


### confrontaA

Return type: int

```zenscript
myMCSuggestion.compareTo(o as crafttweaker.api.commands.custom.MCSuggestion);
```

| Parameter | Type                                                                                       | Description                 |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------- |
| o         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | Nessuna descrizione fornita |


### confrontaToIgnoreCase

Return type: int

```zenscript
myMCSuggestion.compareToIgnoreCase(b come crafttweaker.api.commands.custom.MCSuggestion);
```

| Parameter | Type                                                                                       | Description                 |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------- |
| b         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | Nessuna descrizione fornita |


### equals

Return type: boolean

```zenscript
myMCSuggestion.equals(o come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### espandi

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
myMCSuggestion.expand(comando come String, intervallo come crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Description                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| command   | String                                                                                       | Nessuna descrizione fornita |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Nessuna descrizione fornita |


### getRange

Tipo restituito: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestion.getRange();
```

### getText

Return type: String

```zenscript
myMCSuggestion.getText();
```

### getTooltip

Return type: String

```zenscript
myMCSuggestion.getTooltip();
```

### hashCode

Return type: int

```zenscript
myMCSuggestion.hashCode();
```

### toString

Return type: String

```zenscript
myMCSuggestion.toString();
```


## Operators
### EQUALS

```zenscript
myMCSuggestion == o come oggetto
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |

