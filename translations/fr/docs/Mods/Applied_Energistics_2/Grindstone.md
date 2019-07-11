# Grindstone

### Importing

    import mods.appliedenergistics2.Grinder;
    

### Adding

    Grinder.addRecipe(IItemStack output, IItemStack input, int turns, @Optional IItemStack secondary1Output, @Optional float secondary1Chance, @Optional IItemStack secondary2Output, @Optional float secondary2Chance);
    
    Grinder.addRecipe(<minecraft:sapling>, <minecraft:leaves>, 4, <minecraft:sapling:5>, 0.3);
    

### Removing

    Grinder.removeRecipe(IItemStack input);
    
    Grinder.removeRecipe(<minecraft:quartz_ore>);