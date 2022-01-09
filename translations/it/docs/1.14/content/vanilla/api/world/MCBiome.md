# MCBiome

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.world.MCBiome
```

## Metodi
### getSpawns

Returns List<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(classification as crafttweaker.api.entity.MCEntityClassification);
```

| Parametro      | Tipo                                                                                           | Descrizione                 |
| -------------- | ---------------------------------------------------------------------------------------------- | --------------------------- |
| classification | [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) | Nessuna descrizione fornita |


### getTempCategory

Ritorna una stringa

```zenscript
myMCBiome.getTempCategory();
```

### getTemperature

Returns float

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Parametro | Tipo                                                         | Descrizione                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |



## Proprietà

| Nome               | Tipo    | Ha Getter | Ha Setter |
| ------------------ | ------- | --------- | --------- |
| category           | String  | sì        | no        |
| defaultTemperature | float   | sì        | no        |
| depth              | float   | sì        | no        |
| doesRain           | boolean | sì        | no        |
| doesSnow           | boolean | sì        | no        |
| downfall           | float   | sì        | no        |
| isHighHumidity     | boolean | sì        | no        |
| isMutation         | boolean | sì        | no        |
| isTempCold         | boolean | sì        | no        |
| isTempMedium       | boolean | sì        | no        |
| isTempOcean        | boolean | sì        | no        |
| isTempWarm         | boolean | sì        | no        |
| parent             | String  | sì        | no        |
| rainType           | String  | sì        | no        |
| scale              | float   | sì        | no        |
| spawningChange     | float   | sì        | no        |
| translationKey     | String  | sì        | no        |
| waterColor         | int     | sì        | no        |
| waterFogColor      | int     | sì        | no        |

