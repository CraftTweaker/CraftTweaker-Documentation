# Block Bracket Handler

The Block Bracket Handler gives you access to the blocks in the game. It is only possible to get blocks registered in the game, so adding or removing mods may cause issues if you reference the mod's blocks in a Block Bracket Handler.

Blocks are referenced in the Block Bracket handler this way:

    <block:modID:blockName>
    
    <block:minecraft:dirt>
    

If the block is found, this will return an [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) Object.  
Please refer to the [respective Wiki entry](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) for further information on what you can do with these.