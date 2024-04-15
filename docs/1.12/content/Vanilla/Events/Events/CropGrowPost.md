# CropGrowPostEvent

The CropGrowPost Event is fired once a crop block has **successfully** grown. It cannot be canceled, and merely serves as a notification of crop growth.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CropGrowPostEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
CropGrowPost Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters/ZenSetters
The following information can be retrieved from the event:

| ZenGetter            | ZenSetter     | Type                                                               |
|----------------------|---------------|--------------------------------------------------------------------|
| `originalBlockState` |               | [IBlockState](/Vanilla/Blocks/IBlockState/)                        |
| `originalBlock`      |               | [IBlock](/Vanilla/Blocks/IBlock/)                                  |

## Description
`originalBlockState` -> returns [IBlockState](/Vanilla/Blocks/IBlockState/) before grow happend
`originalBlock` -> returns [IBlock](/Vanilla/Blocks/IBlock/) before grow happend

## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `world`         |                 | [IWorld](/Vanilla/World/IWorld/)                  |
| `blockState`    |                 | [IBlockState](/Vanilla/Blocks/IBlockState/)       |
| `block`         |                 | [IBlock](/Vanilla/Blocks/IBlock/)                 |


## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `position`      |                 | [IBlockPos](/Vanilla/World/IBlockPos/)            |
| `x`             |                 | int                                               |
| `y`             |                 | int                                               |
| `z`             |                 | int                                               |


