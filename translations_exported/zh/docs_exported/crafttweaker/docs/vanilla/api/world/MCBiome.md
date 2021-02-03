# MCBiome

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.MCBiome;
```


## 方法

### doesSnowFreeze

Return Type: boolean

```zenscript
MCBiome.doesSnowFreeze(world as MCWorld, pos as BlockPos) as boolean
```

| 参数    | 类型                                     | 描述                      |
| ----- | -------------------------------------- | ----------------------- |
| world | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| 点     | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


### doesWaterFreeze

Return Type: boolean

```zenscript
MCBiome.doesWaterFreeze(world as MCWorld, pos as BlockPos) as boolean
```

| 参数    | 类型                                     | 描述                      |
| ----- | -------------------------------------- | ----------------------- |
| world | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| 点     | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |


Return Type: boolean

```zenscript
MCBiome.doesWaterFreeze(world as MCWorld, pos as BlockPos, mustBeAtEdge as boolean) as boolean
```

| 参数           | 类型                                     | 描述                      |
| ------------ | -------------------------------------- | ----------------------- |
| world        | [MCWorld](/vanilla/api/world/MCWorld)  | No Description Provided |
| 点            | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |
| mustBeAtEdge | boolean                                | No Description Provided |


### getTemperature

Return Type: float

```zenscript
MCBiome.getTemperature(pos as BlockPos) as float
```

| 参数 | 类型                                     | 描述                      |
| -- | -------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/BlockPos) | No Description Provided |



## 参数

| 名称             | 类型      | 可获得  | 可设置   |
| -------------- | ------- | ---- | ----- |
| category       | string  | true | false |
| depth          | float   | true | false |
| doesRain       | boolean | true | false |
| doesSnow       | boolean | true | false |
| downfall       | float   | true | false |
| isHighHumidity | boolean | true | false |
| rainType       | string  | true | false |
| scale          | float   | true | false |
| waterColor     | int     | true | false |
| waterFogColor  | int     | true | false |

