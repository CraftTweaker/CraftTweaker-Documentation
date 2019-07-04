# IBlockColorSupplier

The IBlockColorSupplier function can be used to provide the [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) to be used for whatever.

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IBlockColorSupplier;`

## Parameters

The IBlockColorSupplier Function is a function with following parameters.

- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) state → the blockstate of the block whose color is being requested.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) access → the block access of the block whose color is being requested.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → the position of the block whose color is being requested.
- int tintIndex → the tint index, use that however you like. The function needs to return an [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/).

## Examples

    #loader contenttweaker
    
    import mods.contenttweaker.IBlockColorSupplier;
    import mods.contenttweaker.BlockState;
    import mods.contenttweaker.BlockPos;
    import mods.contenttweaker.Color;
    
    import crafttweaker.world.IBlockAccess;
    
    function getBlockColor(state as BlockState, access as IBlockAccess, pos as BlockPos, tintIndex as int) as Color {
      //Returns a lime color
        return Color.fromInt(0x00FF00);
    }