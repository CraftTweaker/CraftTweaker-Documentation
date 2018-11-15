# IBlockState

An IBlockState object represents a block's current state.

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockState;`

## Extending IBlockProperties

IBlockState extends [IBlockProperties](/Vanilla/Blocks/IBlockProperties/). That means that all methods that are available to [IBlockProperties](/Vanilla/Blocks/IBlockProperties/) objects are also available to IBlockState objects.

## ZenMethods and ZenGetters

| ZenGetter | Return Type                       | Description                          |
| --------- | --------------------------------- | ------------------------------------ |
| block     | [IBlock](/Vanilla/Blocks/IBlock/) | Returns the refered block            |
| meta      | int                               | Returns the refered block's metadata |

## ZenMethods

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parameters:

- [IWorld](/Vanilla/World/IWorld/) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → The Block's position

Returns a boolean that sais whether the block can be replaced or not.

### Comparing two IBlockState objects

You can either use `int compare(IBlockState other);` or the ZenCompare Tokens `==` `!=`.  
The return different types though:

- `state.compare(other)` returns an int that is 0 if they are equal
- `state == other` returns a bool that is true of they are equal