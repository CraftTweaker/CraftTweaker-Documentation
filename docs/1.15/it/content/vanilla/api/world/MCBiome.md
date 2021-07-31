# MCBiome

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.world.MCBiome
```

## Methods
### getSpawns

Returns List<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(classification as crafttweaker.api.entity.MCEntityClassification);
```

| Parameter      | Type                                                                                           | Description                 |
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

| Parameter | Type                                                         | Description                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |



## Properties

| Name               | Type    | Ha Getter | Ha Setter |
| ------------------ | ------- | --------- | --------- |
| category           | String  | true      | false     |
| defaultTemperature | float   | true      | false     |
| depth              | float   | true      | false     |
| doesRain           | boolean | true      | false     |
| doesSnow           | boolean | true      | false     |
| downfall           | float   | true      | false     |
| isHighHumidity     | boolean | true      | false     |
| isMutation         | boolean | true      | false     |
| isTempCold         | boolean | true      | false     |
| isTempMedium       | boolean | true      | false     |
| isTempOcean        | boolean | true      | false     |
| isTempWarm         | boolean | true      | false     |
| parent             | String  | true      | false     |
| rainType           | String  | true      | false     |
| scale              | float   | true      | false     |
| spawningChange     | float   | true      | false     |
| translationKey     | String  | true      | false     |
| waterColor         | int     | true      | false     |
| waterFogColor      | int     | true      | false     |

