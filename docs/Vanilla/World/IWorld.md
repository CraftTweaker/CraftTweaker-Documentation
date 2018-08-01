# IWorld

The IWorld object contains information on a Dimension within the game.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.world.IWorld`

## Extending IBlockProperties
IBlockState extends [IBlockAccess](IBlockAccess/). That means that all methods that are available to [IBlockAccess](IBlockAccess/) objects are also available to IBlockState objects.

## Creating an IWorld object
Normally, you can derive this object from entities or other functions. If you need to create it yourself though, this is the way to go:  
Note that this method should only be called inside functions that are meant to be run inside minecraft, not during the loading circle.
```
crafttweaker.world.IWorld.getFromID(int id);
```

## ZenMethods without parameters and ZenGetters

|ZenMethod          | ZenGetter     |Return type                      |Description                                                                                                                                                                             |
|-------------------|---------------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|isRemote()         | remote        |boolean                          |True if the world is a "slave" client; changes will not be saved or propagated from this world. For example, server worlds have this set to false, client worlds have this set to true. |
|isRaining()        | raining       |boolean                          |Returns true if it is currently raining.                                                                                                                                                |
|isThundering()     | thundering    |boolean                          |Returns true if it is currently thundering.                                                                                                                                             |
|getMoonPhase()     | moonPhase     |int                              |Returns the current moon phase.                                                                                                                                                         |
|isDayTime()        | dayTime       |boolean                          |Checks if it is daytime.                                                                                                                                                                |
|getWorldTime()     | time          |long                             |Returns the world's time.                                                                                                                                                               |
|getDimension()     | dimension     |int                              |Returns the world's dimension.                                                                                                                                                          |
|isSurfaceWorld()   | surfaceWorld  |boolean                          |Returns whether you are in a surface world or not.                                                                                                                                      |
|getDimensionType() | dimensionType |String                           |Returns the dimension's type name.                                                                                                                                                      |
|getWorldType()     | worldType     |String                           |Returns the world's type name.                                                                                                                                                          |
|getWorldInfo()     | worldInfo     |[IWorldInfo](IWorldInfo/)         |Returns the world's information. Can be used to retrieve even more info on the world.                                                                                                   |
|getProvider()      | provider      |[IWorldProvider](IWorldProvider/) |Returns the world's provider. Can be used to retrieve even more info on the world.                                                                                                      |

## ZenMethods with parameters
### Get Biome at specific Position

Use either an [IPosition3f](/Vanilla/Utils/Position3f/) or an [IBlockPos](IBlockPos/) object.  
Returns an [IBiome](/Vanilla/Biomes/IBiome/) Object.
```
worldObj.getBiome(IPosition3f position);
worldObj.getBiome(IBlockPos position);
```


### Get Brightness at specific Position
Use either three ints or an [IBlockPos](IBlockPos/) object.
Returns an int.
```
worldObj.getBrightness(int x, int y, int z);
worldObj.getBrightness(IBlockPos position);
```

### Get Block at specific Position
Use either three ints or an [IBlockPos](IBlockPos/) object.
Returns an [IBlock](/Vanilla/Blocks/IBlock/) Object.
```
worldObj.getBlock(int x, int y, int z);
worldObj.getBlock(IBlockPos position);
```

### Get or Set a blockState at a specific Position
Use an [IBlockPos](IBlockPos/) Object and for the setter also an [IBlockState](/Vanilla/Blocks/IBlockState/) Object.  
Getter Returns an [IBlockState](/Vanilla/Blocks/IBlockState/), setter a bool.

```
worldObj.getBlockState(IBlockPos pos);
worldObj.setBlockState(IBlockState state, IBlockPos pos);
```

### Spawn entity
Use an [IEntity](/Vanilla/Entities/IEntity/) object.  
Returns a bool that states if the spawn was successful.
```
worldObj.spawnEntity(IEntity entity);
```