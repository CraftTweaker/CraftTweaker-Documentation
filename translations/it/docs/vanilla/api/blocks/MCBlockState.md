# MCBlockState

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.block.MCBlockState
```

## Interfacce Implementate
MCBlockState implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi
### getAllowedValuesForProperty

Restituisce List<String>

```zenscript
myMCBlockState.getAllowedValuesForProperty(nome as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| nome      | Stringa | Nessuna descrizione fornita |


### getProperties

Ritorna String[String]

```zenscript
myMCBlockState.getProperties();
```

### getPropertyNames

Restituisce List<String>

```zenscript
myMCBlockState.getPropertyNames();
```

### getPropertyValue

Ritorna una stringa

```zenscript
myMCBlockState.getPropertyValue(nome as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| nome      | Stringa | Nessuna descrizione fornita |


### hasProperty

Restituisce un booleano

```zenscript
myMCBlockState.hasProperty(nome as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| nome      | Stringa | Nessuna descrizione fornita |


### withProperty

Restituisce un [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(nome as String, valore as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| nome      | Stringa | Nessuna descrizione fornita |
| valore    | Stringa | Nessuna descrizione fornita |



## Proprietà

| Nome            | Tipo                                                          | Ha Getter | Ha Setter |
| --------------- | ------------------------------------------------------------- | --------- | --------- |
| blocco          | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | vero      | falso     |
| canProvidePower | boolean                                                       | vero      | falso     |
| commandString   | Stringa                                                       | vero      | falso     |
| hasTileEntity   | boolean                                                       | vero      | falso     |
| isSolid         | boolean                                                       | vero      | falso     |
| isSticky        | boolean                                                       | vero      | falso     |
| lightLevel      | int                                                           | vero      | falso     |
| ticksRandomly   | boolean                                                       | vero      | falso     |

## Caster

| Tipo Risultato                                                | Implicito |
| ------------------------------------------------------------- | --------- |
| Stringa                                                       | falso     |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | vero      |

