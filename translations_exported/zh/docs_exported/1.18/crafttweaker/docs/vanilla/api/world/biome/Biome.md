# Biome

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.biome.Biome;
```


## 使用方式

:::group{name=shouldFreeze}

Return Type: boolean

```zenscript
Biome.shouldFreeze(world as Level, pos as BlockPos) as boolean
```

| 参数    | 类型                                          |
| ----- | ------------------------------------------- |
| world | [Level](/vanilla/api/world/Level)           |
| 点     | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=shouldFreeze}

Return Type: boolean

```zenscript
Biome.shouldFreeze(world as Level, pos as BlockPos, mustBeAtEdge as boolean) as boolean
```

| 参数           | 类型                                          |
| ------------ | ------------------------------------------- |
| world        | [Level](/vanilla/api/world/Level)           |
| 点            | [BlockPos](/vanilla/api/util/math/BlockPos) |
| mustBeAtEdge | 布尔值                                         |


:::

:::group{name=shouldSnow}

Return Type: boolean

```zenscript
Biome.shouldSnow(world as Level, pos as BlockPos) as boolean
```

| 参数    | 类型                                          |
| ----- | ------------------------------------------- |
| world | [Level](/vanilla/api/world/Level)           |
| 点     | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::


## 参数

| 名称                   | 类型                                             | 可获得  | 可设置   |
| -------------------- | ---------------------------------------------- | ---- | ----- |
| biomeCategory        | string                                         | true | false |
| commandString #命令字符串 | string                                         | true | false |
| doesRain             | 布尔值                                            | true | false |
| doesSnow             | 布尔值                                            | true | false |
| downfall             | float                                          | true | false |
| isHumid              | 布尔值                                            | true | false |
| rainType             | string                                         | true | false |
| registryName         | [资源位置](/vanilla/api/resource/ResourceLocation) | true | false |
| waterColor           | int                                            | true | false |
| waterFogColor        | int                                            | true | false |

