# IBlockState

An IBlockState object represents a block's current state.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.blocks.IBlockState;` 

## ZenMethods and ZenGetters
|ZenMethod         |ZenGetter       | Return Type                                                          | Description                                             |
|------------------|----------------|----------------------------------------------------------------------|---------------------------------------------------------|
|getBlock()        |block           | [IBlock](/Vanilla/Blocks/IBlock)                                     | Returns the refered block                               |
|getMeta()         |meta            | int                                                                  | Returns the refered block's metadata                    |
|canProvidePower() |canProvidePower | boolean                                                              | Returns if the refered block can provide Redstone Power |
|getMobilityFlag() |mobilityFlag    | String                                                               | Returns the [mobility flag](MobilityFlag) as string     |


## ZenMethods
### isReplacable
`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parameters:

- [IWorld](/Vanilla/World/IWorld) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos) pos → The Block's position

Returns a boolean that sais whether the block can be replaced or not.


### getLightValue
`int getLightValue(IWorld world, IBlockPos blockPos);`  
Parameters:

- [IWorld](/Vanilla/World/IWorld) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos) pos → The Block's position

Returns an int representing the current light value at the given location.

### getWeakPower
`int getWeakPower(IWorld world, IBlockPos blockPos, String facing);`  
Parameters:

- [IWorld](/Vanilla/World/IWorld) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos) pos → The Block's position
- String facing → The side to be checked (you can use the [Facing Interface](/Vanilla/World/Facing) to get the String)
Returns an int representing the current redstone power on this side.

### getComparatorInputOverride
`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Parameters:

- [IWorld](/Vanilla/World/IWorld) world → The world to be checked in
- [IBlockPos](/Vanilla/World/IBlockPos) pos → The Block's position

Returns an int representing the block's redstone comparator input override type.


### Comparing two IBlockState objects

You can either use `int compare(IBlockState other);` or the ZenCompare Tokens `==` `!=`.  
The return different types though:

- `state.compare(other)` returns an int that is 0 if they are equal
- `state == other` returns a bool that is true of they are equal
