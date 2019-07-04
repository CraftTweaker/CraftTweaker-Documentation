# Starlight Infusion Recipes

You can add and remove crafting infusions.

## Calling

You can call the InfusionRecipe package using `mods.astralsorcery.StarlightInfusion`.

## Removing

This will remove the first infusion it finds that creates the provided [IItemStack](/Vanilla/Items/IItemStack/) `output`.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

```JAVA
//mods.astralsorcery.StarlightInfusion.removeInfusion(IItemStack output);
mods.astralsorcery.StarlightInfusion.removeInfusion(<minecraft:ice>);
```

## Addition

```JAVA
//mods.astralsorcery.StarlightInfusion.addInfusion(IItemStack input, IItemStack output, boolean consumeMultiple, float consumptionChance, int craftingTickTime);
mods.astralsorcery.StarlightInfusion.addInfusion(<astralsorcery:itemjournal>, <minecraft:bow>, false, 0.7, 200);
```