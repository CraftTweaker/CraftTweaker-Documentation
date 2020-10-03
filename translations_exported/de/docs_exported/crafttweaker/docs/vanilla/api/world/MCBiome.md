# MCBiome

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.world.MCBiome
```

## Methoden
### getTemperature

Rückgabetyp: Float

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Parameter | Type                                                         | Beschreibung            |
| --------- | ------------------------------------------------------------ | ----------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |



## Properties

| Name           | Type    | Has Getter | Has Setter |
| -------------- | ------- | ---------- | ---------- |
| category       | String  | true       | false      |
| depth          | float   | true       | false      |
| doesRain       | boolean | true       | false      |
| doesSnow       | boolean | true       | false      |
| downfall       | float   | true       | false      |
| isHighHumidity | boolean | true       | false      |
| rainType       | String  | true       | false      |
| scale          | float   | true       | false      |
| waterColor     | int     | true       | false      |
| waterFogColor  | int     | true       | false      |

