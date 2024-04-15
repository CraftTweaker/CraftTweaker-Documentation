# IWorld

The IWorld object contains information on a Dimension within the game.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.world.IWorld`

## Extending IBlockProperties
IWorld extends [IBlockAccess](/Vanilla/World/IBlockAccess/). That means that all methods that are available to [IBlockAccess](/Vanilla/World/IBlockAccess/) objects are also available to IWorld.

## Creating an IWorld object
Normally, you can derive this object from entities or other functions. If you need to create it yourself though, this is the way to go:  
Note that this method should only be called inside functions that are meant to be run inside minecraft, not during the loading circle.
```zenscript
crafttweaker.world.IWorld.getFromID(int id);
```

## ZenMethods without parameters and ZenGetters

|ZenMethod          | ZenGetter     |Return type                      |Description                                                                                                                                                                             |
|-------------------|---------------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|isRemote()         | remote        |boolean                          |True if the world is a "slave" client; changes will not be saved or propagated from this world. For example, server worlds have this set to false, client worlds have this set to true. |
|isRaining()        | raining       |boolean                          |Returns true if it is currently raining.                                                                                                                                                |
|getMoonPhase()     | moonPhase     |int                              |Returns the current moon phase.                                                                                                                                                         |
|isDayTime()        | dayTime       |boolean                          |Checks if it is daytime.                                                                                                                                                                |
|getWorldTime()     | time          |long                             |Returns the world's time.                                                                                                                                                               |
|getDimension()     | dimension     |int                              |Returns the world's dimension.                                                                                                                                                          |
|isSurfaceWorld()   | surfaceWorld  |boolean                          |Returns whether you are in a surface world or not.                                                                                                                                      |
|getDimensionType() | dimensionType |String                           |Returns the dimension's type name.                                                                                                                                                      |
|getWorldType()     | worldType     |String                           |Returns the world's type name.                                                                                                                                                          |
|getWorldInfo()     | worldInfo     |[IWorldInfo](/Vanilla/World/IWorldInfo/)         |Returns the world's information. Can be used to retrieve even more info on the world.                                                                                                   |
|getProvider()      | provider      |[IWorldProvider](/Vanilla/World/IWorldProvider/) |Returns the world's provider. Can be used to retrieve even more info on the world.                                                                                                      |
|getSeaLevel()      | seaLevel      |int                              |Returns the world's sea level.                                                                                                                                                         |
|getRandom()         | random |[IRandom](/Vanilla/Utils/IRandom/) | Returns the world's random generator |

## ZenMethods with parameters
### Get Biome at specific Position

Use either an [IPosition3f](/Vanilla/Utils/Position3f/) or an [IBlockPos](/Vanilla/World/IBlockPos/) object.  
Returns an [IBiome](/Vanilla/Biomes/IBiome/) Object.
```zenscript
worldObj.getBiome(IPosition3f position);
worldObj.getBiome(IBlockPos position);
```


### Get Brightness at specific Position
Use either three ints or an [IBlockPos](/Vanilla/World/IBlockPos/) object.
Returns an int.
```zenscript
worldObj.getBrightness(int x, int y, int z);
worldObj.getBrightness(IBlockPos position);
```

### Get Block at specific Position
Use either three ints or an [IBlockPos](/Vanilla/World/IBlockPos/) object.
Returns an [IBlock](/Vanilla/Blocks/IBlock/) Object.
```zenscript
worldObj.getBlock(int x, int y, int z);
worldObj.getBlock(IBlockPos position);
```

### Get or Set a blockState at a specific Position
Use an [IBlockPos](/Vanilla/World/IBlockPos/) Object and for the setter also an [IBlockState](/Vanilla/Blocks/IBlockState/) Object. Optionally an [IData](/Vanilla/Data/IData/) object can be specified to define NBT data for the blockstate's TileEntity when it is set.
Getter Returns an [IBlockState](/Vanilla/Blocks/IBlockState/), setter a bool.

```zenscript
worldObj.getBlockState(IBlockPos pos);
worldObj.setBlockState(IBlockState state, IBlockPos pos);
worldObj.setBlockState(IBlockState state, IData tileEntityData, IBlockPos pos);
```

### Spawn Entity
Use an [IEntity](/Vanilla/Entities/IEntity/) object.  
Returns a bool that states if the spawn was successful.
```zenscript
worldObj.spawnEntity(IEntity entity);
```

### Create Lightningbolt
Returns the Lightningbolt as an [IEntity](/Vanilla/Entities/IEntity/) object.
```zenscript
worldObj.createLightningBolt(double x, double y, double z, @Optional boolean effectOnly);
```

### Add a Weather Effect
Use an [IEntity](/Vanilla/Entities/IEntity/) object.  
Returns a bool that states if the spawn was successful.
```zenscript
worldObj.addWeatherEffect(IEntity entity);
```

### Remove Entity
Use an [IEntity](/Vanilla/Entities/IEntity/) object.  
Returns a bool that states if the remove was successful.
```zenscript
worldObj.removeEntity(IEntity entity);
```

### Get a raytrace result  
Use two [IVector3d](/Vanilla/World/IVector3d/) objects, and three booleans to get an [IRayTraceResult](/Vanilla/World/IRayTraceResult/).  
**Can be null**

The first vector describes the starting point, the 2nd vector the direction and length we are searching in.  
Only the last parameter is true by default.

```zenscript
worldObj.rayTraceBlocks(IVector3d begin, IVector3d ray, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(true) boolean returnLastUncollidableBlock)
```

### Get the picked block
Use an [IBlockPos](/Vanilla/World/IBlockPos/), an [IRayTraceResult](/Vanilla/World/IRayTraceResult/)
and an [IPlayer](/Vanilla/Players/IPlayer/).  
Returns an [IItemStack](/Vanilla/Items/IItemStack/).  
**Can be null**

Gets the [IItemStack](/Vanilla/Items/IItemStack/) that would be obtained by picking the block at the position.

```zenscript
worldObj.getPickedBlock(IBlockPos pos, IRayTraceResult rayTraceResult, IPlayer player);
```

### Check if a position is a spawn chunk 
Returns a bool that states if the position is a spawn chunk.

```zenscript
worldObj.isSpawnChunk(int x, int z);
```

### Extinguish Fire
Returns a bool.

```zenscript
worldObj.extinguishFire(IPlayer player, IBlockPos pos, IFacing side);
```

### Create an explosion object
Use an [IEntity](/Vanilla/Entities/IEntity/), three doubles, a float, and two booleans.
Returns an [IExplosion](/Vanilla/World/IExplosion/).

Creates an [IExplosion](/Vanilla/World/IExplosion/) in the world at the given coordinates. The explosion will have the specified placer (can be null), as well as the size of the explosion and whether it should cause fire and/or cause terrain damage, respectively.

```zenscript
worldObj.createExplosion(IEntity exploder, double x, double y, double z, float size, bool causesFire, bool damagesTerrain);
```


### Perform an explosion in the world
#### Create & perform in the same method
Use an [IEntity](/Vanilla/Entities/IEntity/), three doubles, a float, and two booleans.
Returns the created and performed [IExplosion](/Vanilla/World/IExplosion/).

Creates and performs an IExplosion in the world at the given coordinates. The explosion will have the specified placer (can be null), as well as the size of the explosion and whether it should cause fire and/or cause terrain damage, respectively.

```zenscript
worldObj.performExplosion(IEntity exploder, double x, double y, double z, float size, bool causesFire, bool damagesTerrain);
```

#### Only perform an existing explosion
Use an [IExplosion](/Vanilla/World/IExplosion/).
Returns the performed [IExplosion](/Vanilla/World/IExplosion/).

Performs the [IExplosion](/Vanilla/World/IExplosion/) in the world.

```zenscript
worldObj.performExplosion(IExplosion explosion);
```
