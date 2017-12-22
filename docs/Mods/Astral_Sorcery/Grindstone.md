# Grindstone

You can use CrT to add or remove recipes form the AS grindstone.


## Calling
You can call the InfusionRecipe package using `mods.astralsorcery.Grindstone`.

## Removing
This will remove the first grinding recipe it finds that creates the provided [IItemStack](/Vanilla/Items/IItemStack) `output`.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!
```JAVA
//mods.astralsorcery.Grindstone.removeRecipe(IItemStack output);
mods.astralsorcery.Grindstone.removeRecipe(<minecraft:redstone>);
```

## Addition
```JAVA
//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:stone>, <minecraft:gravel>);
```