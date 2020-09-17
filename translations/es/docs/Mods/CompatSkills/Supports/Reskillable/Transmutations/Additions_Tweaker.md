# Adición Tweaker

## Lista de ZenMethod:

    // Agrega una transmutación Blockstate > Blockstate al Itemstack Reagent especificado.
    mods.compatskills.transmutations.additions.addEntryToReagent(ItemStack reagent, ItemStack startState, ItemStack endState);
    mods.compatskills.transmutations.additions. ddEntryToReagent(IItemStack reagent, crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);
    
    // Añade un Blockstate > Transmutación Blockstate independientemente de un reagente específico.
    // Esto significa que añadirá esta Transmutación a cualquier reagente ya disponible en el Mapa de Transmutación.
    mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(ItemStack startState, ItemStack endState);
    mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);