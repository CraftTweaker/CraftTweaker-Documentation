# MCBiome

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.MCBiome;
```


## Metodi

:::group{name=doesSnowFreeze}

Return Type: boolean

```zenscript
MCBiome.doesSnowFreeze(world as MCWorld, pos as BlockPos) as boolean
```

| Parametro | Tipo                                   | Descrizione             |
| --------- | -------------------------------------- | ----------------------- |
| world     | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


:::

:::group{name=doesWaterFreeze}

Return Type: boolean

```zenscript
MCBiome.doesWaterFreeze(world as MCWorld, pos as BlockPos) as boolean
```

| Parametro | Tipo                                   | Descrizione             |
| --------- | -------------------------------------- | ----------------------- |
| world     | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


:::

:::group{name=doesWaterFreeze}

Return Type: boolean

```zenscript
MCBiome.doesWaterFreeze(world as MCWorld, pos as BlockPos, mustBeAtEdge as boolean) as boolean
```

| Parametro    | Tipo                                   | Descrizione             |
| ------------ | -------------------------------------- | ----------------------- |
| world        | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| pos          | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
| mustBeAtEdge | boolean                                | No Description Provided |


:::

:::group{name=getTemperature}

Return Type: float

```zenscript
MCBiome.getTemperature(pos as BlockPos) as float
```

| Parametro | Tipo                                   | Descrizione             |
| --------- | -------------------------------------- | ----------------------- |
| pos       | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


:::


## Proprietà

| Nome           | Tipo                                                       | Ha Getter | Ha Setter | Descrizione             |
| -------------- | ---------------------------------------------------------- | --------- | --------- | ----------------------- |
| category       | string                                                     | sì        | no        | No Description Provided |
| commandString  | string                                                     | sì        | no        | No Description Provided |
| depth          | float                                                      | sì        | no        | No Description Provided |
| doesRain       | boolean                                                    | sì        | no        | No Description Provided |
| doesSnow       | boolean                                                    | sì        | no        | No Description Provided |
| downfall       | float                                                      | sì        | no        | No Description Provided |
| isHighHumidity | boolean                                                    | sì        | no        | No Description Provided |
| rainType       | string                                                     | sì        | no        | No Description Provided |
| registryName   | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | sì        | no        | No Description Provided |
| scale          | float                                                      | sì        | no        | No Description Provided |
| waterColor     | int                                                        | sì        | no        | No Description Provided |
| waterFogColor  | int                                                        | sì        | no        | No Description Provided |

