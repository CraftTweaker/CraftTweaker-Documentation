# IWorldProvider

世界提供商界面用于从 [IWorld](/Vanilla/World/IWorld/) 对象中获取更多信息。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入craftweaper.worldIWorldProvider；`

## 创建一个世界提供商

通常，您可以从 [IWorld](/Vanilla/World/IWorld/) 对象或某些函数中获得世界提供者。 但如果您自己需要创建一个 这里你是如何操作的。  
注意这个方法只能调用在想要在Minecraft里运行的函数内， 不在加载圆圈中。

```zenscript
craftminvest.worldIWorldProvider.getFromID(int id)；
```

## 无参数的 ZenMethods 和 ZenGetters

| ZenGetter            | ZenMethod                   | 返回值类型                                  |
| -------------------- | --------------------------- | -------------------------------------- |
| actualHeight         | getActualHeight()           | 整数                                     |
| 实际地面级别               | getAverageGroundLevel()     | int                                    |
| 云高度                  | getCloudHeight()            | float                                  |
| 电流月份因子               | getCurrentMoonPhaseFactor() | 浮点数                                    |
| dimensionID          | getDimensionID()            | 整数                                     |
| 高度                   | getHight()                  | 整数                                     |
| 地平线                  | getHorizon()                | 双精度                                    |
| lightBrightnesTable  | getLightBrightnesTable()    | 浮点数[]                                  |
| 移动因子                 | getMovementFactor()         | 双精度                                    |
| randomizedSpawnPoint | getRandomizedSpawnPoint()   | [IBlockPos](/Vanilla/World/IBlockPos/) |
| 保存文件夹                | getSaveFolder()             | 字符串                                    |
| 种子                   | getSeed()                   | 长                                      |
| 出生点坐标                | getSpawnCoordinate()        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| 出生点                  | getSpawnPoint()             | [IBlockPos](/Vanilla/World/IBlockPos/) |
| voidFogYFactor       | getVoidFogYFactor()         | 双精度                                    |
| 世界时间                 | getWorldTime()              | 长                                      |
| canRespawnHere       | canRespawnHere()            | 布尔值                                    |
| waterVaporize        | WaterVaporize()             | 布尔值                                    |
| 天光                   | hasSkyLight()               | 布尔值                                    |
| daytime              | isDaytime()                 | 布尔值                                    |
| 下线                   | 荷兰()                        | 布尔值                                    |
| 天空颜色                 | isSkyColored()              | 布尔值                                    |
| 表面世界                 | isSurfaceWorld()            | 布尔值                                    |

## 带参数的 ZenMethods

### 在特定位置获得生物组

使用 [IBlockPos](/Vanilla/World/IBlockPos/) 对象。  
返回一个 [IBiome](/Vanilla/Biomes/IBiome/) 对象。

```zenscript
worldProvObj.getBiome(IBlockPos 位置)；
```

### 在特定时间内获得月球阶段

使用长度。  
返回一个整数。

```zenscript
worldProvObj.getMoonPhase(长时间)；
```

### 为特定玩家获取重生尺寸

使用 [IPlayer](/Vanilla/Players/IPlayer/) 对象。  
返回一个新的 IWorldProvider 对象。

```zenscript
worldProvObj.getRespawnDimension(IPlayer player)；
```

### 在特定的特定位置获得明亮(因子)

使用一个浮点数。  
返回一个浮点数。

```zenscript
worldProvObj.getStarBrightness(float something);
worldProvObj.getSunBrightness(float something);
worldProvObj.getSunBrightnessFactor(float something);
```

### 检查块是否湿度高

使用 [IBlockPos](/Vanilla/World/IBlockPos/) 对象。  
返回布尔值。

```zenscript
worldProvObj.isBlockHighidity(IBlockPos pos);
```