# IFacing

The IFacing Interface allows you to get an [IBlockPos's](IBlockPos) possible directions.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IFacing;` 

## Enumerations
The facing Interface has 7 static Methods, each returning the said direction.  
The last one takes the direction as String input (e.g. `"NORTH"`)
```
crafttweaker.world.Facing.north()
crafttweaker.world.Facing.east()
crafttweaker.world.Facing.south()
crafttweaker.world.Facing.west()
crafttweaker.world.Facing.down()
crafttweaker.world.Facing.up()


crafttweaker.world.Facing.fromString(String name);
```