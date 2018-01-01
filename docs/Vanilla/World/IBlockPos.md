# IBlockPos

An IBlockPos object represents a position in the game.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IBlockPos;` 

## ZenMethods without parameters

| ZenMethod    |ZenGetter/Caster | Return Type                              | Description                                |
|--------------|-----------------|------------------------------------------|--------------------------------------------|
| getX()       | x               | int                                      | Returns the position's X value             |
| getY()       | y               | int                                      | Returns the position's Y value             |
| getZ()       | z               | int                                      | Returns the position's Z value             |
| asPosition3f | as IPosition3f  | [IPosition3f](/Vanilla/Utils/Position3f) | Returns the position as Position3f Object. |

## ZenMethods with parameters

### Get Offset
Returns a new IBlockPos that is `offset` blocks into the `direction` direction.

`IBlockPos getOffset(IFacing direction, int offset);`

Alternatively you can directly get the [IFacing](Facing) objects using the static methods provided there.

- [IFacing](IFacing) direction → The direction
- int offset → how many blocks in that direction?