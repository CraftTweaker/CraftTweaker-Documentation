# MCBiome

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.MCBiome;
```


## Методы

:::group{name=doesSnowFreeze}

Return Type: boolean

```zenscript
MCBiome.doesSnowFreeze(world as MCWorld, pos as BlockPos) as boolean
```

| Параметр | Тип                                    | Описание                |
| -------- | -------------------------------------- | ----------------------- |
| world    | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| pos      | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


:::

:::group{name=doesWaterFreeze}

Return Type: boolean

```zenscript
MCBiome.doesWaterFreeze(world as MCWorld, pos as BlockPos) as boolean
```

| Параметр | Тип                                    | Описание                |
| -------- | -------------------------------------- | ----------------------- |
| world    | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| pos      | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


:::

:::group{name=doesWaterFreeze}

Return Type: boolean

```zenscript
MCBiome.doesWaterFreeze(world as MCWorld, pos as BlockPos, mustBeAtEdge as boolean) as boolean
```

| Параметр     | Тип                                    | Описание                |
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

| Параметр | Тип                                    | Описание                |
| -------- | -------------------------------------- | ----------------------- |
| pos      | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


:::


## Свойства

| Название       | Тип                                                                      | Имеет Getter | Имеет Setter | Описание                |
| -------------- | ------------------------------------------------------------------------ | ------------ | ------------ | ----------------------- |
| category       | string                                                                   | true         | false        | No Description Provided |
| commandString  | string                                                                   | true         | false        | No Description Provided |
| depth          | float                                                                    | true         | false        | No Description Provided |
| doesRain       | boolean                                                                  | true         | false        | No Description Provided |
| doesSnow       | boolean                                                                  | true         | false        | No Description Provided |
| downfall       | float                                                                    | true         | false        | No Description Provided |
| isHighHumidity | boolean                                                                  | true         | false        | No Description Provided |
| rainType       | string                                                                   | true         | false        | No Description Provided |
| registryName   | [Расположение MCResource-ресурсов](/vanilla/api/util/MCResourceLocation) | true         | false        | No Description Provided |
| scale          | float                                                                    | true         | false        | No Description Provided |
| waterColor     | int                                                                      | true         | false        | No Description Provided |
| waterFogColor  | int                                                                      | true         | false        | No Description Provided |

