# Arcane Ensorcellator (a.k.a Enchanter)

## Package

`mods.thermalexpansion.Enchanter`

## Addition

    mods.thermalexpansion.Enchanter.addRecipe(IItemStack output, IItemStack input, IItemStack secondInput, int energy, int experience, boolean empowered);
    
    mods.thermalexpansion.Enchanter.addRecipe(<minecraft:enchanted_book>.withTag({StoredEnchantments: [{id: 35}]}), <minecraft:book>, <minecraft:diamond>, 12000, 3000, false);
    

## Removal

    mods.thermalexpansion.Enchanter.removeRecipe(IItemStack input, IItemStack secondInput);
    
    mods.thermalexpansion.Enchanter.removeRecipe(<minecraft:book>, <minecraft:diamond>);