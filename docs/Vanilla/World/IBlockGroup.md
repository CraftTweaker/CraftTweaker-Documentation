# IBlockGroup

An IBlockGroup Object contains information on a group of blocks, that can be accessed using coordinates.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import) the class to avoid errors.  
`import crafttweaker.world.IBlockGroup`

## ZenGetters/Methods
- `blockGroup.dimension` returns the dimension the blockgroup is in as [IDimension](IDimension).
- `blockgroup.getBlock(int x, int y, int z)` returns the [IBlock](/Vanilla/Blocks/IBlock) at the given coordinates.