# Fonderie d'induction

## Paquet

`InductionSmelter`

## Ajouter

```zenscript
mods.thermalexpansion.InductionSmelter.addRecipe(IItemStack primaryOutput, IItemStack primaryInput, IItemStack secondaryInput, int energy, @Optional IItemStack secondyOutput, @Optional int secondaryChance);

mods. hermalexpansion.InductionSmelter.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:iron_ore>, 1500, <minecraft:stone>, 20);
```

## Retirer

```zenscript
mods.thermalexpansion.InductionSmelter.removeRecipe(IItemStack primaryInput, IItemStack secondaryInput);

mods.thermalexpansion.InductionSmelter.removeRecipe(<minecraft:bucket>, <minecraft:sand>);
```