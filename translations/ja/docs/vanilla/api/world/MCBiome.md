# MCBiome

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.world.MCBiome
```

## Methods
### getSpawns

Returns List<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(classification as crafttweaker.api.entity.MCEntityClassification);
```

| Parameter      | Type                                                                                           | Description             |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| classification | [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) | No description provided |


### getTempCategory

Returns String

```zenscript
myMCBiome.getTempCategory();
```

### getTemperature

Returns float

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Description             |
| --------- | ------------------------------------------------------------ | ----------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |



## Properties

| Name               | Type    | Has Getter | Has Setter |
| ------------------ | ------- | ---------- | ---------- |
| category           | String  | true       | false      |
| defaultTemperature | float   | true       | false      |
| depth              | float   | true       | false      |
| doesRain           | boolean | true       | false      |
| doesSnow           | boolean | true       | false      |
| downfall           | float   | true       | false      |
| isHighHumidity     | boolean | true       | false      |
| isMutation         | boolean | true       | false      |
| isTempCold         | boolean | true       | false      |
| isTempMedium       | boolean | true       | false      |
| isTempOcean        | boolean | true       | false      |
| isTempWarm         | boolean | true       | false      |
| parent             | String  | true       | false      |
| rainType           | String  | true       | false      |
| scale              | float   | true       | false      |
| spawningChange     | float   | true       | false      |
| translationKey     | String  | true       | false      |
| waterColor         | int     | true       | false      |
| waterFogColor      | int     | true       | false      |

