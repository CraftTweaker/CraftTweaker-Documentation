# 生物群系接口

IBiome接口允许你获取一个已注册的生物群群的信息。

## 导入包
如遇任何问题 (如声明 [数组](/AdvancedFunctions/Arrays_and_Loops))， 可以尝试通过导入相关包来解决。  
`import crafttweaker.world.IBiome;`

## 调用一个IBiome
你可以使用 [IGame](/Vanilla/Game/IGame) 的`game.biomes`来获取所有已注册的生物群系的列表
这是目前唯一的方法

## ZenGetters
目前，你可以用IBiome对象做的就是从中获取以下信息：

|          ZenGetter           |                         说明                         | 返回类型 |
| :--------------------------: | :--------------------------------------------------: | :------: |
|             name             |                     生物群系名称                     |  字符串  |
|           canRain            |                      是否会下雨                      |  布尔值  |
|         isSnowyBiome         |                      是否会下雪                      |  布尔值  |
|         highHumidity         |                 生物群系是否是高湿度                 |  布尔值  |
|        spawningChance        |                       生成几率                       |   浮点   |
|          baseHeight          |                       基础高度                       |   浮点   |
|       heightVariation        |     高度变化幅度，幅度较高则是高山，较低则是平原     |   浮点   |
|           rainfall           |                       降雨几率                       |   浮点   |
|     waterColorMultiplier     |         水颜色乘子，用来标定生物群系水体颜色         |   整型   |
| ignorePlayerSpawnSuitability | 忽略玩家出生点适用性，即玩家是否会出生在这个生物群系 |  布尔值  |
|         temperature          |                     生物群系温度                     |   浮点   |