# Compactor

## Package

`mods.thermalexpansion.Compactor`

The compactor supports 3 types of mods:

    Mint
    Press
    Storage
    

## Mint

### Addition

    mods.thermalexpansion.Compactor.addMintRecipe(IItemStack output, IItemStack input, int energy);
    
    mods.thermalexpansion.Compactor.addMintRecipe(<minecraft:sand>, <minecraft:stick>, 1500);
    

### Removal

    mods.thermalexpansion.Compactor.removeMintRecipe(IItemStack input);
    
    mods.thermalexpansion.Compactor.removeMintRecipe(<thermalfoundation:material:167>);
    

## Press

### Addition

    mods.thermalexpansion.Compactor.addPressRecipe(IItemStack output, IItemStack input, int energy);
    
    mods.thermalexpansion.Compactor.addPressRecipe(<minecraft:sand>, <minecraft:apple>, 1500);
    

### Removal

    mods.thermalexpansion.Compactor.removePressRecipe(IItemStack input);
    
    mods.thermalexpansion.Compactor.removePressRecipe(<thermalfoundation:material:167>);
    

## Storage

### Addition

    mods.thermalexpansion.Compactor.addStorageRecipe(IItemStack output, IItemStack input, int energy);
    
    mods.thermalexpansion.Compactor.addStorageRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
    

### Removal

    mods.thermalexpansion.Compactor.removeStorageRecipe(IItemStack input);
    
    mods.thermalexpansion.Compactor.removeStorageRecipe(<thermalfoundation:material:167>);
    

## Gear

### Addition

    mods.thermalexpansion.Compactor.addGearRecipe(IItemStack output, IItemStack input, int energy);
    
    mods.thermalexpansion.Compactor.addGearRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
    

### Removal

    mods.thermalexpansion.Compactor.removeGearRecipe(IItemStack input);
    
    mods.thermalexpansion.Compactor.removeGearRecipe(<thermalfoundation:material:167>);