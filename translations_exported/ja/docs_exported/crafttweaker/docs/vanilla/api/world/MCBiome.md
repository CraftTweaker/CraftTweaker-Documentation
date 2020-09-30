# MCBiome

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.world.MCBiome
```

## Methods
### getTemperature

戻り値の型: float

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Description             |
| --------- | ------------------------------------------------------------ | ----------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |



## Properties

| 名称             | Type     | Has Getter | Has Setter |
| -------------- | -------- | ---------- | ---------- |
| category       | String   | true       | false      |
| depth          | float    | true       | false      |
| doesRain       | boolean型 | true       | false      |
| doesSnow       | boolean型 | true       | false      |
| downfall       | float    | true       | false      |
| isHighHumidity | boolean型 | true       | false      |
| rainType       | String   | true       | false      |
| scale          | float    | true       | false      |
| waterColor     | int      | true       | false      |
| waterFogColor  | int      | true       | false      |

