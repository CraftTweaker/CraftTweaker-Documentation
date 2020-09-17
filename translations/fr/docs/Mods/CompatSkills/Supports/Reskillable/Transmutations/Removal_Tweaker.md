# Tweaker de suppression

## Liste des méthodes Zen:

    // Supprime l'entrée correspondant à l'état de départ du reagent spécifié
    mods.compatskills.transmutations.removals.removeStartStateFromReagent(IItemStack reagent, IItemStack startState)
    mods. ompatskills.transmutations.removals.removeStartStateFromReagent(IItemStack reagent, crafttweaker.api.block.IBlockState state)
    
    // Supprime l'entrée correspondant à l'état de départ de TOUS les Reagents!
    mods.compatskills.transmutations.removals.removeStartStateReagentAgnostic(état IItemStack)
    mods.compatskills.transmutations.removals.removeStartStateReagentAgnostic(crafttweaker.api.block.IBlockState state)
    
    // Supprime l'entrée correspondant à l'État de fin du Reagent spécifié.
    mods.compatskills.transmutations.removals.removeEndStateFromReagent(IItemStack reagent, IItemStack state)
    mods.compatskills.transmutations.removals.removeEndStateFromReagent(IItemStack reagent, crafttweaker.api.block.IBlockState state)
    
    // Supprime l'entrée correspondant à l'état final de TOUS les Reagents!
    mods.compatskills.transmutations.removeEndStateReagentAgnostic(état IItemStack)
    mods.compatskills.transmutations.removals.removeEndStateReagentAgnostic(crafttweaker.api.block.IBlockState state)