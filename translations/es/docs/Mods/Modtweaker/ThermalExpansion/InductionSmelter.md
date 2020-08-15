# Fundición de inducción

## Paquete

`mods.thermalexpansion.Fundición de inducción`

## Adicional

```zenscript
mods.thermalexpansion.InductionSmelter.addRecipe(ItemStack primaryOutput, ItemStack primaryInput, ItemStack secondaryInput, int energy, @Optional ItemStack secondaryOutput, @Optional ItemStack secondaryChance);

mods. hermalexpansion.InductionSmelter.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:iron_ore>, 1500, <minecraft:stone>, 20);
```

## Eliminar

```zenscript
mods.thermalexpansion.Inductionsmallelter.removeRecipe(ItemStack primaryInput, IItemStack secondaryInput);

mods.thermalexpansion.InductionSmelter.removeRecipe(<minecraft:bucket>, <minecraft:sand>);
```