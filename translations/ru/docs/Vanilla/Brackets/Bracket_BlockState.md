# BlockState Bracket Handler

The BlockState Bracket Handler gives you access to the BlockStates in the game. It is only possible to get BlockStates registered in the game, so adding or removing mods may cause issues if you reference the mod's blockstates in a BlockState Bracket Handler.

BlockStates are referenced in the BlockState Bracket Handler like so:

    <blockstate:modid:blockname>
    

With the `modid` being the modid of the mod that the block is defined in, and `blockname` being the name of the block. This will return the default BlockState for the specified block.

To get a specific blockstate with the BlockState Bracket Handler, you can optionally specify its properties like so:

    <blockstate:modid:blockname:properties>
    

Where `properties` is a comma-separated set of `name=value` pairs for any properties that you want to specify on the blockstate. Any properties that are not specified are given the same values as in the default blockstate.

This will return an IBlockState Object. Please refer to [the respective wiki entry](/Vanilla/Blocks/IBlockState/) for further information.

Note that this bracket handler will create a reference to one specific blockstate. If you would like to be able to match against multiple blockstates, please refer to [the IBlockStateMatcher wiki entry](/Vanilla/Blocks/IBlockStateMatcher).

## Examples

An example of the BlockState Bracket Handler would be:

    //block of dirt
    <blockstate:minecraft:dirt>
    
    //oak log, vertical
    <blockstate:minecraft:log>
    <blockstate:minecraft:log:variant=oak,axis=y>
    
    //spruce log, horizontal along the x-axis
    <blockstate:minecraft:log:variant=spruce,axis=x>