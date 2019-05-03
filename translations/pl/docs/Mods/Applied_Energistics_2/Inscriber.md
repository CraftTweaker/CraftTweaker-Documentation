# Inscriber

### Importing

    import mods.appliedenergistics2.Inscriber;
    

### Adding

When the `inscribe` boolean is true, the top and bottom inputs are not consumed.

    Inscriber.addRecipe(IItemStack output, IItemStack input, boolean inscribe, @Optional IItemStack topInput, @Optional IItemStack bottomInput);
    
    //turns eggs into Wither Skele spawn eggs, does not consume wither skull
    Inscriber.addRecipe(<minecraft:spawn_egg:5>, <minecraft:egg>, true, <minecraft:skull:1>);
    
    //combines bread, coco beans, and sugar. all inputs are consumed
    Inscriber.addRecipe(<minecraft:cookie>, <minecraft:minecraft:bread>, false, <minecraft:dye:3>, <minecraft:sugar>);
    

### Removing

    Inscriber.removeRecipe(IItemStack output);
    
    //removes printed silicon recipe 
    Inscriber.removeRecipe(<appliedenergistics2:material:20>);