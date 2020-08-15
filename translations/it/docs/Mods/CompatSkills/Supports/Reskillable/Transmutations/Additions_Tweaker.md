# Addizione Più Debole

## Elenco Zenmethod:

    // Aggiunge un Blockstate > Trasmutazione Blockstate al Reagente Itemstack specificato.
    mods.compatskills.transmutations.additions.addEntryToReagent(IItemStack reagent, IItemStack startState, IItemStack endState);
    mods.compatskills.transmutations.additions. ddEntryToReagent(IItemStack reagent, crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);
    
    // Aggiunge un Blockstate > Blockstate Transmutation indipendentemente da un reagente specifico.
    // Questo significa che aggiungerà questa Trasmutazione a qualsiasi reagente già disponibile nella Mappa di Trasmutazione.
    mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(IItemStack startState, IItemStack endState);
    mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);