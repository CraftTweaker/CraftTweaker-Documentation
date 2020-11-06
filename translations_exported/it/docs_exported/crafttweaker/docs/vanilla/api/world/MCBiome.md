# MCBiome

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.world.MCBiome
```

## Methods
### doesSnowFreeze

Return type: boolean

```zenscript
myMCBiome.doesSnowFreeze(world as crafttweaker.api.world.MCWorld, pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Description                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| world     | [crafttweaker.api.world.MCWorld](/vanilla/api/world/MCWorld) | Nessuna descrizione fornita |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |


### doesWaterFreeze

Return type: boolean

```zenscript
myMCBiome.doesWaterFreeze(world as crafttweaker.api.world.MCWorld, pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Description                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| world     | [crafttweaker.api.world.MCWorld](/vanilla/api/world/MCWorld) | Nessuna descrizione fornita |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |



Return type: boolean

```zenscript
myMCBiome.doesWaterFreeze(world as crafttweaker.api.world.MCWorld, pos as crafttweaker.api.util.BlockPos, mustBeAtEdge as boolean);
```

| Parameter    | Type                                                         | Description                 |
| ------------ | ------------------------------------------------------------ | --------------------------- |
| world        | [crafttweaker.api.world.MCWorld](/vanilla/api/world/MCWorld) | Nessuna descrizione fornita |
| pos          | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |
| mustBeAtEdge | boolean                                                      | Nessuna descrizione fornita |


### getTemperature

Return type: float

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Description                 |
| --------- | ------------------------------------------------------------ | --------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nessuna descrizione fornita |



## Properties

| Name           | Type    | Ha Getter | Ha Setter |
| -------------- | ------- | --------- | --------- |
| category       | String  | true      | false     |
| depth          | float   | true      | false     |
| doesRain       | boolean | true      | false     |
| doesSnow       | boolean | true      | false     |
| downfall       | float   | true      | false     |
| isHighHumidity | boolean | true      | false     |
| rainType       | String  | true      | false     |
| scale          | float   | true      | false     |
| waterColor     | int     | true      | false     |
| waterFogColor  | int     | true      | false     |

