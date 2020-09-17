# Removal Tweaker

## Lista de ZenMethod:

    // Elimina la entrada correspondiente al Estado de inicio del Reactor especificado
    mods.compatskills.transmutations.removals.removeStartStateFromReagent(IItemStack reagent, ItemStack startState)
    mods. ompatskills.transmutations.removals.removeStartStateFromReagent(ItemStack reagent, crafttweaker.api.block.IBlockState state)
    
    // Elimina la entrada correspondiente al estado inicial de TODOS los Reagentes!
    mods.compatskills.transmutations.removals.removeStartStateReagentAgnostic(IItemStack state)
    mods.compatskills.transmutations.removals.removeStartStateReagentAgnostic(crafttweaker.api.block.IBlockState state)
    
    // Elimina la Entrada correspondiente al Estado Final del Reagente especificado.
    mods.compatskills.transmutations.removals.removeEndStateFromReagent(ItemStack reagent, ItemStack state)
    mods.compatskills.transmutations.removals.removeEndStateFromReagent(ItemStack reagent, crafttweaker.api.block.IBlockState state)
    
    // Elimina la Entrada correspondiente al Estado Final de TODOS los Reagentos!
    mods.compatskills.transmutations.removals.removeEndStateReagentAgnostic(ItemStack state)
    mods.compatskills.transmutations.removals.removeEndStateReagentAgnostic(crafttweaker.api.block.IBlockState state)