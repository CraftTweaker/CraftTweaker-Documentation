# IWorldProvider

World Provider Interfaceは[IWorld](/Vanilla/World/IWorld/)オブジェクトからより多くの情報を取得するために使います。

## パッケージをインポートする

問題が発生した場合は、インポートを追加する必要があります。しかし、問題が発生していなくてもインポートすることをお勧めします。  
`import crafttweaker.world.IWorldProvider;`

## WorldProviderを作る

通常は、[IWorld](/Vanilla/World/IWorld/)オブジェクトまたはいくつかの関数から、worldProviderを習得できますが、自分で作成する場合、以下のようにします。:  
このメゾットはMinecraft内部で実行されることを意図した関数内で呼び出されるべきで、ロード中には呼び出されないことに注意が必要です。

    crafttweaker.world.IWorldProvider.getFromID(int id);
    

## パラメータなしのZenMethodsとZenGetters

| ZenGetter              | ZenMethod                   | Return Type                            |
| ---------------------- | --------------------------- | -------------------------------------- |
| actualHeight           | getActualHeight()           | int型                                   |
| actualGroundLevel      | getAverageGroundLevel()     | int型                                   |
| cloudHeight            | getCloudHeight()            | float型                                 |
| currentMoonPhaseFactor | getCurrentMoonPhaseFactor() | float型                                 |
| dimensionID            | getDimensionID()            | int型                                   |
| height                 | getHeight()                 | int型                                   |
| horizon                | getHorizon()                | double型                                |
| lightBrightnesTable    | getLightBrightnesTable()    | float型[]                               |
| movementFactor         | getMovementFactor()         | double型                                |
| randomizedSpawnPoint   | getRandomizedSpawnPoint()   | [IBlockPos](/Vanilla/World/IBlockPos/) |
| saveFolder             | getSaveFolder()             | 文字列                                    |
| seed                   | getSeed()                   | long型                                  |
| spawnCoordinate        | getSpawnCoordinate()        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| spawnPoint             | getSpawnPoint()             | [IBlockPos](/Vanilla/World/IBlockPos/) |
| voidFogYFactor         | getVoidFogYFactor()         | double型                                |
| worldTime              | getWorldTime()              | long型                                  |
| canRespawnHere         | canRespawnHere()            | bool型                                  |
| waterVaporize          | doesWaterVaporize()         | bool型                                  |
| skylight               | hasSkyLight()               | bool型                                  |
| daytime                | isDaytime()                 | bool型                                  |
| nether                 | isNether()                  | bool型                                  |
| skyColored             | isSkyColored()              | bool型                                  |
| surfaceWorld           | issurfaceWorld()            | bool型                                  |

## パラメータ付きのZenMethods

### 特定の位置のバイオームを取得

[IBlockPos](/Vanilla/World/IBlockPos/)オブジェクトを使ってください。  
[IBiome](/Vanilla/Biomes/IBiome/)オブジェクトを返します。

    worldProvObj.getBiome(IBlockPos position);
    

### 特定の時間のMoonPhaseを取得

Long型を使ってください。  
int型を返します。

    worldProvObj.getMoonPhase(long time);
    

### 特定のプレイヤーのRespawn Dimensionを取得する

[IPlayer](/Vanilla/Players/IPlayer/)オブジェクトを使ってください。  
新しいIWorldProviderオブジェクトで返されます。

    worldProvObj.getRespawnDimension(IPlayer player);
    

### 特定のBrightnes(factor) を取得

Float型を使ってください。  
float型で返されます。

    worldProvObj.getStarBrightness(float something);
    worldProvObj.getSunBrightness(float something);
    worldProvObj.getSunBrightnessFactor(float something);
    

### ブロックの湿度が高いかを確認する

[IBlockPos](/Vanilla/World/IBlockPos/)オブジェクトを使ってください。  
boolean型で返されます。

    worldProvObj.isBlockHighHumidity(IBlockPos pos);