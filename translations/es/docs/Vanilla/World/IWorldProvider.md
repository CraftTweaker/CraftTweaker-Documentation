# IWorldProvider

The World Provider interface is used to get even more information out of an [IWorld](/Vanilla/World/IWorld/) object.

## Importando el paquete

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IWorldProvider;`

## Create a worldProvider

Normally, you can just get the worldProvider from an [IWorld](/Vanilla/World/IWorld/) object or some functions, though if yo need to create one yourself, here's how you do it:  
Note that this method should only be called inside functions that are meant to be run inside minecraft, not during the loading circle.

```zenscript
crafttweaker.world.IWorldProvider.getFromID(int id);
```

## ZenMethods sin parámetros y ZenGetters

| ZenGetter              | Método                      | Tipo de devolución                     |
| ---------------------- | --------------------------- | -------------------------------------- |
| actualHeight           | getActualHeight()           | int                                    |
| actualGroundLevel      | getAverageGroundLevel()     | int                                    |
| cloudHeight            | getCloudHeight()            | flotante                               |
| currentMoonPhaseFactor | getCurrentMoonPhaseFactor() | flotante                               |
| dimensionID            | getDimensionID()            | int                                    |
| height                 | getHeight()                 | int                                    |
| horizon                | getHorizon()                | doble                                  |
| lightBrightnesTable    | getLightBrightnesTable()    | float[]                                |
| movementFactor         | getMovementFactor()         | doble                                  |
| randomizedSpawnPoint   | getRandomizedSpawnPoint()   | [IBlockPos](/Vanilla/World/IBlockPos/) |
| saveFolder             | getSaveFolder()             | cadena                                 |
| seed                   | getSeed()                   | largo                                  |
| spawnCoordinate        | getSpawnCoordinate()        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| spawnPoint             | getSpawnPoint()             | [IBlockPos](/Vanilla/World/IBlockPos/) |
| voidFogYFactor         | getVoidFogYFactor()         | doble                                  |
| worldTime              | getWorldTime()              | largo                                  |
| canRespawnHere         | canRespawnHere()            | pluma                                  |
| waterVaporize          | doesWaterVaporize()         | pluma                                  |
| skylight               | hasSkyLight()               | pluma                                  |
| daytime                | isDaytime()                 | pluma                                  |
| nether                 | isNether()                  | pluma                                  |
| skyColored             | isSkyColored()              | pluma                                  |
| mundo de superficie    | es SurfaceWorld()           | pluma                                  |

## ZenMethods con parámetros

### get Biome at a certain Position

Use either an [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Returns an [IBiome](/Vanilla/Biomes/IBiome/) Object.

```zenscript
worldProvObj.getBiome(IBlockPos position);
```

### get MoonPhase for a specific time

Use a long.  
Returns an int.

```zenscript
worldProvObj.getMoonPhase(long time);
```

### get Respawn Dimension for a specific player

Use an [IPlayer](/Vanilla/Players/IPlayer/) object.  
Returns a new IWorldProvider object.

```zenscript
worldProvObj.getRespawnDimension(IPlayer player);
```

### get Brightnes (factor) at a specific

Use a float.  
Returns a float.

```zenscript
worldProvObj.getStarBrightness(float something);
worldProvObj.getSunBrightness(float something);
worldProvObj.getSunBrightnessFactor(float something);
```

### Check if a block has a high humidity

Use an [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Returns a boolean.

```zenscript
worldProvObj.isBlockHighHumidity(IBlockPos pos);
```