# MCBiome

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.MCBiome;
```


## 方法

:::group{name=doesSnowFreeze}

Return Type: boolean

```zenscript
MCBiome.doesSnowFreeze(world as MCWorld, pos as BlockPos) as boolean
```

| 参数    | 类型                                     | 描述                      |
| ----- | -------------------------------------- | ----------------------- |
| world | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| 点     | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


:::

:::group{name=doesWaterFreeze}

Return Type: boolean

```zenscript
MCBiome.doesWaterFreeze(world as MCWorld, pos as BlockPos) as boolean
```

| 参数    | 类型                                     | 描述                      |
| ----- | -------------------------------------- | ----------------------- |
| world | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| 点     | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


:::

:::group{name=doesWaterFreeze}

Return Type: boolean

```zenscript
MCBiome.doesWaterFreeze(world as MCWorld, pos as BlockPos, mustBeAtEdge as boolean) as boolean
```

| 参数           | 类型                                     | 描述                      |
| ------------ | -------------------------------------- | ----------------------- |
| world        | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| 点            | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
| mustBeAtEdge | boolean                                | No Description Provided |


:::

:::group{name=getTemperature}

Return Type: float

```zenscript
MCBiome.getTemperature(pos as BlockPos) as float
```

| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


:::


## 参数

| 名称             | 类型                                                         | 可获得  | 可设置   | 描述                      |
| -------------- | ---------------------------------------------------------- | ---- | ----- | ----------------------- |
| category       | string                                                     | true | false | No Description Provided |
| commandString  | string                                                     | true | false | No Description Provided |
| depth          | float                                                      | true | false | No Description Provided |
| doesRain       | boolean                                                    | true | false | No Description Provided |
| doesSnow       | boolean                                                    | true | false | No Description Provided |
| downfall       | float                                                      | true | false | No Description Provided |
| isHighHumidity | boolean                                                    | true | false | No Description Provided |
| rainType       | string                                                     | true | false | No Description Provided |
| registryName   | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true | false | No Description Provided |
| scale          | float                                                      | true | false | No Description Provided |
| waterColor     | int                                                        | true | false | No Description Provided |
| waterFogColor  | int                                                        | true | false | No Description Provided |

