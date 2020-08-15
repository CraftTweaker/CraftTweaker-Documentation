# IBlockPos

An IBlockPos object represents a position in the game.

## Importation du paquet

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.BlockPos;`

## ZenMethods without parameters

| Méthode Zen | ZenGetter | Type de retour | Libellé                        |
| ----------- | --------- | -------------- | ------------------------------ |
| getX()      | x         | Indice         | Returns the position's X value |
| getY()      | y         | Indice         | Returns the position's Y value |
| getZ()      | z         | Indice         | Returns the position's Z value |

## ZenMethods with parameters

### Get Offset

Returns a new IBlockPos that is `offset` blocks into the `directionName` or `facing` direction.

`IBlockPos getOffset(String directionName, int offset);`

`directionName` can take these values:

- "down"
- "up"
- "north"
- "south"
- "east"
- "west"

`IBlockPos getOffset(Facing facing, int offset)` Parameters:

- [Facing](/Vanilla/World/IFacing/) facing → The direction
- int offset → how many blocks in that direction?