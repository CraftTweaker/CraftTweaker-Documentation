# Твикер добавок

## Список ZenMethod:

    // Добавляет Blockstate > трансформацию Blockstate в указанный Itemstack Reagent.
    mods.compatskills.transmutations.additions.addEntryToReagent(IItemStack, стартовое состояние IItemStack);
    mods.compatskills.transmutations.additions. ddEntryToReagent(IItemStack, crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);
    
    // Добавляет Blockstate > Blockstate Transmutation вне зависимости от конкретного реагента.
    // Это означает, что в карте трансмутации будет добавлена эта трансмутация в любой уже доступный реагент.
    mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(IItemStack), endState;
    mods.compatskills.transmutations.additions.addEntryToReagentAgnostic(crafttweaker.api.block.IBlockState state1, crafttweaker.api.block.IBlockState state2);