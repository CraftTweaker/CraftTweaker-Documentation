# Arcane Ensorcellator (a.k.a Enchanter)

## Package
`mods.thermalexpansion.Enchanter`

## Addition

```
mods.thermalexpansion.Enchanter.addRecipe(IItemStack output, IItemStack input, IItemStack secondInput, int energy, int experience, boolean empowered);

mods.thermalexpansion.Enchanter.addRecipe(<minecraft:diamond>, <minecraft:dirt>, <minecraft:plank>, 2048, 20, true);
```

## Removal

```
mods.thermalexpansion.Enchanter.removeRecipe(IItemStack input, IItemStack secondInput);

mods.thermalexpansion.Enchanter.removeRecipe(<minecraft:dirt>, <minecraft:plank>);
```