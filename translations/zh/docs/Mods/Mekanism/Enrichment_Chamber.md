# Enrichment Chamber

## Addition

```java
mods.mekanism.enrichment.addRecipe(IItemStack inputStack, IItemStack outputStack)

mods.mekanism.enrichment.addRecipe(<minecraft:coal_block>, <mekanism:compressedCarbon> * 9);
```

## Removal

```java
mods.mekanism.enrichment.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack)

mods.mekanism.enrichment.removeRecipe(<minecraft:mossy_cobblestone>, <minecraft:cobblestone>);
mods.mekanism.enrichment.removeRecipe(<minecraft:mossy_stone_bricks>);
```

Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.