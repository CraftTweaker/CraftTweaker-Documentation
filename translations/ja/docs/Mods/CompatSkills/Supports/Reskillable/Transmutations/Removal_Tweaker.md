# 削除Tweaker

## ZenMethod リスト:

    // Removes the Entry corresponding to the Starting State from the specified Reagent
    mods.compatskills.transmutations.removals.removeStartStateFromReagent(IItemStack reagent, IItemStack startState)
    mods.compatskills.transmutations.removals.removeStartStateFromReagent(IItemStack reagent, crafttweaker.api.block.IBlockState state)
    
    // Removes the Entry corresponding to the Starting State from ALL Reagents!
    mods.compatskills.transmutations.removals.removeStartStateAgnostic(IItemStack state)
    mods.compatskills.transmutations.removals.removeStartStateAgnostic(crafttweaker.api.block.IBlockState state)
    
    // 指定したReagentからエンドステートに対応するエントリを削除します。
    mods.compatskills.transmutations.removeEndStateFromReagent(IItemStack reagent, IItemStack state)
    mods.compatskills.transmutations.removals.removeEndStateFromReagent(IItemStack reagent, crafttweaker.api.block.IBlockState state)
    
    // すべての試薬から終了状態に対応するエントリを削除します!
    mods.compatskills.transmutations.removals.removeEndStateAgnostic(IItemStack state)
    mods.compatskills.transmutations.removals.removeEndStateAgnostic(crafttweaker.api.block.IBlockState state)