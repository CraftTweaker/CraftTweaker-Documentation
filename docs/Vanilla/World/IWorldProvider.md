# 世界供应器

世界供应器接口用于从 [IWorld](IWorld) 对象中获取更多信息。

## 导入包
如果你遇到任何问题，可以尝试通过导入相关包来解决。
`import crafttweaker.world.IWorldProvider;`

## 创建一个世界供应器
通常情况下，你可以从 [IWorld](IWorld) 或其他函数来获得世界供应器。不过如果你想自己重新创建一个的话，请遵循以下步骤：  
请注意，此方法只应在函数内调用，这些函数是在minecraft中运行的，而不是在加载循环中运行。
```
crafttweaker.world.IWorldProvider.create(int id);
```



## 没有参数和ZenGetters的ZenMethods

| ZenGetter              | ZenMethod                   |返回类型                       |
|------------------------|-----------------------------|----------------------------------|
| 实际高度           | getActualHeight()           | 整型                              |
| 实际水平面      | getAverageGroundLevel()     | 整型                              |
| 云高            | getCloudHeight()            | 浮点                            |
| 当前的月相系数 | getCurrentMoonPhaseFactor() | 浮点                            |
| 维度ID            | getDimensionID()            | 整型                              |
| 高度                 | getHeight()                 | 整型                              |
| 视野                | getHorizon()                | 双精度                           |
| 亮度表    | getLightBrightnesTable()    | 浮点[]                          |
| 移动系数         | getMovementFactor()         | 双精度                           |
| 随机生成点   | getRandomizedSpawnPoint()   | [IBlockPos](IBlockPos)           |
| 保存文件夹             | getSaveFolder()             | 字符串                           |
| 种子                   | getSeed()                   | 长整型                             |
| 生成坐标        | getSpawnCoordinate()        | [IBlockPos](IBlockPos)           |
| 生成点             | getSpawnPoint()             | [IBlockPos](IBlockPos)           |
| voidFogYFactor         | getVoidFogYFactor()         | 双精度                           |
| 世界时间              | getWorldTime()              | 长整型                             |
| 可以在这里重生         | canRespawnHere()            | 布尔值                             |
| 水蒸发          | doesWaterVaporize()         | 布尔值                             |
| 天窗               | hasSkyLight()               | 布尔值                             |
| 白天                | isDaytime()                 | 布尔值                             |
| 地狱                 | isNether()                  | 布尔值                             |
| 天空颜色             | isSkyColored()              | 布尔值                             |
| 地表           | isSurfaceWorld()            | 布尔值                             |

## 带参数的ZenMethods
### 获取特定位置的生物群系

使用一个 [IBlockPos](IBlockPos) 对象。  
来返回一个 [IBiome](/Vanilla/Biomes/IBiome) 对象。
```
worldProvObj.getBiome(IBlockPos position);
```

### 获得特定时间的月相

使用一个长整型。  
来返回一个整型。
```
worldProvObj.getMoonPhase(long time);
```

### 获取特定玩家的重生维度

使用一个 [IPlayer](/Vanilla/Players/IPlayer) 对象。  
来返回一个new IWorldProvider 对象。
```
worldProvObj.getRespawnDimension(IPlayer player);
```

### 获取特定的亮度（系数）

使用一个浮点数。  
来返回一个浮点数。
```
worldProvObj.getStarBrightness(float something);
worldProvObj.getSunBrightness(float something);
worldProvObj.getSunBrightnessFactor(float something);
```

### 检查一个方块是否有高湿度
使用一个 [IBlockPos](IBlockPos) 对象。  
来返回一个布尔值。
```
worldProvObj.isBlockHighHumidity(IBlockPos pos);
```
