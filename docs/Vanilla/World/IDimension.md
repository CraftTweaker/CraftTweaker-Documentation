# IDimension

The IDimension object contains information on a Dimension within the game.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import) the class to avoid errors.  
`import crafttweaker.world.IDimension`

## IBlockGroup extension
IDimension extends [IBlockGroup](IBlockGroup). That means all methods available to IBlockGroups are also available for IDimensions.  
The `dimension` getter is useless though since it only returns this object.


## Methods/Getters

- `dimension.isDay()` or `dimension.day` returns if it is currently day or not in the dimension as bool.  
- `dimension.getBrightness(x,y,z)` returns the brightness at the given location as int. X,y and z are ints.  