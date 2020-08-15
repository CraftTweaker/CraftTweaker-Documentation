# 加算Tweaker

## ZenMethod リスト:

    // 指定したItemstack ReagentにBlockstate > Blockstate核変換を追加します。
    mods.compatskills.transmutations.additions.addEntryToReagent(IItemStack reagent, IItemStack startState, IItemStack endState);
    mods.compatskills.transmutations.additions.addEntryToReagent(IItemStack reagent, crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);
    
    // Adds a Blockstate > Blockstate Transmutation regardless of a specific reagent.
    // This means it will add this Transmuture to any available reagent in the Transmuture Map.
    mods.compatskills.transmutations.addEntryToReagentAgnostic(IItemStack startState, IItemStack endState);
    mods.compatskills.transmutions.addEntryToReagentAgnostic(crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);