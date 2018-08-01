# IFacing

The IFacing Interface allows you to get an [IBlockPos's](IBlockPos/) possible directions.

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

## ZenGetters/ZenMethods without parameters
| ZenGetter  | ZenMethod  | Return Type |
|------------|------------|-------------|
| name       | getName()  | string      |
| rotateY    | rotateY()  | IFacing     |
| opposite   | opposite() | IFacing     |

## Other methods
### Comparing two Facings
You can compare two facings using the standart comparing Operators `== != < > <= >=`  
Alternatively, you can use the function, though the function returns an int that is 0 if they are equal.
```
//Returns true or false
facingOne == facingTwo;

//Returns 0 if they are equal
facingOne.compare(facingTwo);
```