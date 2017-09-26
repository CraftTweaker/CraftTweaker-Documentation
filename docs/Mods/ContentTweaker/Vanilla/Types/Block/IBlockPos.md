# IBlockPos

An IBlockPos object represents a position in the game.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.BlockPos;` 

## ZenMethods without parameters

| ZenMethod | Return Type | Description                    |
|-----------|-------------|--------------------------------|
| getX()    | int         | Returns the position's X value |
| getY()    | int         | Returns the position's Y value |
| getZ()    | int         | Returns the position's Z value |

## ZenMethods with parameters

### Get Offset
Returns a new IBlockPos that is `offset` blocks into the `directionName` direction.

`IBlockPos getOffset(String directionName, int offset);`

`directionName` can take these values:

- "down"
- "up"
- "north"
- "south"
- "east"
- "west"