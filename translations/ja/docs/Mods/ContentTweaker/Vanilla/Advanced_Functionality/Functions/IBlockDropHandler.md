# IBlockDropHandler

The IBlockDropHandler function is used to allow for advanced block drop handling for [Blocks](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) created with the [Vanilla Factory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/).

## Importing the class

You want to import the class? Here you go:

    import mods.contenttweaker.DropHandler;
    

## Function structure

The function is a void function that takes the following parameters:

- [ICTItemList](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/) drops.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) world -> the world we are in, possible an [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/), you might want to instanceof and downcast
- [IBlockPos](/Vanilla/World/IBlockPos/) position -> the position of the block
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) state -> the blockstate of the block
- int fortune -> the fortune level of the tool used

As this method does not return anything, all drops need to be added to the `drops` list using the exposed methods.  
Read about them [here](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/).

## Example

    block.setDropHandler(function(drops, world, position, state) {
    
        drops.add(<minecraft:bedrock>);
        drops.add(<minecraft:carrot> % 50);
    
        return;
    });