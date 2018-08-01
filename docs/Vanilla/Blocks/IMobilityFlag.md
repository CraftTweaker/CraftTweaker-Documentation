# IMobilityFlag

The IMobilityFlag Interface allows you to get an [IBlockState's](/Vanilla/Blocks/IBlockState/) possible mobilityFlags.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.block.IMobilityFlag;` 

## ZenMethods
#### Matches
You can check if two IMobilityFlag objects are equal:  
Returns a bool.
```
flagOne.matches(other);
```

## Enumerations
The MobilityFlag Interface has 5 static Methods, each returning the given IMobilityFlag object.
```
crafttweaker.block.MobilityFlag.normal()
crafttweaker.block.MobilityFlag.destroy()
crafttweaker.block.MobilityFlag.block()
crafttweaker.block.MobilityFlag.ignore()
crafttweaker.block.MobilityFlag.pushOnly()
```