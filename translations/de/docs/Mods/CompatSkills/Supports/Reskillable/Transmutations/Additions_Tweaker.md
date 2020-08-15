# Hinzufügen Tweaker

## ZenMethodenliste:

    // Fügt eine Blockstatus-Transmutation > Blockstatus-Transmutation zum angegebenen Gegenstapel-Reagent hinzu.
    mods.compatskills.transmutations.additions.addEntryToReagent(IItemStack reagent, IItemStack startState, IItemStack endState);
    mods.compatskills.transmutations.additions. ddEntryToReagent(IItemStack Reagent, crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);
    
    // Blockstate > Blockstate Transmutation unabhängig von einer bestimmten Reaktion hinzufügen.
    // Dies bedeutet, dass diese Transmutation zu allen bereits verfügbaren Reagenzien in der Transmutationskarte hinzugefügt wird.
    mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(IItemStack startState, IItemStack endState);
    mods.compatskills.transmutations.addEntryToReagentAgnostic(crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);