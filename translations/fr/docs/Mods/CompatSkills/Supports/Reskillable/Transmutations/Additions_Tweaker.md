# Réglage de l'Addition

## Liste des méthodes Zen:

    // Ajoute une transmutation Blockstate > Blockstate au réactif Itemstack spécifié.
    mods.compatskills.transmutations.additions.addEntryToReagent(IItemStack reagent, IItemStack startState, IItemStack endState);
    mods.compatskills.transmutations.additions. ddEntryToReagent(Reagent IItemStack, crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);
    
    // Ajoute un Blockstate > Blockstate Transmutation indépendamment d'un réactif spécifique.
    // Cela signifie qu'il ajoutera cette Transmutation à n'importe quel réactif déjà disponible dans la Carte de Transmutation.
    mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(IItemStack startState, IItemStack endState);
    mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);