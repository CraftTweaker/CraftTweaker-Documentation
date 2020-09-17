# Tweaker entfernen

## ZenMethodenliste:

    // Entfernt den dem Startstatus entsprechenden Eintrag von dem angegebenen Reagent
    mods.compatskills.transmutations.removeStartStateFromReagent(IItemStack Reagent, IItemStack startState)
    mods. ompatskills.transmutations.removals.removeStartStateFromReagent(IItemStack Reagent, crafttweaker.api.block.IBlockState Zustand)
    
    // Löscht den Eintrag, der dem Startstatus von ALLEN Reagenten entspricht!
    mods.compatskills.transmutations.removals.removeStartStateReagentAgnostic(IItemStack state)
    mods.compatskills.transmutations.removeStartStateReagentAgnostic(crafttweaker.api.block.IBlockState state)
    
    // Entfernt den dem Endstaat entsprechenden Eintrag aus dem angegebenen Reagent.
    mods.compatskills.transmutations.removals.removeEndStateFromReagent(IItemStack reagent, IItemStack state)
    mods.compatskills.transmutations.removals.removeEndStateFromReagent(IItemStack reagent, crafttweaker.api.block.IBlockState state)
    
    // Entfernt den dem Endstaat entsprechenden Eintrag von allen Reagenten!
    mods.compatskills.transmutations.removals.removeEndStateReagentAgnostic(IItemStack Zustand)
    mods.compatskills.transmutations.removeEndStateReagentAgnostic(crafttweaker.api.block.IBlockState Zustand)