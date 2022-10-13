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

| 名称                 | Type     | Has Getter | Has Setter |
| ------------------ | -------- | ---------- | ---------- |
| category           | 文字列型     | true       | false      |
| defaultTemperature | float    | true       | false      |
| depth              | float    | true       | false      |
| doesRain           | boolean型 | true       | false      |
| doesSnow           | boolean型 | true       | false      |
| downfall           | float    | true       | false      |
| isHighHumidity     | boolean型 | true       | false      |
| isMutation         | boolean型 | true       | false      |
| isTempCold         | boolean型 | true       | false      |
| isTempMedium       | boolean型 | true       | false      |
| isTempOcean        | boolean型 | true       | false      |
| isTempWarm         | boolean型 | true       | false      |
| parent             | 文字列型     | true       | false      |
| rainType           | 文字列型     | true       | false      |
| scale              | float    | true       | false      |
| spawningChange     | float    | true       | false      |
| translationKey     | 文字列型     | true       | false      |
| waterColor         | int      | true       | false      |
| waterFogColor      | int      | true       | false      |

