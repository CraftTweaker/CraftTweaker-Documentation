# MCStringRange

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCStringRange
```

## Methods
### a

Tipo restituito: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.at(pos as int);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| pos       | int  | Nessuna descrizione fornita |


### tra

Tipo restituito: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.between(start as int, end as int);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| inizio    | int  | Nessuna descrizione fornita |
| fine      | int  | Nessuna descrizione fornita |


### comprensivo

Tipo restituito: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.encompassing(a as crafttweaker.api.commands.custom.MCStringRange, b as crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Description                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| a         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Nessuna descrizione fornita |
| b         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Nessuna descrizione fornita |


### equals

Return type: boolean

```zenscript
myMCStringRange.equals(o come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### get

Return type: String

```zenscript
myMCStringRange.get(stringa come stringa);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| string    | String | Nessuna descrizione fornita |



Return type: String

```zenscript
myMCStringRange.get(reader as crafttweaker.api.commands.custom.MCImmutableStringReader);
```

| Parameter | Type                                                                                                             | Description                 |
| --------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------- |
| lettore   | [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | Nessuna descrizione fornita |


### getEnd

Return type: int

```zenscript
myMCStringRange.getEnd();
```

### getLength

Return type: int

```zenscript
myMCStringRange.getLength();
```

### getStart

Return type: int

```zenscript
myMCStringRange.getStart();
```

### hashCode

Return type: int

```zenscript
myMCStringRange.hashCode();
```

### isEmpty

Return type: boolean

```zenscript
myMCStringRange.isEmpty();
```

### toString

Return type: String

```zenscript
myMCStringRange.toString();
```


