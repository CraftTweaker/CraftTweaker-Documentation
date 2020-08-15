# IWorldProvider

The World Provider interface is used to get even more information out of an [IWorld](/Vanilla/World/IWorld/) object.

## Importazione del pacchetto

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IWorldProvider;`

## Create a worldProvider

Normally, you can just get the worldProvider from an [IWorld](/Vanilla/World/IWorld/) object or some functions, though if yo need to create one yourself, here's how you do it:  
Note that this method should only be called inside functions that are meant to be run inside minecraft, not during the loading circle.

```zenscript
crafttweaker.world.IWorldProvider.getFromID(int id);
```

## ZenMetodi senza parametri e ZenGetters

| ZenGetter              | ZenMethod                   | Tipo Di Reso                           |
| ---------------------- | --------------------------- | -------------------------------------- |
| actualHeight           | getActualHeight()           | int                                    |
| actualGroundLevel      | getAverageGroundLevel()     | int                                    |
| cloudHeight            | getCloudHeight()            | galleggiante                           |
| currentMoonPhaseFactor | getCurrentMoonPhaseFactor() | galleggiante                           |
| dimensionID            | getDimensionID()            | int                                    |
| height                 | getHeight()                 | int                                    |
| horizon                | getHorizon()                | doppia                                 |
| lightBrightnesTable    | getLightBrightnesTable()    | float[]                                |
| movementFactor         | getMovementFactor()         | doppia                                 |
| randomizedSpawnPoint   | getRandomizedSpawnPoint()   | [IBlockPos](/Vanilla/World/IBlockPos/) |
| saveFolder             | getSaveFolder()             | stringa                                |
| seed                   | getSeed()                   | lungo                                  |
| spawnCoordinate        | getSpawnCoordinate()        | [IBlockPos](/Vanilla/World/IBlockPos/) |
| spawnPoint             | getSpawnPoint()             | [IBlockPos](/Vanilla/World/IBlockPos/) |
| voidFogYFactor         | getVoidFogYFactor()         | doppia                                 |
| worldTime              | getWorldTime()              | lungo                                  |
| canRespawnHere         | canRespawnHere()            | bool                                   |
| waterVaporize          | doesWaterVaporize()         | bool                                   |
| skylight               | hasSkyLight()               | bool                                   |
| daytime                | isDaytime()                 | bool                                   |
| nether                 | isNether()                  | bool                                   |
| skyColored             | isSkyColored()              | bool                                   |
| surfaceWorld           | isSurfaceWorld()            | bool                                   |

## ZenMethods con parametri

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