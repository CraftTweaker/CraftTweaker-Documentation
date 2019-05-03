# IBlockAction

The IBlockAction function can be added to a [Block](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) and, depending on where you added it, will be triggered when the block is placed or broken.

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IBlockAction;`

## Parameters

The IBlockAction is a function with the following parameters:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → The world the block is in
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) position → The Block's position
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) state → Contains information on the block, such as the Block itself and its metadata

The function doesn't have a return value!

## Example

    zsBlock.onBlockBreak = function(world, blockPos, blockState){
        print("I WAS PLACED!!!");
    }