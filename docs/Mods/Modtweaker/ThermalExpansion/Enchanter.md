# Enchanter

The Enchanter package is used for adding or removing recipes to/from the Thermal Expansion Enchanter (a.k.a Arcane Ensorcellator).

## Calling
You can call the Enchanter package using `mods.thermalexpansion.Enchanter`

## Recipe addition

If `empowered` is false, the recipe will be added to the Standard Enchanter, to the Empowered one otherwise

```
//mods.thermalexpansion.Enchanter.addRecipe(IItemStack output, IItemStack input, IItemStack secondInput, int energy, int experience, boolean empowered) {
mods.thermalexpansion.Enchanter.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:grass>, 5000, 3, false);
```

## Recipe removal

```
//mods.thermalexpansion.Enchanter. removeRecipe(IItemStack input, IItemStack secondInput);
mods.thermalexpansion.Enchanter.removeRecipe(<minecraft:iron_ingot>, <minecraft:grass>);
```