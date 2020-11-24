# Insolator

## Package

`mods.thermalexpansion.Insolator`

## Addition

```zenscript
//mods.thermalexpansion.Insolator.addRecipe(IItemStack primaryOutput, IItemStack primaryInput, IItemStack secondaryInput, int energy, @Optional IItemStack secondaryOutput, @Optional int secondaryChance, @Optional int water);

mods.thermalexpansion.Insolator.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:iron_ore>, 1500, <minecraft:stone>, 20, 1000);
```

```zenscript
//mods.thermalexpansion.Insolator.addRecipeSaplingInfuser(IItemStack primaryOutput, IItemStack primaryInput, IItemStack secondaryInput, int energy, @Optional IItemStack secondaryOutput, @Optional int secondaryChance, @Optional int water);

mods.thermalexpansion.Insolator.addRecipeSaplingInfuser(<minecraft:quartz>, <minecraft:netherrack>, <minecraft:cobblestone>, 1200, <minecraft:dirt>, 150, 300);
```

## Removal

```zenscript
//mods.thermalexpansion.Insolator.removeRecipe(IItemStack primaryInput, IItemStack secondaryInput);

mods.thermalexpansion.Insolator.removeRecipe(<minecraft:melon_seeds>, <thermalfoundation:fertilizer:1>);
```