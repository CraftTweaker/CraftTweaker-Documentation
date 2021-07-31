# MCBlockState

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.block.MCBlockState
```

## Interfacce Implementate
MCBlockState implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### getAllowedValuesForProperty

Restituisce List<String>

```zenscript
myMCBlockState.getAllowedValuesForProperty(nome as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| name      | String | Nessuna descrizione fornita |


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

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| name      | String | Nessuna descrizione fornita |


### hasProperty

Restituisce un booleano

```zenscript
myMCBlockState.hasProperty(nome as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| name      | String | Nessuna descrizione fornita |


### withProperty

Restituisce un [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(nome as String, valore as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| name      | String | Nessuna descrizione fornita |
| value     | String | Nessuna descrizione fornita |



## Properties

| Name            | Type                                                          | Ha Getter | Ha Setter |
| --------------- | ------------------------------------------------------------- | --------- | --------- |
| block           | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true      | false     |
| canProvidePower | boolean                                                       | true      | false     |
| commandString   | String                                                        | true      | false     |
| hasTileEntity   | boolean                                                       | true      | false     |
| isSolid         | boolean                                                       | true      | false     |
| isSticky        | boolean                                                       | true      | false     |
| lightLevel      | int                                                           | true      | false     |
| ticksRandomly   | boolean                                                       | true      | false     |

## Caster

| Tipo Risultato                                                | Implicito |
| ------------------------------------------------------------- | --------- |
| String                                                        | false     |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true      |

