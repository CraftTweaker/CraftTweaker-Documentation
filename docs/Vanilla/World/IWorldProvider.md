# IWorldProvider

The World Provider interface is used to get even more information out of an [IWorld](/Vanilla/World/IWorld/) object.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IWorldProvider;` 

## Create a worldProvider
Normally, you can just get the worldProvider from an [IWorld](/Vanilla/World/IWorld/) object or some functions, though if yo need to create one yourself, here's how you do it:  
Note that this method should only be called inside functions that are meant to be run inside minecraft, not during the loading circle.
```
crafttweaker.world.IWorldProvider.getFromID(int id);
```



## ZenMethods without parameters and ZenGetters

| ZenGetter              | ZenMethod                   |Return Type                       |
|------------------------|-----------------------------|----------------------------------|
| actualHeight           | getActualHeight()           | int                              |
| actualGroundLevel      | getAverageGroundLevel()     | int                              |
| cloudHeight            | getCloudHeight()            | float                            |
| currentMoonPhaseFactor | getCurrentMoonPhaseFactor() | float                            |
| dimensionID            | getDimensionID()            | int                              |
| height                 | getHeight()                 | int                              |
| horizon                | getHorizon()                | double                           |
| lightBrightnesTable    | getLightBrightnesTable()    | float[]                          |
| movementFactor         | getMovementFactor()         | double                           |
| randomizedSpawnPoint   | getRandomizedSpawnPoint()   | [IBlockPos](/Vanilla/World/IBlockPos/)           |
| saveFolder             | getSaveFolder()             | String                           |
| seed                   | getSeed()                   | long                             |
| spawnCoordinate        | getSpawnCoordinate()        | [IBlockPos](/Vanilla/World/IBlockPos/)           |
| spawnPoint             | getSpawnPoint()             | [IBlockPos](/Vanilla/World/IBlockPos/)           |
| voidFogYFactor         | getVoidFogYFactor()         | double                           |
| worldTime              | getWorldTime()              | long                             |
| canRespawnHere         | canRespawnHere()            | bool                             |
| waterVaporize          | doesWaterVaporize()         | bool                             |
| skylight               | hasSkyLight()               | bool                             |
| daytime                | isDaytime()                 | bool                             |
| nether                 | isNether()                  | bool                             |
| skyColored             | isSkyColored()              | bool                             |
| surfaceWorld           | isSurfaceWorld()            | bool                             |

## ZenMethods with parameters
### get Biome at a certain Position

Use either an [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Returns an [IBiome](/Vanilla/Biomes/IBiome/) Object.
```
worldProvObj.getBiome(IBlockPos position);
```

### get MoonPhase for a specific time

Use a long.  
Returns an int.
```
worldProvObj.getMoonPhase(long time);
```

### get Respawn Dimension for a specific player

Use an [IPlayer](/Vanilla/Players/IPlayer/) object.  
Returns a new IWorldProvider object.
```
worldProvObj.getRespawnDimension(IPlayer player);
```

### get Brightnes (factor) at a specific 

Use a float.  
Returns a float.
```
worldProvObj.getStarBrightness(float something);
worldProvObj.getSunBrightness(float something);
worldProvObj.getSunBrightnessFactor(float something);
```

### Check if a block has a high humidity
Use an [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Returns a boolean.
```
worldProvObj.isBlockHighHumidity(IBlockPos pos);
```