# IBiome

IBiome 接口允许你获取注册的生物群系的信息。

## 导入相关包
如果你遇到问题（如创建[数组](/AdvancedFunctions/Arrays_and_Loops/)），你可能需要导入相关包，为此，最安全的方法就是进行导入。  
`import crafttweaker.world.IBiome;`

## 调用 IBiome
您可以使用 [IGame](/Vanilla/Game/IGame/) 的 `game.biomes`  获取所有已注册生物群系的列表。

## ZenGetters
现在，IBiome 对象唯一的作用就是获取其中的信息。

| ZenGetter                    | 返回值类型                                        |
| ---------------------------- | -------------------------------------------- |
| name（名称）                     | string                                       |
| canRain                      | 布尔值                                          |
| isSnowyBiome                 | 布尔值                                          |
| highHumidity                 | 布尔值                                          |
| spawningChance               | float                                        |
| baseHeight                   | float                                        |
| heightVariation              | float                                        |
| rainfall                     | float                                        |
| waterColorMultiplier         | int                                          |
| ignorePlayerSpawnSuitability | 布尔值                                          |
| temperature                  | float                                        |
| types                        | 列表<[IBiomeType](/Vanilla/Biomes/IBiomeType/) |

