# Dodawanie Tweakera

## Lista ZenMethod

    // Dodaje stan blokowania > transmutacja stanu blokowania do określonego reaktora przedmiotów.
    mods.compatskills.transmutations.additions.addEntryToReagent(odczynnik IItemStack startstatusIItemStack, IItemStack endState);
    mods.compatskills.transmutations.additions. ddEntryToReagent(odczynnik IItemStac, crafttweaker.api.block.IBlockStatus1, crafttweaker.api.block.IBlockStatus2);
    
    // Dodaje stan Blockstate > Transmutacja Blockstate niezależnie od konkretnego odczynnika.
    // Oznacza to, że doda tę transmutację do dowolnego już dostępnego odczynnika na Mapie Transmutacji.
    mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(IItemStack startstan, IItemStack endState);
    mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(crafttweaker.api.block.IBlockState 1, crafttweaker.api.block.IBlockState stan2);