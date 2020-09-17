# MCParseResults

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCParseResults
```

## Metodi
### uguale

Tipo restituito: booleano

```zenscript
myMCParseResults.equals(o come oggetto);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |


### getContext

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCParseResults.getContext();
```

### getExceptions

Tipo di restituzione: Eccezione[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCParseResults.getExceptions();
```

### getReader

Tipo restituito: [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader)

```zenscript
myMCParseResults.getReader();
```

### hashCode

Tipo di restituzione: int

```zenscript
myMCParseResults.hashCode();
```

### toString

Tipo di ritorno: Stringa

```zenscript
myMCParseResults.toString();
```


## Operatori
### EQUALI

```zenscript
myMCParseResults == o come oggetto
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | vero      |

