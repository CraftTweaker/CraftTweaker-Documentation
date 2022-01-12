# Biome

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.biome.Biome;
```


## 使用方式

:::group{name=getTemperature}

Return Type: float

```zenscript
Biome.getTemperature(pos as BlockPos) as float
```

| 参数 | 类型                                          | 描述                      |
| -- | ------------------------------------------- | ----------------------- |
| 点  | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::

:::group{name=shouldFreeze}

Return Type: boolean

```zenscript
Biome.shouldFreeze(world as Level, pos as BlockPos) as boolean
```

| 参数    | 类型                                          | 描述                      |
| ----- | ------------------------------------------- | ----------------------- |
| world | [Level](/vanilla/api/world/Level)           | No Description Provided |
| 点     | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::

:::group{name=shouldFreeze}

Return Type: boolean

```zenscript
Biome.shouldFreeze(world as Level, pos as BlockPos, mustBeAtEdge as boolean) as boolean
```

| 参数           | 类型                                          | 描述                      |
| ------------ | ------------------------------------------- | ----------------------- |
| world        | [Level](/vanilla/api/world/Level)           | No Description Provided |
| 点            | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |
| mustBeAtEdge | 布尔值                                         | No Description Provided |


:::

:::group{name=shouldSnow}

Return Type: boolean

```zenscript
Biome.shouldSnow(world as Level, pos as BlockPos) as boolean
```

| 参数    | 类型                                          | 描述                      |
| ----- | ------------------------------------------- | ----------------------- |
| world | [Level](/vanilla/api/world/Level)           | No Description Provided |
| 点     | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |


:::


## 参数

| 名称                   | 类型                                             | 可获得  | 可设置   | 描述                      |
| -------------------- | ---------------------------------------------- | ---- | ----- | ----------------------- |
| biomeCategory        | string                                         | true | false | No Description Provided |
| commandString #命令字符串 | string                                         | true | false | No Description Provided |
| depth                | 浮点数                                            | true | false | No Description Provided |
| doesRain             | 布尔值                                            | true | false | No Description Provided |
| doesSnow             | 布尔值                                            | true | false | No Description Provided |
| downfall             | 浮点数                                            | true | false | No Description Provided |
| isHumid              | 布尔值                                            | true | false | No Description Provided |
| rainType             | string                                         | true | false | No Description Provided |
| registryName         | [资源位置](/vanilla/api/resource/ResourceLocation) | true | false | No Description Provided |
| scale                | 浮点数                                            | true | false | No Description Provided |
| waterColor           | int                                            | true | false | No Description Provided |
| waterFogColor        | int                                            | true | false | No Description Provided |

