# ICTBlockState

An ICTBlockState object represents a block's current state.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.BlockState;` 

## Calling an ICTBlockState
You can get an ICTBlockState either as a parameter in an [IBlockAction function](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/) or from the [Block Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Blocks/)

`<block:minecraft:dirt>`

## ZenMethods and ZenGetters
|ZenMethod         |ZenGetter | Return Type                                                          | Description                                             |
|------------------|----------|----------------------------------------------------------------------|---------------------------------------------------------|
|getBlock()        |block     | [IBlock](/Vanilla/Blocks/IBlock/)                                     | Returns the refered block                               |
|getMeta()         |meta      | int                                                                  | Returns the refered block's metadata                    |
|canProvidePower() |          | boolean                                                              | Returns if the refered block can provide Redstone Power |
|getMobilityFlag() |          |[PushReaction](/Mods/ContantTweaker/Vanilla/Types/Block/PushReaction/) | Returns the push reaction flag                          |


## ZenMethods
### isReplacable
`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Parameters:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → The world to be checked in
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → The Block's position

Returns a boolean that sais whether the block can be replaced or not.


### getLightValue
`int getLightValue(IWorld world, IBlockPos blockPos);`  
Parameters:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → The world to be checked in
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → The Block's position

Returns an int representing the current light value at the given location.

### getWeakPower
`int getWeakPower(IWorld world, IBlockPos blockPos, Facing facing);`  
Parameters:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → The world to be checked in
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → The Block's position
- [Facing](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) facing → The side to be checked

Returns an int representing the current redstone power on this side.

### getComparatorInputOverride
`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Parameters:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → The world to be checked in
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → The Block's position

Returns an int representing the block's redstone comparator input override type.


### Comparing two ICTBlockState objects

You can either use `int compare(ICTBlockState other);` or the ZenCompare Tokens `==` `!=`.  
The return different types though:

- `state.compare(other)` returns an int that is 0 if they are equal
- `state == other` returns a bool that is true of they are equal
