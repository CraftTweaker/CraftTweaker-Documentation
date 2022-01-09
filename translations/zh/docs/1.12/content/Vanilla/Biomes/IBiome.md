# IBiome

IBiome 接口允许你获取注册的生物群系的信息。

## 导入相关包
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.world.IBiome;`

## 调用 IBiome
您可以使用 [IGame](/Vanilla/Game/IGame/) 的 `game.biomes`  获取所有已注册生物群系的列表。

## ZenGetters
现在，IBiome 对象唯一的作用就是获取其中的信息。

| ZenGetter                    | 返回值类型                                          |
| ---------------------------- | ---------------------------------------------- |
| name（名称）                     | string                                         |
| canRain                      | 布尔值                                            |
| isSnowyBiome                 | 布尔值                                            |
| highHumidity                 | 布尔值                                            |
| spawningChance               | 浮点数                                            |
| baseHeight                   | 浮点数                                            |
| heightVariation              | 浮点数                                            |
| rainfall                     | 浮点数                                            |
| waterColorMultiplier         | int                                            |
| ignorePlayerSpawnSuitability | 布尔值                                            |
| temperature                  | 浮点数                                            |
| types                        | List<[IBiomeType](/Vanilla/Biomes/IBiomeType/) |

