# Pulverizer

## 所属包
`mods.thermalexpansion.Pulverizer`

## 添加配方

```zenscript
mods.thermalexpansion.Pulverizer.addRecipe(IItemStack output, IItemStack input, int energy, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Pulverizer.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## Removal

```zenscript
mods.thermalexpansion.Pulverizer.removeRecipe(IItemStack input);

mods.thermalexpansion.Pulverizer.removeRecipe(<thermalfoundation:material:136>);
```