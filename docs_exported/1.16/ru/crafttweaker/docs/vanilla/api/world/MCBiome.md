# MCBiome

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.MCBiome;
```


## Methods

:::group{name=doesSnowFreeze}

Return Type: boolean

```zenscript
MCBiome.doesSnowFreeze(world as MCWorld, pos as BlockPos) as boolean
```

| Параметр | Тип                                    | Description             |
| -------- | -------------------------------------- | ----------------------- |
| world    | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| pos      | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


:::

:::group{name=doesWaterFreeze}

Return Type: boolean

```zenscript
MCBiome.doesWaterFreeze(world as MCWorld, pos as BlockPos) as boolean
```

| Параметр | Тип                                    | Description             |
| -------- | -------------------------------------- | ----------------------- |
| world    | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| pos      | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


:::

:::group{name=doesWaterFreeze}

Return Type: boolean

```zenscript
MCBiome.doesWaterFreeze(world as MCWorld, pos as BlockPos, mustBeAtEdge as boolean) as boolean
```

| Параметр     | Тип                                    | Description             |
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

| Параметр | Тип                                    | Description             |
| -------- | -------------------------------------- | ----------------------- |
| pos      | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


:::


## Свойства

| Название       | Тип                                                                      | Имеет Getter | Имеет Setter |
| -------------- | ------------------------------------------------------------------------ | ------------ | ------------ |
| category       | string                                                                   | true         | false        |
| commandString  | string                                                                   | true         | false        |
| depth          | float                                                                    | true         | false        |
| doesRain       | boolean                                                                  | true         | false        |
| doesSnow       | boolean                                                                  | true         | false        |
| downfall       | float                                                                    | true         | false        |
| isHighHumidity | boolean                                                                  | true         | false        |
| rainType       | string                                                                   | true         | false        |
| registryName   | [Расположение MCResource-ресурсов](/vanilla/api/util/MCResourceLocation) | true         | false        |
| scale          | float                                                                    | true         | false        |
| waterColor     | int                                                                      | true         | false        |
| waterFogColor  | int                                                                      | true         | false        |

