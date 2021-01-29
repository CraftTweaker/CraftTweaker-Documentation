# MCBiome

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.MCBiome;
```


## Methods

### doesSnowFreeze

Return Type: boolean

```zenscript
MCBiome.doesSnowFreeze(world as MCWorld, pos as BlockPos) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | No Description Provided |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |

### doesWaterFreeze

Return Type: boolean

```zenscript
MCBiome.doesWaterFreeze(world as MCWorld, pos as BlockPos) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | No Description Provided |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |

Return Type: boolean

```zenscript
MCBiome.doesWaterFreeze(world as MCWorld, pos as BlockPos, mustBeAtEdge as boolean) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | No Description Provided |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
| mustBeAtEdge | boolean | No Description Provided |

### getTemperature

Return Type: float

```zenscript
MCBiome.getTemperature(pos as BlockPos) as float
```
| Parameter | Type | Description |
|-----------|------|-------------|
| pos | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| category | string | true | false |
| depth | float | true | false |
| doesRain | boolean | true | false |
| doesSnow | boolean | true | false |
| downfall | float | true | false |
| isHighHumidity | boolean | true | false |
| rainType | string | true | false |
| scale | float | true | false |
| waterColor | int | true | false |
| waterFogColor | int | true | false |

