# MCStringRange

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCStringRange
```

## Metodi
### a

Tipo restituito: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.at(pos as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| pos       | int  | Nessuna descrizione fornita |


### tra

Tipo restituito: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.between(start as int, end as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| inizio    | int  | Nessuna descrizione fornita |
| fine      | int  | Nessuna descrizione fornita |


### comprensivo

Tipo restituito: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.encompassing(a as crafttweaker.api.commands.custom.MCStringRange, b as crafttweaker.api.commands.custom.MCStringRange);
```

| Parametro | Tipo                                                                                         | Descrizione                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| a         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Nessuna descrizione fornita |
| b         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Nessuna descrizione fornita |


### uguale

Tipo restituito: booleano

```zenscript
myMCStringRange.equals(o come oggetto);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |


### ottieni

Tipo di ritorno: Stringa

```zenscript
myMCStringRange.get(stringa come stringa);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| stringa   | Stringa | Nessuna descrizione fornita |



Tipo di ritorno: Stringa

```zenscript
myMCStringRange.get(reader as crafttweaker.api.commands.custom.MCImmutableStringReader);
```

| Parametro | Tipo                                                                                                             | Descrizione                 |
| --------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------- |
| lettore   | [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | Nessuna descrizione fornita |


### getEnd

Tipo di restituzione: int

```zenscript
myMCStringRange.getEnd();
```

### getLength

Tipo di restituzione: int

```zenscript
myMCStringRange.getLength();
```

### getStart

Tipo di restituzione: int

```zenscript
myMCStringRange.getStart();
```

### hashCode

Tipo di restituzione: int

```zenscript
myMCStringRange.hashCode();
```

### isEmpty

Tipo restituito: booleano

```zenscript
myMCStringRange.isEmpty();
```

### toString

Tipo di ritorno: Stringa

```zenscript
myMCStringRange.toString();
```


