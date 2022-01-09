# IWorld

An IWorld object represents the world the player is currently in.

## 导入相关包
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.World;`

## ZenMethods without parameters and ZenGetters

| ZenMethod          | ZenGetter     | Return type                                                    | 描述                                                                                                                                                                                      |
| ------------------ | ------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isRemote()         | remote        | 布尔值                                                            | True if the world is a "slave" client; changes will not be saved or propagated from this world. For example, server worlds have this set to false, client worlds have this set to true. |
| isRaining()        | raining       | 布尔值                                                            | Returns true if it is currently raining                                                                                                                                                 |
| isThundering()     | thundering    | 布尔值                                                            | Returns true if it is currently thundering                                                                                                                                              |
| getMoonPhase()     | moonPhase     | int                                                            | Returns the current moon phase                                                                                                                                                          |
| isDayTime()        | dayTime       | 布尔值                                                            | Checks if it is daytime                                                                                                                                                                 |
| getWorldTime()     | time          | long                                                           | Returns the world's time                                                                                                                                                                |
| getDimension()     | dimension     | int                                                            | Returns the world's dimension                                                                                                                                                           |
| isSurfaceWorld()   | surfaceWorld  | 布尔值                                                            | Returns whether you are in a surface world or not                                                                                                                                       |
| getDimensionType() | dimensionType | 字符串[string]                                                    | Returns the dimension's type name                                                                                                                                                       |
| getRandom()        | random        | [CTRandom](/Mods/ContentTweaker/Vanilla/Types/World/CTRandom/) | Returns the world's random number generator                                                                                                                                             |

## ZenMethods with parameters

- [IBiome](/Vanilla/Biomes/IBiome/) getBiome([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- boolean setBlockState([ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState, [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) getBlockState([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);