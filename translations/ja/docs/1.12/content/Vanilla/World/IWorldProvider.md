# IWorldProvider

World Provider Interfaceは[IWorld](/Vanilla/World/IWorld/)オブジェクトからより多くの情報を取得するために使います。

## パッケージのインポート
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IWorldProvider;`

## WorldProviderを作る
Normally, you can just get the worldProvider from an [IWorld](/Vanilla/World/IWorld/) object or some functions, though if yo need to create one yourself, here's how you do it:  
Note that this method should only be called inside functions that are meant to be run inside minecraft, not during the loading circle.
```zenscript
crafttweaker.world.IWorldProvider.getFromID(int id);
```



## ZenMethods without parameters and ZenGetters

| ZenGetter              | ZenMethod                   | 戻り値                                    |
| ---------------------- | --------------------------- | -------------------------------------- |
| actualHeight           | getActualHeight()           | int                                    |
| actualGroundLevel      | getAverageGroundLevel()     | int                                    |
| cloudHeight            | getCloudHeight()            | float                                  |
| currentMoonPhaseFactor | getCurrentMoonPhaseFactor() | float                                  |
| dimensionID            | getDimensionID()            | int                                    |
| height                 | getHeight()                 | int                                    |
| horizon                | getHorizon()                | double                                 |
| lightBrightnesTable    | getLightBrightnesTable()    | float型[]                               |
| movementFactor         | getMovementFactor()         | double                                 |
| randomizedSpawnPoint   | getRandomizedSpawnPoint()   | [IBlockPos](/Vanilla/World/IBlockPos/) |
| saveFolder             | getSaveFolder()             | string                                 |
| seed                   | getSeed()                   | long                                   |
| spawnCoordinate        | getSpawnCoordinate()        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| spawnPoint             | getSpawnPoint()             | [IBlockPos](/Vanilla/World/IBlockPos/) |
| voidFogYFactor         | getVoidFogYFactor()         | double                                 |
| worldTime              | getWorldTime()              | long                                   |
| canRespawnHere         | canRespawnHere()            | bool                                   |
| waterVaporize          | doesWaterVaporize()         | bool                                   |
| skylight               | hasSkyLight()               | bool                                   |
| daytime                | isDaytime()                 | bool                                   |
| nether                 | isNether()                  | bool                                   |
| skyColored             | isSkyColored()              | bool                                   |
| surfaceWorld           | isSurfaceWorld()            | bool                                   |

## ZenMethods with parameters
### 特定の位置のバイオームを取得

Use either an [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Returns an [IBiome](/Vanilla/Biomes/IBiome/) Object.
```zenscript
worldProvObj.getBiome(IBlockPos position);
```

### 特定の時間のMoonPhaseを取得

Use a long.  
Returns an int.
```zenscript
worldProvObj.getMoonPhase(long time);
```

### 特定のプレイヤーのRespawn Dimensionを取得する

Use an [IPlayer](/Vanilla/Players/IPlayer/) object.  
Returns a new IWorldProvider object.
```zenscript
worldProvObj.getRespawnDimension(IPlayer player);
```

### 特定のBrightnes(factor) を取得

Use a float.  
Returns a float.
```zenscript
worldProvObj.getStarBrightness(float something);
worldProvObj.getSunBrightness(float something);
worldProvObj.getSunBrightnessFactor(float something);
```

### ブロックの湿度が高いかを確認する
Use an [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Returns a boolean.
```zenscript
worldProvObj.isBlockHighHumidity(IBlockPos pos);
```