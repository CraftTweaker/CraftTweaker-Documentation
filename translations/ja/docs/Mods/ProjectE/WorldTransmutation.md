# World Transmutation

## add

Adds a Philosopher Stone world transmutation, with an optional sneak click transmutation.

### [IItemStack](/Vanilla/Items/IItemStack/)

    #If the IItemStack's do not have a coresponding block, air is used instead.
    mods.projecte.WorldTransmutation.add(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);
    
    #Turn gold blocks into diamond blocks by right clicking, or into iron blocks by sneak right clicking 
    mods.projecte.WorldTransmutation.add(<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>);
    

### [IBlockState](/Vanilla/Blocks/IBlockState/)

    mods.projecte.WorldTransmutation.add(IBlockState output, IBlockState input, @Optional IBlockState sneakOutput);
    
    #Turn gold blocks into diamond blocks by right clicking, or into iron blocks by sneak right clicking
    mods.projecte.WorldTransmutation.add(<blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, <blockstate:minecraft:iron_block>);
    

## remove

Removes the Philosopher Stone world transmutations that have the same input, output, and sneakOutput.

### [IItemStack](/Vanilla/Items/IItemStack/)

    #If the IItemStack's do not have a coresponding block, air is used instead.
    mods.projecte.WorldTransmutation.remove(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);
    
    #Removes the recipe allowing cobblestone to be changed into stone/grass
    mods.projecte.WorldTransmutation.remove(<minecraft:stone>, <minecraft:cobblestone>, <minecraft:grass>);
    

### [IBlockState](/Vanilla/Blocks/IBlockState/)

    mods.projecte.WorldTransmutation.remove(IBlockState output, IBlockState input, @Optional IBlockState sneakOutput);
    
    #Removes the recipe allowing cobblestone to be changed into stone/grass
    mods.projecte.WorldTransmutation.remove(<blockstate:minecraft:stone>, <blockstate:minecraft:cobblestone>, <blockstate:minecraft:grass>); 
    

## removeAll

Removes all Philosopher Stone world transmutations, including any added by the user before the call to this method.

    mods.projecte.PhiloStone.removeAllWorldTransmutation();