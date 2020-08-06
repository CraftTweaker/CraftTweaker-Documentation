# MCBlockState

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
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

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| nome      | String | Nessuna descrizione fornita |


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

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| nome      | String | Nessuna descrizione fornita |


### hasProperty

Restituisce un booleano

```zenscript
myMCBlockState.hasProperty(nome as String);
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | String | No description provided |


### withProperty

Returns [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(name as String, value as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |
| value     | String | No description provided |



## Properties

| Name            | Type                                                          | Has Getter | Has Setter |
| --------------- | ------------------------------------------------------------- | ---------- | ---------- |
| block           | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true       | false      |
| canProvidePower | boolean                                                       | true       | false      |
| commandString   | String                                                        | true       | false      |
| hasTileEntity   | boolean                                                       | true       | false      |
| isSolid         | boolean                                                       | true       | false      |
| isSticky        | boolean                                                       | true       | false      |
| lightLevel      | int                                                           | true       | false      |
| ticksRandomly   | boolean                                                       | true       | false      |

## Casters

| Result type                                                   | Is Implicit |
| ------------------------------------------------------------- | ----------- |
| String                                                        | false       |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true        |

