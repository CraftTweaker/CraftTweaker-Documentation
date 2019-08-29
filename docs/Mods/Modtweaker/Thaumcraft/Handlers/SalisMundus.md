# Salis Mundus

This package allows you to add conversion handlers for thaumcraft's salis mundus handler.  
These handlers are invoked when you click a block in the world with Thaumcraft's salis mundus to change them to something else.  

If that result is a block, it will be placed in the world, if not it will be dropped as item.


## Import the package
To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:  
```
import mods.thaumcraft.SalisMundus;
```


## Add Recipes

You can either specify an [IBlock](/Vanilla/Blocks/IBlock/) or an [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).  
If you don't specify a research, this recipe will always be possible, if you do decide to specify a research string, you need to have the research unlocked in order for the conversion to work.

```
//mods.thaumcraft.SalisMundus.addSingleConversion(IBlock in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<blockstate:minecraft:dirt>.block, <minecraft:bedrock>);

//mods.thaumcraft.SalisMundus.addSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
mods.thaumcraft.SalisMundus.addSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<ore:blockIron>, <minecraft:bedrock>);
```

## Remove Recipes

You can also remove all recipes that return a matching item.  
This handler checks if the parameter provided matches with the output itemStack, so you could also remove all recipes using the wildcard ingredient `<*>`.

```
mods.thaumcraft.SalisMundus.removeSingleConversion(IIngredient output);

//Removes ALL registered handlers
mods.thaumcraft.SalisMundus.removeSingleConversion(<*>);

//Only removes the crucible handler
mods.thaumcraft.SalisMundus.removeSingleConversion(<thaumcraft:crucible>);
```