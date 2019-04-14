
# Enrichment Chamber
Addition
------
```
mods.mekanism.enrichment.addRecipe(IItemStack inputStack, IItemStack outputStack);

mods.mekanism.enrichment.addRecipe(<minecraft:coal_block>, <mekanism:compressedcarbon> * 9);
```

Removal
------
```
mods.mekanism.enrichment.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.enrichment.removeRecipe(<minecraft:mossy_cobblestone>, <minecraft:cobblestone>);
mods.mekanism.enrichment.removeRecipe(<minecraft:stonebrick:1>);
```
Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.

Removing all recipes
------
As of Mekanism 9.7.0 it is now possible to remove all Enrichment Chamber recipes. (This excludes any recipes added via CraftTweaker)
```
mods.mekanism.enrichment.removeAllRecipes();
```