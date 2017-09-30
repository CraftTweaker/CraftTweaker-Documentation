# IWorld

An IWorld object represents the world the player is currently in.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.World;` 

## ZenMethods without parameters

|ZenMethod          |Return type |Description                                                                                                                                                                             |
|-------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|isRemote()         |boolean     |True if the world is a "slave" client; changes will not be saved or propagated from this world. For example, server worlds have this set to false, client worlds have this set to true. |
|isRaining()        |boolean     |Returns true if it is currently raining                                                                                                                                                 |
|isThundering()     |boolean     |Returns true if it is currently thundering                                                                                                                                              |
|getMoonPhase()     |int         |Returns the current moon phase                                                                                                                                                          |
|isDayTime()        |boolean     |Checks if it is daytime                                                                                                                                                                 |
|getWorldTime()     |long        |Returns the world's time                                                                                                                                                                |
|getDimension()     |int         |Returns the world's dimension                                                                                                                                                           |
|isSurfaceWorld()   |boolean     |Returns whether you are in a surface world or not                                                                                                                                       |
|getDimensionType() |String      |Returns the dimension's type name                                                                                                                                                       |

## ZenMethods with parameters

- [IBiome](/Vanilla/Biomes/IBiome) getBiome([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos) blockPos);
- boolean setBlockState([ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState) blockState, [IBlockPos](/mods/ContentTweaker/Vanilla/Types/Block/IBlockPos) blockPos);