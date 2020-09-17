# WytapianieInductionShut

## Pakiet

`[PLACEHOLDER] InductionSmelter`

## Dodanie

```zenscript
mods.thermalexpansion.InductionSmelter.addRecipe(IItemStack primaryOutput, IItemStack primaryInput, IItemStack secondaryInput, int Energia, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods. hermalexpansion.InductionSmelter.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:iron_ore>, 1500, <minecraft:stone>, 20);
```

## Usuwanie

```zenscript
mods.thermalexpansion.InductionSmelter.removeRecipe(IItemStack primaryInput, IItemStack secondaryInput);

mods.thermalexpansion.InductionSmelter.removeRecipe(<minecraft:bucket>, <minecraft:sand>);
```