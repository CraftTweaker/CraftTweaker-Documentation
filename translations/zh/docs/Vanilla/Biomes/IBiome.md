# IBiome

IBiome 接口允许你获取注册的生物群系的信息。

## 导入相关包

如果你遇到问题 (例如创建 [数组](/AdvancedFunctions/Arrays_and_Loops/))，你可能需要导入相关包，为此，最安全的方法就是进行导入。  
`import crafttweaker.world.IBiome;`

## 调用 IBiome

你可以通过 [IGame](/Vanilla/Game/IGame/) 提供的 `game.biomes` 获取所有注册的生物群系的列表，这是目前唯一的方式。

## ZenGetters

现在，IBiome 对象唯一的作用就是获取其中的信息。

| ZenGetter                    | 返回值类型   |
| ---------------------------- | ------- |
| name                         | String  |
| canRain                      | boolean |
| isSnowyBiome                 | boolean |
| highHumidity                 | boolean |
| spawningChance               | float   |
| baseHeight                   | float   |
| heightVariation              | float   |
| rainfall                     | float   |
| waterColorMultiplier         | int     |
| ignorePlayerSpawnSuitability | boolean |
| temperature                  | float   |