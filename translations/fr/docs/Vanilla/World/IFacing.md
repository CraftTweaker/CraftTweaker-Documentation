# IFacing

The IFacing Interface allows you to get an [IBlockPos's](/Vanilla/World/IBlockPos/) possible directions.

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IFacing;`

## Enumerations

The Facing interface has 6 static methods that return the said direction.  
It also has one more that takes the direction as String input (e.g. `"NORTH"`)

```zenscript
crafttweaker.world.IFacing.north()
crafttweaker.world.IFacing.east()
crafttweaker.world.IFacing.south()
crafttweaker.world.IFacing.west()
crafttweaker.world.IFacing.down()
crafttweaker.world.IFacing.up()


crafttweaker.world.IFacing.fromString(String name);
```

## ZenGetters/ZenMethods without parameters

| ZenGetter | ZenMethod  | Return Type |
| --------- | ---------- | ----------- |
| name      | getName()  | string      |
| rotateY   | rotateY()  | IFacing     |
| opposite  | opposite() | IFacing     |

## Other methods

### Comparing two Facings

You can compare two facings using the standart comparing Operators `== != < > <= >=`  
Alternatively, you can use the function, though the function returns an int that is 0 if they are equal.

```zenscript
//Returns true or false
facingOne == facingTwo;

//Returns 0 if they are equal
facingOne.compare(facingTwo);
```