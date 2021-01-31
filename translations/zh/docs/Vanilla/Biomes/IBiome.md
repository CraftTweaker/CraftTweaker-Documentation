# IBiome

IBiome 接口允许你获取注册的生物群系的信息。

## 导入相关包

如果你遇到问题（例如创建 [数组](/AdvancedFunctions/Arrays_and_Loops/)），你可能需要导入相关包，为此，最安全的方法就是进行导入。  
`import crafttweaker.world.IBiome;`

## 调用 IBiome

You can get a list of all registered Biomes using `game.biomes` from [IGame](/Vanilla/Game/IGame/)

## ZenGetters

现在，IBiome 对象唯一的作用就是获取其中的信息。

| ZenGetter                    | 返回值类型                                          |
| ---------------------------- | ---------------------------------------------- |
| name                         | string                                         |
| canRain                      | boolean                                        |
| isSnowyBiome                 | boolean                                        |
| highHumidity                 | boolean                                        |
| spawningChance               | float                                          |
| baseHeight                   | float                                          |
| heightVariation              | float                                          |
| rainfall                     | float                                          |
| waterColorMultiplier         | int                                            |
| ignorePlayerSpawnSuitability | boolean                                        |
| temperature                  | float                                          |
| types                        | List<[IBiomeType](/Vanilla/Biomes/IBiomeType/) |