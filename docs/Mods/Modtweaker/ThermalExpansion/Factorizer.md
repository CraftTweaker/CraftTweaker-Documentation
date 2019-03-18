# Factorizer

The Factorizer Manager allows you to add recipes to the factorizer.  


## Import the package
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:  
```
import mods.thermalexpansion.Factorizer;
```

## Add Recipes

You can add oneway split/combine recipes or two-way bindings.  


```
//mods.thermalexpansion.Factorizer.addRecipeSplit(IItemStack in, IItemStack out);
mods.thermalexpansion.Factorizer.addRecipeSplit(<minecraft:dirt>, <minecraft:grass> * 5);

//mods.thermalexpansion.Factorizer.addRecipeCombine(IItemStack in, IItemStack out);
mods.thermalexpansion.Factorizer.addRecipeCombine(<minecraft:grass> * 5, <minecraft:dirt>);

//mods.thermalexpansion.Factorizer.addRecipeBoth(IItemStack combined, IItemStack split);
mods.thermalexpansion.Factorizer.addRecipeBoth(<minecraft:trapped_chest>, <minecraft:chest> * 13);
```


## Remove Recipes

You can of course also remove recipes.  
If you want to remove a two-way binding you'll need tow calls, though.
```
//mods.thermalexpansion.Factorizer.removeRecipeSplit(IItemStack in);
mods.thermalexpansion.Factorizer.removeRecipeSplit(<minecraft:iron_block>);

//mods.thermalexpansion.Factorizer.removeRecipeCombine(IItemStack in);
mods.thermalexpansion.Factorizer.removeRecipeCombine(<minecraft:iron_ingot> * 9);
```